const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB(process.env.MONGO_URI);

app.get("/api", (req, res) => {
  res.send("Hi!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running on ${process.env.PORT}`);
});
