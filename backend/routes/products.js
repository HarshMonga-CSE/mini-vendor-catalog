// backend/routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/products
router.post('/', async (req, res) => {
  const { name, description, price } = req.body;
  if (!name || price === undefined) return res.status(400).json({ message: 'Name and price required' });

  const parsedPrice = Number(price);
  if (isNaN(parsedPrice)) return res.status(400).json({ message: 'Price must be a number' });

  const product = new Product({ name, description, price: parsedPrice });
  try {
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/products/:id
router.delete('/:id', async (req, res) => {
  try {
    const removed = await Product.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
