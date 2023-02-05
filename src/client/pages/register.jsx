import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigate();
  
  const HandleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/users/register", {
        name: name,
        email: email,
        password: password,
      });
      navigation("/goals");
      console.log("Axios success");
    } catch (error) {
      if (error.response) {
        console.log(error);
        console.log("Axios post error");
      }
    }
  };

  return (
    <form className="content-register" onSubmit={HandleRegister}>
      <div className="">
        <h2>Register</h2>
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
          <label htmlFor="email">Email</label>
          <div>
            <span>
              <i className="fa-solid fa-email"></i>
            </span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div>
          <input type="checkbox" />
          <label> Remember Me </label>
          <a> No account? Sign up</a>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
  );
};

export default Register;
