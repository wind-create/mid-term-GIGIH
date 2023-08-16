import { videos } from "../models/videosModels.js";

export const getVideosListService = async () => {
  let data = await videos.find();
  return data;
};

export const getVideoDetailService = async (id) => {
  let data = await videos.find({ _id: id });
  return data;
};
