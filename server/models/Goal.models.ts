import db from "../config/database";
import React from "react";

export const handleAddGoal = (
  GoalName: string,
  StartDate: Date,
  EndDate: Date,
  Description: string,
) => {
  db.query(
    "INSERT INTO goal (goal_name, start_goal_date, end_goal_date, description) VALUES (?,?,?,?)",
    [GoalName, StartDate, EndDate, Description],
    (err) => {
      // return something, this is wrong ,later -- fix this
      if (err) {
        console.log("error:", err)
        return;
      }
    }
  );
};

export const handleGetGoals = (
  user_id: number
): Promise<Array<{ goal_id: number; goal_name: string }>> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM goal WHERE user_id = ?", user_id, (err, res) => {
      if (err) {
        console.log("error:", err);
        reject(err);
      }
      resolve(res);
    });
  });
};
