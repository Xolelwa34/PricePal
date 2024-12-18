import connectMongo from "../../lib/mongodb";
import Product from "../../models/Product";

export default async function handler(req, res) {
  await connectMongo();

  if (req.method === "GET") {
    const products = await Product.find({});
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    const { name, store, price } = req.body;
    const product = new Product({ name, store, price });
    await product.save();
    return res.status(201).json(product);
  }
}

