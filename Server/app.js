

const {mongoose} = require ('mongoose');
const routes=require('./routes.js')
const express=require('express');
var cors = require("cors");

const app=express();
const PORT = 3005;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
app.use(express.json());
app.use(cors({
   origin: 'http://localhost:3000'
 }));
app.use('/',routes);

mongoose.connect(
   "mongodb://localhost:27017/kba"
);

const database = mongoose.connection;
database.on("error", (error) => {
   console.log(error);
});

database.once("connected", () => {
   console.log("Database Connected");
});



