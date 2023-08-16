const Comment = require("../models/comment");

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
