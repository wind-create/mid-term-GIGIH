import {
  getCommentListService,
  submitCommentService,
} from "../services/commentsService.js";
import { validationResult } from "express-validator";

export const getCommentList = async (req, res) => {
  const { id } = req.params;
  try {
    const commentList = await getCommentListService(id);

    if (commentList.length === 0) {
      return res.status(404).json({
        message: "Failed to fecth comment list",
        error: `comment list with video id ${id} not found`,
      });
    }

    res.status(200).json({
      message: "Successfully fetched comment list",
      data: commentList,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const submitComment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { video_id, username, comment } = req.body;

  try {
    const result = await submitCommentService(video_id, username, comment);
    if (result.success)
      return res
        .status(201)
        .json({ message: "Comment submited successfully!" });
    else return res.status(400).json({ message: result.success });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
