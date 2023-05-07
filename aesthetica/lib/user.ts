import sql from "./db";

export interface Valid {
  validation: String;
}

export async function list(email: string, password: string) {
  return await sql<Valid[]>`
    SELECT (password = crypt(${password}, password)) AS pswmatch FROM users
    WHERE email =${email}
  `;
}
