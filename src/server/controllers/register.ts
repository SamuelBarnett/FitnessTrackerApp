// controllers where you validate and 
"use strict";
import db from "../config/database";
import bcrypt from "bcrypt";
import { CreateUser } from "../models/users.models";

// add validation later.
const Register = async (req, res) => {
  // req.body is an object to store strings and access them this stores the register info we need.
  const { username, password, email } = req.body;
  // Creates salt(random text added to a string) used to better protect the hashed password
  // with a more complicated hashing process
  const salt = await bcrypt.genSalt();
  // hashes password with bcrypt
  const HashedPassword = await bcrypt.hash(password, salt);
  // tries to create a new instance in the USERS model, console.logs error if there is one.
  try {
    await CreateUser( username, HashedPassword, email );
    console.log("Reg successful");
  } catch (error) {
    console.log(error);
  }
};

export default Register;
