// controllers where you validate and
"use strict";
import db from "../config/database.js";
import bcrypt from "bcrypt";
import { CreateUser } from "../models/users.models.js";

// add validation later.
const Register = async (req, res) => {
  // req.body is an object to store strings and access them this stores the register info we need.
  const { name, password, email } = req.body;
  // Creates salt(random text added to a string) used to better protect the hashed password
  // with a more complicated hashing process
  const salt = await bcrypt.genSalt();
  // hashes password with bcrypt
  const HashedPassword = await bcrypt.hash(password, salt);
  // tries to create a new instance in the USERS model, console.logs error if there is one.
  try {
    await CreateUser(name, HashedPassword, email);
    console.log("Registration successful");
    res.status(200).json({ msg: "register controller success" });
  } catch (error) {
    return res.status(404).json({ msg: "error register controller" });
  }
};

export default Register;
