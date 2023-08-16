const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
require("dotenv").config();

const DB_URL = process.env.DATABASE_URL;
mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("connected", () => {
  console.log("Database connected");
});

app.use(cors());
app.use(express.json());

const videoRoutes = require("./routes/video");
const productRoutes = require("./routes/product"); 

app.use("/videos", videoRoutes);
app.use("/products", productRoutes);

app.listen(8000, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
