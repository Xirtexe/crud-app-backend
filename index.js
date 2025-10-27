const express = require("express");
const mongoose = require("mongoose");
const productsRouter = require("./routes/api.product");
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connecting to mongodb use atlas/localhost
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("Error while connecting to mongodb");
  }
})();

app.get("/", (req, res) => {
  res.send("hello there, this is home page");
});

app.use("/api/products", productsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
