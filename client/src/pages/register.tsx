import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigate();

  const HandleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post<FormData>("/users/register", {
        name: name,
        email: email,
        password: password,
      });
      navigation("/goals");
      console.log("Axios success");
    } catch (error) {
      console.log(error);
      console.log("Axios post error");
    }
  };

  return (
    <section>
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
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
            <label> No account? Sign up</label>
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
