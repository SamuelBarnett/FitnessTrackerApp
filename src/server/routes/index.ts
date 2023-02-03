// 'use strict';
import Express from "express";
// import db from "../config/database.ts"
import Register from "../controllers/register";
const router = Express.Router();
// define routes and what they do
//(("/register"------ this is the name of the route, Register ---- this is the function it calls))
// router.post("/register", Register);
router.post("/users", Register);


export default router;
