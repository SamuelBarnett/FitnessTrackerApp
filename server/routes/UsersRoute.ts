import express, { Router } from "express";
// import db from "../config/database.ts"
import Register from "../controllers/register";
import Login from "../controllers/login";

const users: Router = express.Router();
users.post("/register", Register);
users.post("/login", Login);

export default users;
