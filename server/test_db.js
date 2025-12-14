require("dotenv").config();
const mongoose = require("mongoose");

console.log("ENV DB_URL =", process.env.DB_URL);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("✅ MongoDB connected");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  });
