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
    SELECT comments.id AS id, comments.text AS text, users.firstName AS firstname, users.lastName AS lastname, comments.updatedat AS date FROM comments
    JOIN productcomment ON comments.id = productcomment.id_comment
    JOIN usercomment ON comments.id = usercomment.id_user
    JOIN products ON productcomment.id_product = products.id
    JOIN users ON usercomment.id_user = users.id
    WHERE products.slug =${slug}
    ORDER BY comments.id
  `;
}
