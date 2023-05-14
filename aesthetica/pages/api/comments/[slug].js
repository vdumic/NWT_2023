import * as comments from "../../../lib/comments";

export default async function handler(req, res) {
  const { slug } = req.query;
  switch (req.method) {
    case "GET":
      return res.status(200).json(await comments.list(slug));
    case "POST":
      return res
        .status(201)
        .json(await comments.add(slug, req.body.email, req.body.text));
    case "PUT":
      return res
        .status(201)
        .json(await comments.edit(req.body.id, req.body.text));
    default:
      return res.status(405).send("Method not allowed!");
  }
}
