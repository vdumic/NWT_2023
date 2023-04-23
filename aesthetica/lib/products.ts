import sql from "./db";

export interface Product {
  id: number;
  slug: String;
}

export async function list() {
  return await sql<Product[]>`
    SELECT id, slug FROM products
    ORDER BY id
  `;
}

// export async function create(todo: ToDo) {
//   return await sql<ToDo[]>`
//     INSERT INTO todos (text, done) VALUES (${todo.text}, false)
//     RETURNING id, text, done
//   `;
// }

// export async function update(todo: ToDo) {
//   return await sql<ToDo[]>`
//     UPDATE todos SET done=${todo.done} WHERE id=${todo.id}
//     RETURNING id, text, done
//   `;
// }

// export async function remove(todo: ToDo) {
//   return await sql<ToDo[]>`
//     DELETE FROM todos WHERE id=${todo.id}
//     RETURNING id, text, done
//   `;
// }
