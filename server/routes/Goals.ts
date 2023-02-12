import express, { Router } from "express";
import { addGoal, GetGoals } from "../controllers/Goals";

// import db from "../config/database.ts"
const goals: Router = express.Router();

goals.get("/container", GetGoals);
goals.post("/addGoal", addGoal);


export default goals;
