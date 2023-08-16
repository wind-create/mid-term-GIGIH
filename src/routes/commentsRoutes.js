import express from "express";
import {
  getCommentList,
  submitComment,
} from "../controllers/commentsController.js";
import { body } from "express-validator";

const commentsRouter = express.Router();

commentsRouter.get("/:id", getCommentList);
commentsRouter.post(
  "/",
  [
    body("video_id").notEmpty().withMessage("video_id is requied"),
    body("username")
      .notEmpty()
      .withMessage("username is required")
      .isString()
      .withMessage("username must be a string"),
    body("comment")
      .notEmpty()
      .withMessage("comment is required")
      .isString()
      .withMessage("comment must be a string"),
  ],
  submitComment
);

export default commentsRouter;
