import db from "../config/database";

export const handleAddGoal = (
  GoalName: string,
  StartDate: Date,
  EndDate: Date,
  Description: string
) => {
  db.query(
    "INSERT INTO goal (goal_name, start_goal_date, end_goal_date, description) VALUES (?,?,?,?)",
    [GoalName, StartDate, EndDate, Description],
    (err, result) => {
      // return something, this is wrong ,later -- fix this
      if(err){
        return;
      }
    }
  );
};

export const Query_Goals = (
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
