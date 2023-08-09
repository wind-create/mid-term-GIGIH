const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videos');

// Route to get all videos
router.get('/', videoController.getVideoLists);

// Route to get a specific video by ID
router.get('/:id', videoController.getVideoDetails);

// Route to create a new video
router.post('/', videoController.postVideo);

// Route to edit a video
router.patch('/:id', videoController.editVideo);

// Route to delete a video
router.delete('/:id', videoController.deleteVideo);

// Route to post a comment on a video by ID
router.post('/:id/comments', videoController.postCommentFromVideo);

// Route to get products associated with a video by ID
router.get('/:id/products', videoController.getProductsFromVideo);

// Route to get comments associated with a video by ID
router.get('/:id/comments', videoController.getCommentsFromVideo);

module.exports = router;


