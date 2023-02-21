import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileWaveform,
  faHouse,
  faTrophy,
  faBook,
  faBookmark,
  faUserCircle,
  faSignIn,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  // style={{ justifyContent: 'center', alignItems: 'center' }}
  // flex flex-col justify-center content-center
  let NavStyle = "ml-5 my-5 pr-6";

  // if (sessionStorage.getItem("user_id") == null) {
  //   NavStyle = "ml-5 my-5 pr-6 hidden"; 
  // }

  return (
    <nav className="bg-white">
      <ul className="">
        <li className={NavStyle}>
          <FontAwesomeIcon icon={faHouse} />
          <NavLink className={NavStyle} to="/">
            Home
          </NavLink>
        </li>
        <li className={NavStyle}>
          <FontAwesomeIcon icon={faTrophy} />
          <NavLink className={NavStyle} to="/Goals">
            Goals
          </NavLink>
        </li>
        <li className={NavStyle}>
          <FontAwesomeIcon icon={faBook} />
          <NavLink className={NavStyle} to="/FoodDiary">
            Food Dairy
          </NavLink>
        </li>
        <li className={NavStyle}>
          <FontAwesomeIcon icon={faUserCircle} />
          <NavLink className={NavStyle} to="/Login">
            Login
          </NavLink>
        </li>
        <li className={NavStyle}>
          <FontAwesomeIcon icon={faSignInAlt} />
          <NavLink className={NavStyle} to="/Register">
            Register
          </NavLink>
        </li>
        <li className={NavStyle}>
          <FontAwesomeIcon icon={faBookmark} />
          <NavLink className={NavStyle} to="/AddGoal">
            Add Goal
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
