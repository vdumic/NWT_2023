exports.up = async function (sql) {
  await sql`
        CREATE TABLE IF NOT EXISTS comments (
            id SERIAL PRIMARY KEY NOT NULL,
            text CHARACTER VARYING(255) NOT NULL,
            createdAt DATE DEFAULT CURRENT_DATE,
            updatedAt DATE DEFAULT CURRENT_DATE,
            productslug CHARACTER VARYING(255),
            useremail CHARACTER VARYING(255)
        )
      `;
};

exports.down = async function (sql) {
  await sql`
        DROP TABLE IF EXISTS comments
      `;
};
