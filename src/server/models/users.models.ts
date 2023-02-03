import db from "../config/database";

export const CreateUser = (username, password, email) => {
  db.query(
    "INSERT INTO users (username, password, email) VALUES (?,?,?)",
    [username, password, email],
    (err) => {
      if (err) {
        console.log("error:", err);
        return;
      }
    }
  );
};
export const LoginUser = (username) => {
  db.query("SELECT * FROM users WHERE username = ?", username),
    (err) => {
      if (err) {
        console.log("error:", err);
        return;
      }
    };
};
