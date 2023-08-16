import express from "express";
import {
  getVideoList,
  getVideoDetail,
} from "../controllers/videosController.js";

const videosRouter = express.Router();

videosRouter.get("/", getVideoList);
videosRouter.get("/:id", getVideoDetail);

export default videosRouter;
