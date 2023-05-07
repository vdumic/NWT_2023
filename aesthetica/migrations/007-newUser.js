exports.up = async function (sql) {
  await sql`CREATE EXTENSION pgcrypto`;
  await sql`ALTER TABLE users
            ALTER COLUMN password TYPE text`;
  await sql`
          INSERT INTO users (email, password, firstName, lastName, address, phoneNumber, city, zipcode)
          VALUES ('admin@test.com', crypt('password', gen_salt('md5')), 'Ana', 'Anic', 'Splitska ulica 10', '12345666', 'Split', '21000')
        `;
};

exports.down = async function (sql) {
  await sql`
          DELETE FROM users WHERE email='admin@test.com'
        `;
};
