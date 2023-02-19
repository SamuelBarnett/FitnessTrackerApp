import React, { useState, useEffect } from "react";
import "../styles/index.css";
import GoalContainer from "../components/GoalContainer";

interface Container {
  id: number;
  title: string;
  description: string;
  date_added: string;
}

interface GoalsProps {
  container: Container[];
}

const Goals: React.FC<GoalsProps> = () => {
  let user_id: string = "null_holder";
  const stored_id = sessionStorage.getItem("user_id");
  if (stored_id !== null) {
    user_id = stored_id;
  }
  const [container, setContainer] = useState<Container[]>([]);

  useEffect(() => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user_id }),
    };
    fetch("/goals/container", request)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="flex flex-1 h-full rounded-tl-3xl border border-solid bg-gray-200">
      <div>
        {container.map((containerItem) => (
          <GoalContainer
            key={containerItem.id}
            title={containerItem.title}
            description={containerItem.description}
            date_added={containerItem.date_added}
          />
        ))}
        <GoalContainer
            key={2}
            title={"testing"}
            description={"description"}
            date_added={"2020-03-02"}
          />
      </div>
    </section>
  );
};

export default Goals;
