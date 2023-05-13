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
      return res.status(201).json(await comments.edit(slug, req.body.text));
    case "DELETE":
      const removed = await comments.remove(slug);
      return res.status(removed.length > 0 ? 204 : 404).end();
    default:
      return res.status(405).send("Method not allowed!");
  }
}
