import express from 'express';
import { getProductList } from '../controllers/productsController.js';

const productsRouter = express.Router();

productsRouter.get('/:id', getProductList);

export default productsRouter;