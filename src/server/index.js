const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
dotenv.config();
const app = express();
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

// var http = require("http");
// http
//   .createServer(function (req, res) {
//     res.write("Nodejs started using xampp");
//     res.end();
//   })
//   .listen(8080);
// console.log("http server started");

// app.js
// const express = require("express");
// const mysql = require("mysql2");

// const app = express();
// const port = 3000;

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "fitnesstracker"
// });

// connection.connect((err) => {
//   if (err) {
//     console.error(`Error connecting to the database: ${err.stack}`);
//     return;
//   }

//   console.log("Connected to the database");
// });

// app.get("/api/data", (req, res) => {
//   connection.query("SELECT * FROM users", (error, results) => {
//     if (error) {
//       console.error(`Error executing query: ${error.stack}`);
//       res.status(500).send({ error: "Error executing query" });
//       return;
//     }

//     res.send({ data: results });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
