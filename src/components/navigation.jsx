import React from "react";
import { NavLink } from "react-router-dom";
// import "../styles/navigation.css";

const Navigation = () => {
  const Links = [
    { label: "Home", to: "/" },
    { label: "Goals", to: "/goals" },
    { label: "Food Dairy", to: "/foodDiary" },
    { label: "Login", to: "/Login" },
    // change to sign up because register sounds weird
    { label: "Register", to: "/register" },
  ];
  // style={{ justifyContent: 'center', alignItems: 'center' }}
  // flex flex-col justify-center content-center
  return (
    <nav className="">
      <ul className="">
        {Links.map((link) => (
          <li className="mt-[1rem] mr-[5rem] p-[1rem]" key={link.to}>
            <NavLink className="text-xl text-black-500 inline-block" to={link.to}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
