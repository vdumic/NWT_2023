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
