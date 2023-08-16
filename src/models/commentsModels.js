import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    video_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "videos",
      required: true,
    },
    username: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

export const Comments = mongoose.model("comments", commentSchema);
