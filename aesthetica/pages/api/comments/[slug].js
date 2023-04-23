import * as comments from "../../../lib/comments";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const { slug } = req.query;
      console.log(slug);
      return res.status(200).json(await comments.list(slug));
    default:
      return res.status(405).send("Method not allowed!");
  }
}
