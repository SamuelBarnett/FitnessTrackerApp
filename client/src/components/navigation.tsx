import React from "react";
import { NavLink } from "react-router-dom";
// import "../styles/navigation.css";

const Navigation = () => {
  const pages = [
    { label: "Home", destination: "/" },
    { label: "Goals", destination: "/goals" },
    { label: "Food Dairy", destination: "/foodDiary" },
    { label: "Login", destination: "/Login" },
    // change destination sign up because register sounds weird
    { label: "Register", destination: "/register" },
    { label: "AddGoal", destination: "/AddGoal" }

  ];
  // style={{ justifyContent: 'center', alignItems: 'center' }}
  // flex flex-col justify-center content-center
  return (
    <nav className="">
      <ul className="">
        {pages.map((page) => (
          <li className="">
            <NavLink className="text-3xl font-bold underline" to={page.destination}>{page.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
