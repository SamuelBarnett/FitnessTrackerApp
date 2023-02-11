"use strict";
import db from "../config/database";
import bcrypt from "bcrypt";
import { Get_Goals } from "../models/Goal.models";

export const addGoal = () => {
  // call the function that queries stuff then respond with formatted data to goals.
};

export const GetGoals = async (user_id: number) => {
  await Get_Goals(user_id)
  .then((res) => {
     res[0];
  })
  .catch((err) =>{
    return;
  })
};
