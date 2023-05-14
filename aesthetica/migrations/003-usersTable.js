exports.up = async function (sql) {
  await sql`
          CREATE TABLE IF NOT EXISTS users (
              id SERIAL PRIMARY KEY NOT NULL,
              email CHARACTER VARYING(50) NOT NULL UNIQUE,
              password TEXT,
              firstName CHARACTER VARYING(50) NOT NULL,
              lastName CHARACTER VARYING(50) NOT NULL,
              address CHARACTER VARYING(255) NOT NULL,
              phoneNumber CHARACTER VARYING(50) NOT NULL,
              city CHARACTER VARYING(50) NOT NULL,
              zipcode CHARACTER VARYING(50) NOT NULL
          )
        `;
};

exports.down = async function (sql) {
  await sql`
          DROP TABLE IF EXISTS users
        `;
};
