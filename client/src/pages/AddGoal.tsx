import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  goalName: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

const AddGoal: React.FC = () => {
  const [goalName, setGoalName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigate();

  const HandleAddGoal = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post<FormData>("/goals/addGoal", {
        goalName: goalName,
        startDate: startDate,
        endDate: endDate,
        description: description,
      });
      navigation("/goals");
      console.log("Axios success");
    } catch (error) {
      console.log(error);
      console.log("Axios post error");
    }
  };

  return (
    <form className="content-AddGoal" onSubmit={HandleAddGoal}>
      <div className="">
        <div>
        <label htmlFor="goalName">Goal Name</label>
          <div>
            <input
              value={goalName}
              onChange={(event) => setGoalName(event.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <div>
            <input
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <div>
            <span>
              <i className="fa-solid fa-email"></i>
            </span>
            <input
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <div>
            <span>
              <i className="fa-solid fa-email"></i>
            </span>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit">Add goal</button>
        </div>
      </div>
    </form>
  );
};

export default AddGoal;
