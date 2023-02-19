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
    <div className="rounded-lg p-5 m-5 bg-white shadow-xl">
      <div className="flex space-x-10">
        <div className="my-2 mr-10 text-2xl font-bold">
          <h1>{title}</h1>
        </div>
        <div className="my-2">
          <h2>{date_added}</h2>
        </div>
      </div>
      <div className="mt-10 text-gray-500">
        <p>{description}</p>
      </div>
    </div>
  );
};
export default goalContainer;
