import db from "../config/database.js";

export const CreateUser = (name, password, email) => {
  db.query("INSERT INTO users (username, password, email) VALUES (?,?,?)", [name, password, email], (err) => {
    if (err) {
      console.log("error:", err);
      return;
    }
  });
};
export const LoginUser = (username) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE username = ?", username, (err, res) => {
      if (err) {
        console.log("error:", err);
        reject(err);
      }
      resolve(res);
    });
  });
};
