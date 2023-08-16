import { products } from "../models/productsModels.js";

export const getProductListService = async (video_id) => {
    let data = await products.find({ video_id:  video_id});
    return data;
}