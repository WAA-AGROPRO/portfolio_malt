require("dotenv").config();

const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const database = require("./config/database");
const nodeMailer = require("nodemailer");

const app = express();

const infoRoutes = require("./routes/info.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/info", infoRoutes);

database.sync().then(() => console.log("database is ready to sync"));

module.exports = app;