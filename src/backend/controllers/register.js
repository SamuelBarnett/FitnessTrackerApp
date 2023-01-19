"use strict";
import USERS from "../models/users";
import bcrypt from "bcrypt";

const Register = async (req, res) => {
  const { name, password, email } = req.body;
  const salt = await bcrypt.genSalt();
  const HashedPassword = await bcrypt.hash(password, salt);
  try {
    await USERS.create({ username: name, password: HashedPassword, email: email });
    console.log("Reg successful");
  } catch (error) {
    console.log(error);
  }
};

export default Register;
