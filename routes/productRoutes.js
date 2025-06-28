// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const db = require("../db"); // adjust path if needed

// GET all products
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products ORDER BY id DESC");
    res.json(rows);
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
