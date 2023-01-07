const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:3081",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const PORT = process.env.PORT || 3080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
