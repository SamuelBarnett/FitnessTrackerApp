import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


// need for login
// find the user by username
// verify that the password matches the hashed password in the database
// assign a user id
// redirect to home or goals
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/users/login", {
        name: name,
        password: password,
      });
      navigate("/goals");
      console.log("Axios success");
    } catch (error) {
      console.log(error);
      console.log("Axios error");
    }
  };

  return (
    <form className="content-login" onSubmit={HandleLogin}>
      <div className="">
        <h2>Login</h2>
        <div>
          <label>Username</label>
          <div>
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div>
            <span>
              <i className="fa-solid fa-lock"></i>
            </span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div>
          <input type="checkbox" />
          <label> Remember Me </label>
          <a> No account? Sign up</a>
        </div>
        <div className="">
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
