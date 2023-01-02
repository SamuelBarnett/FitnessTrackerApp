import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const Links = [
    { label: "Home", to: "/" },
    { label: "Goals", to: "/goals" },
    { label: "Food Dairy", to: "/foodDiary" },
  ];

  return (
    <nav>
      <ul>
        {Links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
