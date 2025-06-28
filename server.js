const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");

const productRoutes = require("./routes/productRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

// ✅ Test DB connection
(async () => {
  try {
    await db.query("SELECT 1");
    console.log("✅ MySQL connected successfully");
  } catch (err) {
    console.error("❌ MySQL connection failed:", err);
  }
})();

app.listen(5000, () => {
  console.log("🚀 Server started on http://localhost:5000");
});
