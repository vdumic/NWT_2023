exports.up = async function (sql) {
  await sql`CREATE EXTENSION pgcrypto`;

  await sql`
          INSERT INTO users (email, password, firstName, lastName, address, phoneNumber, city, zipcode)
          VALUES ('admin@test.com', crypt('password', gen_salt('md5')), 'Ana', 'Anic', 'Splitska ulica 10', '12345666', 'Split', '21000'),
          ('test@test.com', crypt('1234test', gen_salt('md5')), 'Ivo', 'Ivic', 'Splitska ulica 10', '12345666', 'Split', '21000')
        `;
};

exports.down = async function (sql) {
  await sql`
          DELETE FROM users
        `;

  await sql`
        DROP EXTENSION pgcrypto
      `;
};
