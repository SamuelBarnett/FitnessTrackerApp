import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form class="content-register">
      <div className="bg-green-900">
        <h2>Register</h2>
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
          <label for="email">Email</label>
          <div>
            <span>
              <i class="fa-solid fa-email"></i>
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
          <Link to="goals">Register</Link>
        </div>
      </div>
    </form>
  );
};

export default Register;