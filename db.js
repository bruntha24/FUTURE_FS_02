// db.js
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "jewellery_db", // ✅ Make sure it's correct
});

module.exports = db;
