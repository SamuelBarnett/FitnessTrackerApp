import db from "../config/database";
import React from "react";
import bcrypt from "bcrypt";
import { handleGetGoals, handleAddGoal } from "../models/Goal.models";
import { Request, Response } from "express";

// handles query for Add Goal form
// params: goal name, start date, end date, description
export const addGoal = async (request: Request, response: Response) => {
  const { goalName, startDate, endDate, description, user_id } = request.body;

  try {
    await handleAddGoal(goalName, startDate, endDate, description, user_id);

    console.log("addGoal successful");
    return response.status(200).json({ msg: "addGoal controller success" });
  } catch (error) {
    return response.status(404).json({ msg: "error addGoal controller" });
  }
};
// handles query to display the goals
// call the function that queries stuff then respond with formatted data to goals.
// params: user_id
export const GetGoals = async (request: Request, response: Response) => {
  const { user_id } = request.body;
  console.log(user_id + " get goal user_id");
  try {
    const result = await handleGetGoals(user_id);
    console.log("in GetGoals success response. ");
    console.log(result);
    return response.json(result);
  } catch (error) {
    console.log("in GetGoals error.");
    console.log(error);
    return response.status(500).json({ error: error });
  }
};
