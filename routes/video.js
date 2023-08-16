const express = require("express");
const router = express.Router();
const videoController = require("../controllers/video");

router.post("/", videoController.postVideo);
router.get("/", videoController.getVideoLists);
router.get("/products/:id", videoController.getProductsFromVideo);
router.get("/comments/:id", videoController.getCommentsFromVideo);
router.post("/comment/:id", videoController.postCommentFromVideo);
router.get("/:id", videoController.getVideoDetails);
router.put("/:id", videoController.editVideo);
router.delete("/:id", videoController.deleteVideo);

module.exports = router;
