exports.up = async function (sql) {
  await sql`
        INSERT INTO comments (text)
        VALUES ('This chair is awesome!')
      `;

  await sql`
        INSERT INTO productcomment (id_product, id_comment)
        VALUES (3, 1)
      `;

  await sql`
        INSERT INTO usercomment (id_user, id_comment)
        VALUES (1, 1)
      `;
};

exports.down = async function (sql) {
  await sql`
        DELETE FROM comments
      `;

  await sql`
      DELETE FROM productComment
    `;

  await sql`
      DELETE FROM userComment
  `;
};
