const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

//env config
dotenv.config({
    path: "./config/config.env",
  });

// Routes import
const userRoute=require('./routes/userRoute');
const blogRoute=require('./routes/blogRoute');

//mongodb connection
connectDB();

//rest objecct
const app = express();




//middelwares
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(morgan("dev"));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// Routes
app.use('/api/v1/users',userRoute);
app.use('/api/v1/blog',blogRoute);




//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Port
const PORT = process.env.PORT || 4000;
//listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`
  );
});
