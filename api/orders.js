const express = require("express");
const router = express.Router();
const db = require("../db");

// POST /api/orders
router.post("/", (req, res) => {
  const { name, email, address, cart } = req.body;

  if (!name || !email || !address || !Array.isArray(cart)) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  // Step 1: Insert order
  const orderQuery = "INSERT INTO orders (name, email, address) VALUES (?, ?, ?)";
  db.query(orderQuery, [name, email, address], (err, result) => {
    if (err) return res.status(500).json({ message: "Order insert failed", error: err });

    const orderId = result.insertId;

    // Step 2: Insert order items
    const itemsQuery =
      "INSERT INTO order_items (order_id, product_id, quantity) VALUES ?";
    const values = cart.map((item) => [orderId, item.id, item.quantity]);

    db.query(itemsQuery, [values], (err2) => {
      if (err2) return res.status(500).json({ message: "Items insert failed", error: err2 });

      return res.status(200).json({ message: "Order placed successfully" });
    });
  });
});

module.exports = router;
