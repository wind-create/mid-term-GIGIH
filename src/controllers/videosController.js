import {
  getVideosListService,
  getVideoDetailService,
} from "../services/videosService.js";

export const getVideoList = async (req, res) => {
  try {
    const videoList = await getVideosListService();
    res.status(200).json({
      message: "Successfully fetched video list",
      data: videoList,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVideoDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const videoDetail = await getVideoDetailService(id);

    if (videoDetail.length === 0) {
      return res.status(404).json({
        message: "Failed to fecth video detail",
        error: `video detail with video id ${id} not found`,
      });
    }

    res.status(200).json({
      message: `Successfully fetched video with id ${id}`,
      data: videoDetail,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
