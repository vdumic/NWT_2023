exports.up = async function (sql) {
  await sql`
      INSERT INTO products (slug)
      VALUES ('pino-chair'), 
      ('girola-chair'), 
      ('mobelica-chair'), 
      ('capitol-chair'), 
      ('jensen-round-dining-table'), 
      ('viven-bar-cabinet'), 
      ('floating-lines-shoes-rack'), 
      ('profile-narrow-console-table'), 
      ('seamless-bathroom-cabinet'), 
      ('metal-framed-round-mirror'), 
      ('mitzi-bedside-table'), 
      ('andres-bed'), 
      ('andres-bench'), 
      ('carlo-mid-century-chair'), 
      ('streamline-coffee-table'), 
      ('andres-sofa-bed'), 
      ('faux-fur-cushion'), 
      ('swiwel-office-chair'), 
      ('parsons-desk'), 
      ('audrey-changing-table'), 
      ('audrey-convertible-crib'), 
      ('elisa-chair'), 
      ('arper-chair'), 
      ('hayes-round-chandelier')
    `;
};

exports.down = async function (sql) {
  await sql`
      DELETE FROM products
    `;
};
