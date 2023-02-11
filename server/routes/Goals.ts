import express, { Router } from "express";
import { addGoal } from "../controllers/Goals";
// import db from "../config/database.ts"
const goals: Router = express.Router();

goals.get("/container", addGoal);

export default goals;
