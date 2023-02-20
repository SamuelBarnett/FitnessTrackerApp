import React, { useState, useEffect } from "react";
import "../styles/index.css";
import GoalContainer from "../components/GoalContainer";

interface Container {
  goal_id: number;
  goal_name: string;
  description: string;
  start_goal_date: string;
}

interface GoalsProps {
  container: Container[];
}

const Goals: React.FC<GoalsProps> = () => {
  // sets session data
  let user_id: string = "null_holder";
  const stored_id = sessionStorage.getItem("user_id");
  if (stored_id !== null) {
    user_id = stored_id;
  }

  const [containers, setContainer] = useState<Container[]>([]);
  // gets the data from the database
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: user_id }),
  };

  const getContainer = async () => {
    try {
      const res = await fetch("/goals/container", request);
      const data = await res.json();
      setContainer(data);
    } catch (err) {
      console.log(err + "in fetching goals error");
    }
  };

  useEffect(() => {
    console.log(containers);
  }, [containers]);

  useEffect(() => {
    getContainer();
  }, []);

  return (
    <section className="flex flex-1 h-full rounded-tl-3xl border border-solid bg-gray-200">
      <div className="flex flex-wrap h-10">
        {containers.map((containerItem) => (
          <GoalContainer
            key={containerItem.goal_id}
            title={containerItem.goal_name}
            description={containerItem.description}
            date_added={containerItem.start_goal_date}
          />
        ))}
        <GoalContainer
          key={2}
          title={"test"}
          description={"testing"}
          date_added={"2020-03-04"}
        />
        <GoalContainer
          key={2}
          title={"test"}
          description={"testing"}
          date_added={"2020-03-04"}
        />
        <GoalContainer
          key={2}
          title={"test"}
          description={"testing"}
          date_added={"2020-03-04"}
        />
        <GoalContainer
          key={2}
          title={"test"}
          description={"testing"}
          date_added={"2020-03-04"}
        />
        <GoalContainer
          key={2}
          title={"test"}
          description={"testing"}
          date_added={"2020-03-04"}
        />
        <GoalContainer
          key={2}
          title={"test"}
          description={"testing"}
          date_added={"2020-03-04"}
        />
        <GoalContainer
          key={2}
          title={"test"}
          description={"testing"}
          date_added={"2020-03-04"}
        />
        <GoalContainer
          key={2}
          title={"test"}
          description={"testing"}
          date_added={"2020-03-04"}
        />
      </div>
    </section>
  );
};

export default Goals;
