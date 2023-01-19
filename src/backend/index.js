'use strict';

// const MongoClient = require("mongodb").MongoClient;
// const bcrypt = require("bcrypt");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path');
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, '../../build')));

var corsOptions = {
  origin: "http://localhost:3081",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

const PORT = process.env.PORT || 3080;

const Server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
