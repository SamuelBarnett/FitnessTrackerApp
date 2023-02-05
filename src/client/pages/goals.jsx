import React, { useState } from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";

const Goals = () => {
  // state variable is display and function is setDisplay starts as false and is set to one of the pages
  const [display, setDisplay] = useState("");

  const HandleClick = (current) => {
    setDisplay(current);
  };
  
  const Pages = [
    { label: "Weight", page: "weight-page" },
    { label: "Weightlifting", page: "weightlifting-page" },
    { label: "Cardio", page: "cardio-page" },
    { label: "Nutrition", page: "nutrition-page" },
    { label: "BMI", page: "BMI-page" },
  ];
  // home page for goals, show the title, name, start date
  // may be better to replace the divs with templates.
  return (
    <div>
      
    </div>
  );
};
export default Goals;
