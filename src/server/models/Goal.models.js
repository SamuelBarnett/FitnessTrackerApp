import db from "../config/database";

// const Goal = (goal) => {
//   this.title = goal.title;
//   this.description = goal.description;
//   this.startDate = goal.startDate;
//   this.endDate = goal.endDate;
// };

export const addGoal = (req, res) => {
  db.query(
    "INSERT INTO goal (goal_name, date_added, start_goal_date, end_goal_date, description) VALUES (?,?,?,?,?)",
    [],
    (err,result) => {
        
    }
  );
};
