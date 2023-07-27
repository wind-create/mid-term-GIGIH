const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Route to create a new product
router.post('/', (req, res) => {
  const { id, name, cost, available_quantity } = req.body;

  // Check if the required fields are provided
  if (!id || !name || !cost || !available_quantity) {
    return res.status(400).json({ error: 'Please provide id, name, cost, and available_quantity.' });
  }

  const newProduct = new Product({ id, name, cost, available_quantity });

  newProduct.save()
    .then((product) => res.json(product))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Route to get all products
router.get('/', (req, res) => {
  Product.find()
    .then((products) => res.json({ products }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Route to get a specific product by ID
router.get('/:id', (req, res) => {
  const productId = req.params.id;

  Product.findOne({ id: productId })
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
      }

      res.json(product);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Route to update a specific product by ID
router.patch('/:id', (req, res) => {
  const productId = req.params.id;
  const { name, cost, available_quantity } = req.body;

  Product.findOne({ id: productId })
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
      }

      // Update product properties if provided in the request body
      if (name) {
        product.name = name;
      }

      if (cost) {
        product.cost = cost;
      }

      if (available_quantity) {
        product.available_quantity = available_quantity;
      }

      product.updated_at = new Date();

      product.save()
        .then((updatedProduct) => res.json(updatedProduct))
        .catch((err) => res.status(500).json({ error: err.message }));
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Route to delete a specific product by ID
router.delete('/:id', (req, res) => {
  const productId = req.params.id;

  Product.findOneAndDelete({ id: productId })
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
      }

      res.json({ message: 'Product deleted successfully.' });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
