// "use strict";
import { LoginUser } from "../models/users.models.js";
import bcrypt from "bcrypt";
// add validation later
const Login = async (req, res, next) => {
  const { name, password } = req.body;
  let hashedPassword = "";
  let username = "";
  let user_id = 0;
  // could be done with .then and .catch instead 
  try {
    const result = await LoginUser(name);
    hashedPassword = result[0].password;
    username = result[0].username;
    user_id = result[0].user_id;

    const passwordCheck = await bcrypt.compare(password, hashedPassword);

    if (!passwordCheck) {
      console.log("incorrect password");
      return res.status(404).json({ msg: "incorrect password" });
    }
  } catch (error) {
    console.log(error);
    console.log("User not found");
    return res.status(404).json({ msg: "User not found" });
  }
  return res.status(200).json({ msg: "login success" });
};

export default Login;