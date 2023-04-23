import * as products from "../../lib/products";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(await products.list());
    default:
      return res.status(405).send("Method not allowed!");
  }
}
