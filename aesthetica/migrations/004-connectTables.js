exports.up = async function (sql) {
  await sql`
      CREATE TABLE IF NOT EXISTS productComment (
          id_product BIGINT references products(id),
          id_comment BIGINT references comments(id),
          PRIMARY KEY (id_product, id_comment)
      )
    `;

  await sql`
      CREATE TABLE IF NOT EXISTS userComment (
          id_user BIGINT references users(id),
          id_comment BIGINT references comments(id),
          PRIMARY KEY (id_user, id_comment)
      )
    `;
};

exports.down = async function (sql) {
  await sql`
      DROP TABLE IF EXISTS productComment
    `;

  await sql`
      DROP TABLE IF EXISTS userComment
    `;
};
