import db from "../config/database";
import React from "react";
import bcrypt from "bcrypt";
import { handleGetGoals, handleAddGoal } from "../models/Goal.models";
import { Request, Response } from "express";

// handles query for Add Goal form
// params: goal name, start date, end date, description
export const addGoal = async (request: Request, response: Response) => {
const { goalName, startDate, endDate, description } = request.body;

  try {
    await handleAddGoal(goalName, startDate, endDate, description);

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
  const user_id: number = request.body;
  await handleGetGoals(user_id)
    .then((response) => {
      response[0];
    })
    .catch((err) => {
      return;
    });
};
