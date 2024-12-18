const express = require('express');
const User = require('../modal/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const fs = require("fs").promises;

dotenv.config();

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body)
  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  try {
    const user = new User({
      name,
      email,
      password,
    });

    await user.save();
    res.status(201).json({
      message: 'User created successfully',
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, "abc", {
    expiresIn: '1h',
  });

  res.json({
    message: 'Login successful',
    token,
    user
  });
});

router.get("/get-product", async (req, res) => {
  try {
    // Reading the product.json file
    const dataVal = await fs.readFile("./product/product.json", "utf-8")
    const data = dataVal ? JSON.parse(dataVal) : []

    // Sending the products as a response
    res.json(data);
  } catch (error) {
    console.error("Error reading product file:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/get-products", async (req, res) => {
  try {
    const { ids } = req.body;
    const dataVal = await fs.readFile("./product/product.json", "utf-8")
    const data = dataVal ? JSON.parse(dataVal) : []
    const selectedProducts = data.filter(product => ids.includes(product.id));
    res.json(selectedProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
