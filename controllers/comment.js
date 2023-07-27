const Comment = require("../models/comment");

// Post a comment from a video
const commentPost = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  commentPost,
};