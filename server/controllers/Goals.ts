"use strict";
import db from "../config/database";
import bcrypt from "bcrypt";
import { Query_Goals } from "../models/Goal.models";
import { Request, Response } from 'express';


export const addGoal = () => {
};
  // call the function that queries stuff then respond with formatted data to goals.
export const GetGoals = async (request: Request, response: Response) => {
  const user_id = request.body;
  await Query_Goals(user_id)
  .then((response) => {
    response[0];
  })
  .catch((err) =>{
    
    return;
  })
};
