const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  cost: Number,
  available_quantity: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
