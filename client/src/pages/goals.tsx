import React, { useState, useEffect } from "react";
import "../styles/index.css";
import GoalContainer from "../components/GoalContainer";

interface Container {
  id: number;
  title: string;
  description: string;
  dateUpdated: Date;
}

interface GoalsProps {
  container: Container[];
}

const Goals: React.FC<GoalsProps> = () => {
  const [container, setContainer] = useState<Container[]>([]);

  useEffect(() => {
    fetch("/goals/container")
      .then((res) => res.json())
      .then((data) => {
        setContainer(data);
      });
  }, []);

  return (
    <div>
      <div>
        {container.map((containerItem) => (
          <GoalContainer
            key={containerItem.id}
            title={containerItem.title}
            description={containerItem.description}
            dateUpdated={containerItem.dateUpdated}
          />
        ))}
      </div>
    </div>
  );
};

export default Goals;
