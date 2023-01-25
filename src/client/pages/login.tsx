import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const FormSubmit = (loginInfo) => {

    // HandleLogin();
  };
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");


  return (
    <form className="content-login" onSubmit={() => FormSubmit}>
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
          <button type="submit" onClick={() => FormSubmit}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
