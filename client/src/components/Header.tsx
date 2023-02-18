import React, { useEffect, useState } from "react";
import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWaveform } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState<string>("My Website");

  let user_id: string = "";
  let username: string = "";

  const stored_id = sessionStorage.getItem("user_id"); 
  const stored_name = sessionStorage.getItem("username"); 

  if (stored_id !== null) {
    user_id = stored_id;
  }
  if (stored_name !== null) {
    username = stored_name;
  }

  useEffect(() => {
    const newPageTitle = getPageTitle(location.pathname);
    setPageTitle(newPageTitle);
    document.title = newPageTitle;
  }, [location]);

  function getPageTitle(pageName: string): string {
    switch (pageName) {
      case "/":
        return "Home";
      case "/Goals":
        return "Goals";
      case "/FoodDiary":
        return "Food Dairy";
      case "/Login":
        return "Login";
      case "/Register":
        return "Register";
      case "/AddGoal":
        return "Add Goal";
      default:
        return "FitnessTracker";
    }
  }
  return (
    // changes header based on which page yu are on
    <div className="mx-5 my-5 flex ">
      <FontAwesomeIcon icon={faFileWaveform} className="fa-3x" />
      <h1 className="mx-6 text-4xl">Fitness Tracker</h1>
      <h1 className="text-xl text-gray-500">{pageTitle}</h1>
      <label className="ml-10 pr-20 py-5 bg-gray-500 border border-solid rounded-lg">Dev info: Signed in with user id: {user_id} with Username:{username}</label>
    </div>
  );
};

export default Header;
