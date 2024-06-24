const express = require("express");
const { mongoose } = require("mongoose");
var cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth");
const protectedRoute = require("./routes/protectedRoute");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/", authRoutes);
app.use("/", protectedRoute);
const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb://localhost:27017/kba");

const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
