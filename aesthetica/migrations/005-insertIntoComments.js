exports.up = async function (sql) {
  await sql`
            INSERT INTO comments (text, productslug, useremail)
            VALUES ('This chair is awesome!', 'pino-chair', 'admin@test.com'),
            ('This chair is not good', 'pino-chair', 'test@test.com'),
            ('I like this table', 'jensen-round-dining-table', 'admin@test.com'),
            ('This bed is awesome!', 'andres-bed', 'admin@test.com'),
            ('This bed is so comfortable.', 'andres-bed', 'test@test.com'),
            ('I love sleeping in this bed!', 'andres-bed', 'admin@test.com')
          `;
};

exports.down = async function (sql) {
  await sql`
      DELETE FROM comments
      `;
};
