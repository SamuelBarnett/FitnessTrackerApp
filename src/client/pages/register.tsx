import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");

  return (
    <form className="content-register">
      <div className="">
        <h2>Register</h2>
        <div>
          <label>Username</label>
          <div>
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            <input />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div>
            <span>
              <i className="fa-solid fa-lock"></i>
            </span>
            <input />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <div>
            <span>
              <i className="fa-solid fa-email"></i>
            </span>
            <input />
          </div>
        </div>
        <div>
          <input type="checkbox" />
          <label> Remember Me </label>
          <a> No account? Sign up</a>
        </div>
        <div>
          <Link to="{/Register}">Register</Link>
        </div>
      </div>
    </form>
  );
};

export default Register;