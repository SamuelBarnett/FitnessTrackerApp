import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
  const Links = [
    { label: "Home", to: "/" },
    { label: "Goals", to: "/goals" },
    { label: "Food Dairy", to: "/foodDiary" },
    { label: "Login", to: "/Login" },
    // change to sign up because register sounds weird
    { label: "Register", to: "/register" },
  ];

  return (
    <nav>
      <ul>
        {Links.map((link) => (
          <li key={link.to}>
            <NavLink className="NavElement" to={link.to}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
