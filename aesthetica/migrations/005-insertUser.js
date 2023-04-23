const bcrypt = require("bcrypt");

const hashPasswd = async () => {
  return bcrypt.hash("12345678", 10).then(function (hash) {
    return hash;
  });
};

exports.up = async function (sql) {
  password = await hashPasswd();
  await sql`
          INSERT INTO users (email, password, firstName, lastName, address, phoneNumber, city, zipcode)
          VALUES ('test@test.com', ${password}, 'Ana', 'Anic', 'Splitska ulica 10', '12345666', 'Split', '21000')
        `;
};

exports.down = async function (sql) {
  await sql`
          DELETE FROM users
        `;
};
