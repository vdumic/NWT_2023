exports.up = async function (sql) {
  await sql`DELETE FROM productcomment`;

  await sql`DELETE FROM usercomment`;

  await sql`DELETE FROM comments`;

  await sql`ALTER TABLE comments
            ADD COLUMN productslug CHARACTER VARYING(255),
            ADD COLUMN useremail CHARACTER VARYING(255)`;

  await sql`
            INSERT INTO comments (text, productslug, useremail)
            VALUES ('This chair is awesome!', 'pino-chair', 'admin@test.com')
          `;
};

exports.down = async function (sql) {
  await sql`
          `;
};
