import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface FormData {
  name: string;
  password: string;
  user_id:string;
  username:string;
}

const Login: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post<FormData>("/users/login", { name, password });
      // Sets session information
      const user_id = response.data.user_id;
      const username = response.data.username;
      sessionStorage.setItem("user_id", user_id);
      sessionStorage.setItem("username", username);
      
      navigate("/Home");
      console.log("Form Axios post success");
    } catch (error) {
      console.log(error);
      console.log("Form Axios post error");
    }
  };

  return (
    <section className="flex justify-center flex-1 h-full rounded-tl-3xl border border-solid">
      <form className="p-20 m-20 border border-solid rounded-xl bg-gray-300 h-1/2" onSubmit={handleLogin}>
        <div className="mx-auto">
          <h2 className="my-5 text-center text-xl">Login</h2>
          <div className="my-5">
            <label>Username</label>
            <div className="border-black border-b-[0.1rem] border-solid my-2">
              <span className="mr-2">
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                className="bg-transparent"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className="my-5">
            <label htmlFor="password">Password</label>
            <div className="border-black border-b-[0.1rem] border-solid my-2">
              <span className="mr-2">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
              className="bg-transparent"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="my-5">
            <input type="checkbox" />
            <label> Remember Me </label>
            <label>No account? Sign up</label>
          </div>
          <div className="text-center ">
            <button className="border border-solid" type="submit">Login</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
