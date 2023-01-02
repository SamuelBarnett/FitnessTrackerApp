import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <form class="content-login">
      <div>
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
        <div>
          <Link to="goals">Login</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
