import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    video_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "videos",
      required: true,
    },
    product_url: { type: String, required: true },
    img_url: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export const products = mongoose.model("products", productSchema);
