import db from "../config/database";

export const handleAddGoal = () => {
  db.query(
    "INSERT INTO goal (goal_name, start_goal_date, end_goal_date, description) VALUES (?,?,?,?)",
    [],
    (err,result) => {
        
    }
  );
};


export const Get_Goals = (user_id: number) : Promise<Array<{goal_name: string, goal_id: number}>> => {
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
