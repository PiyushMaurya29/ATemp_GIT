const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to products data file
const productsFilePath = path.join(__dirname, 'data', 'products.json');

// Helper function to read products from file
const readProducts = () => {
  try {
    const data = fs.readFileSync(productsFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Helper function to write products to file
const writeProducts = (products) => {
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};

// API Routes

// GET all products
app.get('/api/products', (req, res) => {
  const products = readProducts();
  res.json(products);
});

// GET single product by ID
app.get('/api/products/:id', (req, res) => {
  const products = readProducts();
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.json(product);
});

// POST create new product
app.post('/api/products', (req, res) => {
  const products = readProducts();
  const { name, price, description, image } = req.body;
  
  if (!name || !price || !description) {
    return res.status(400).json({ message: 'Name, price, and description are required' });
  }
  
  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name,
    price: parseFloat(price),
    description,
    image: image || 'https://via.placeholder.com/300'
  };
  
  products.push(newProduct);
  writeProducts(products);
  
  res.status(201).json(newProduct);
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
  const products = readProducts();
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  const { name, price, description, image } = req.body;
  
  products[productIndex] = {
    ...products[productIndex],
    ...(name && { name }),
    ...(price && { price: parseFloat(price) }),
    ...(description && { description }),
    ...(image && { image })
  };
  
  writeProducts(products);
  res.json(products[productIndex]);
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
  const products = readProducts();
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  products.splice(productIndex, 1);
  writeProducts(products);
  
  res.json({ message: 'Product deleted successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

