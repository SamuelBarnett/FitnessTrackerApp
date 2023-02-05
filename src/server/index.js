"use strict";

import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
dotenv.config();
import db from "./config/database.js";
import UserRoutes from "./routes/Users.js";
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }))

//````````````````````````````````````````
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
//````````````````````````````````````````````````````

// wait for database
// await db.connect((err) => {
//   if (err) {
//     return console.log("error: " + err.message);
//   }
//   console.log("Connected to the MySQL server.");
// });

// handle incoming requests and look to see if there is json and convert them to objects
app.use(express.json());
// handles all routes starting with /users for example /users/register
app.use("/users", UserRoutes);

app.use(express.static(path.join(__dirname, "../../build")));

var corsOptions = {
  origin: "http://localhost:5001",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../build", "index.html"));
});
const PORT = process.env.PORT || 5000;
const Server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});