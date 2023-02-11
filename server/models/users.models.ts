import db from "../config/database";

export const CreateUser = (name: string, password: string, email: string) => {
  db.query("INSERT INTO users (username, password, email) VALUES (?,?,?)", [name, password, email], (err) => {
    if (err) {
      console.log("error:", err);
      return;
    }
  });
};
export const LoginUser = (username: string): Promise<Array<{username: string, password: string, user_id: number}>> => {
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
