import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginGraph from "../components/LoginGraph";
import axios from "axios";

interface FormData {
  name: string;
  password: string;
  user_id: string;
  username: string;
}

const Login: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post<FormData>("/users/login", {
        name,
        password,
      });
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
    <section className="flex flex-1 h-full rounded-tl-3xl border border-solid">
      <form
        className="p-[10rem] px-[18rem] border-r border-solid rounded-xl  w-1/2"
        onSubmit={handleLogin}
      >
        <div className="mb-10">
          <h1 className="text-center text-2xl text-neutral-500">Welcome</h1>
        </div>
        <div className="mx-auto">
          <h2 className="my-5 text-center text-xl">Login</h2>
          <div className="my-5">
            <span className="mr-2">
              <i className="fa-solid fa-user"></i>
            </span>
            <label>Username</label>
            <div className="border-black border-[0.1rem] border-solid my-2 p-1">
              <input
                className="bg-transparent"
                placeholder="John Smith"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className="my-5">
            <span className="mr-2">
              <i className="fa-solid fa-lock"></i>
            </span>
            <label htmlFor="password">Password</label>

            <div className="border-black border-[0.1rem] border-solid my-2 p-1">
              <input
                className="bg-transparent"
                placeholder="**********"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="my-5">
            <input type="checkbox" />
            <label> Remember Me </label>
            <label className="ml-[5rem]">No account?</label>
            <Link to={"/Register"} className="ml-[2rem] italic text-blue-500"> Sign up</Link>
          </div>
          <div className="text-center">
            <button
              className="p-3 px-10 border border-solid text-white bg-black"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <div className="w-1/2 bg-gray-100 text-center">
        <LoginGraph />
      </div>
    </section>
  );
};

export default Login;
