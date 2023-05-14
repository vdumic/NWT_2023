exports.up = async function (sql) {
  await sql`
      CREATE TABLE IF NOT EXISTS products (
          id SERIAL PRIMARY KEY NOT NULL,
          slug CHARACTER VARYING(255) NOT NULL UNIQUE
      )
    `;
};

exports.down = async function (sql) {
  await sql`
      DROP TABLE IF EXISTS products
    `;
};
