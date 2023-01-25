// 'use strict';
import Express from "express";
// import db from "../config/database.ts"
import Register from "../controllers/register";
const router = Express.Router();

router.post("/register", Register);

export default router;
