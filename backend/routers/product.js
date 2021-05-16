import express from 'express';
import Product from '../models/product.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
}))

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const productDetail = await Product.findById(req.params.id);
    productDetail ? res.send(productDetail) : res.status(404).send({ message: 'Product not found' });
}))

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    //await Product.remove({});
    const createdProduct = await Product.insertMany(data.products);
    res.send({ createdProduct });
}))

export default productRouter;