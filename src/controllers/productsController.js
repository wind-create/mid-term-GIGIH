import { getProductListService } from "../services/productsService.js";

export const getProductList = async (req, res) => {
  const { id } = req.params;
  try {
    const productList = await getProductListService(id);

    if (productList.length === 0) {
      return res.status(404).json({
        message: "Failed to fecth product list",
        error: `product list with video id ${id} not found`,
      });
    }

    res.status(200).json({
      message: "Successfully fetched product list",
      data: productList,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
