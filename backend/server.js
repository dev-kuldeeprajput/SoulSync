const express = require("express");
require("dotenv").config();
const authRoute = require("./src/routes/authRoutes");
const connectDB = require("./src/config/db");

const app = express();
app.use(express.json())
const PORT = 5000;
connectDB();

app.get("/", (req, res) => {
  res.send("server is working");
});

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log("server is running");
});
