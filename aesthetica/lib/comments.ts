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
    SELECT id, text, useremail, updatedat AS date FROM comments
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

export async function add(slug: string, email: string, text: string) {
  return await sql`
    INSERT INTO comments (text, productslug, useremail)
    VALUES (${text}, ${slug}, ${email})
  `;
}

export async function edit(slug: string, text: string) {
  return await sql`
    UPDATE comments SET text=${text} WHERE productslug=${slug}
  `;
}
