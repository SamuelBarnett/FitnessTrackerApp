import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <form className="content-login ">
      <div className="">
        <h2>Login</h2>
        <div>
          <label>Username</label>
          <div>
            <span>
              <i class="fa-solid fa-user"></i>
            </span>
            <input />
          </div>
        </div>
        <div>
          <label for="password">Password</label>
          <div>
            <span>
              <i class="fa-solid fa-lock"></i>
            </span>
            <input />
          </div>
        </div>
        <div>
          <input type="checkbox" />
          <label> Remember Me </label>
          <a> No account? Sign up</a>
        </div>
        <div className="">
          <Link to="/goals" className="">Login</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
