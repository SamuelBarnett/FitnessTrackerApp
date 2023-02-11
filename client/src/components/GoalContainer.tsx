import React from "react";
import "../styles/index.css";
import { FC } from "react";

interface GoalContainerProps {
  title: string;
  description: string;
  dateUpdated: Date;
};
// InputHTMLAttributes,
// & InputHTMLAttributes<HTMLInputElement>;

const goalContainer: FC<GoalContainerProps> = ({
  title,
  description,
  dateUpdated,
}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>{dateUpdated.toLocaleDateString()}</div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default goalContainer;
