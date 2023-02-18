import React from "react";
import "../styles/index.css";
import { FC } from "react";

interface GoalContainerProps {
  title: string;
  description: string;
  date_added: string;
}
// InputHTMLAttributes,
// & InputHTMLAttributes<HTMLInputElement>;

const goalContainer: FC<GoalContainerProps> = ({
  title,
  description,
  date_added,
}) => {
  return (
    <div className="border border-solid rounded-lg p-5 m-5">
      <div className="flex space-x-10">
        <div className="my-2 mr-10">
          <h1>{title}</h1>
        </div>
        <div className="my-2">
          <h2>{date_added}</h2>
        </div>
      </div>
      <div className="mt-10">
        <p>{description}</p>
      </div>
    </div>
  );
};
export default goalContainer;
