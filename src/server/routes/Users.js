'use strict';
import express from "express";
// import db from "../config/database.ts"
import Register from "../controllers/register.js";
const users = express.Router();
// define routes and what they do
//(("/register"------ this is the name of the route, Register ---- this is the function it calls))
// router.post("/register", Register);
users.post("/register", Register);
// users.get("/register", Register);

export default users;