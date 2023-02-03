var mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fitnesstracker",
});

db.connect((err) => {
  if (err) {
    return console.log("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

export default db;
