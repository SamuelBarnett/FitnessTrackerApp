import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface FormData {
  name: string;
  password: string;
}

const Login: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post<FormData>("/users/login", { name, password });
      navigate("/goals");
      console.log("Form Axios post success");
    } catch (error) {
      console.log(error);
      console.log("Form Axios post error");
    }
  };

  return (
    <section>
      <form className="content-login" onSubmit={handleLogin}>
        <div className="">
          <h2>Login</h2>
          <div>
            <label>Username</label>
            <div>
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div>
              <span>
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div>
            <input type="checkbox" />
            <label> Remember Me </label>
            <label>No account? Sign up</label>
          </div>
          <div className="">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
