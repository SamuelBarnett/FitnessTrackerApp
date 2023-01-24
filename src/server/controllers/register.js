"use strict";
import USERS from "../config/database";
import bcrypt from "bcrypt";

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
    await USERS.create({ username: name, password: HashedPassword, email: email });
    console.log("Reg successful");
  } catch (error) {
    console.log(error);
  }
};
export default Register;
