const express = require("express");
const router = express.Router();
const db = require("../db");

// GET /api/products
router.get("/", (req, res) => {
  const query = "SELECT * FROM products";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
    res.json(results);
  });
});

module.exports = router;
