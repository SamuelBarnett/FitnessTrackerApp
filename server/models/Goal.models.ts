import db from "../config/database";
import React from "react";

export const handleAddGoal = (
  GoalName: string,
  StartDate: string,
  EndDate: string,
  Description: string,
  User_Id: string
) => {
  db.query(
    "INSERT INTO goal (goal_name, start_goal_date, end_goal_date, description, user_id) VALUES (?,?,?,?,?)",
    [GoalName, StartDate, EndDate, Description, User_Id],
    (err) => {
      // return something, this is wrong ,later -- fix this
      if (err) {
        console.log("error:", err);
        return;
      }
    }
  );
};

export const handleGetGoals = (
  user_id: string
): Promise<Array<{ goal_id: number; goal_name: string, date_added: string, description: string}>> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT goal_id, goal_name, start_goal_date, end_goal_date, description FROM goal WHERE user_id = ?", [user_id], (err, res) => {
      if (err) {
        console.log("error:", err);
        reject(err);
      }
      console.log("Selected goals correctly.");
      console.log("models res" + res);
      resolve(res);
    });
  });
};
