import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  if (sessionStorage.getItem("user_id") == null) {
    navigator("/Login");
  }
  return (
    <section>
      {/* Idea is to have a one of the progress graphs on the home page.*/}
      <label className="text-3xl font-bold underline"> Home page </label>
    </section>
  );
};

export default Home;
