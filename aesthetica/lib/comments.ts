import sql from "./db";

export interface Comment {
  id: number;
  text: String;
  firstname: String;
  lastname: String;
  date: Date;
}

export async function list(slug: string) {
  return await sql<Comment[]>`
    SELECT id, text, updatedat AS date FROM comments
    WHERE productslug =${slug}
    ORDER BY id
  `;
}

export async function remove(slug: string) {
  return await sql<Comment[]>`
    DELETE FROM comments 
    WHERE productslug = ${slug}
    RETURNING id, text
  `;
}
