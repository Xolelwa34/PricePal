import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  store: { type: String, required: true },
  price: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
