import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img_url: { type: String, required: true },
    video_url: { type: String, required: true },
  },
  { timestamps: true }
);

export const videos = mongoose.model("videos", videoSchema);
