import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Goals from "./pages/Goals";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import Diary from "./pages/FoodDiary";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import AddGoal from "./pages/AddGoal";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="min-w-screen ">
        <Header />
        <div className="flex min-h-screen">
          <Navigation />
          <div className="flex-1">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/Goals" element={<Goals container={[]} />} />
              <Route path="/FoodDiary" element={<Diary />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/AddGoal" element={<AddGoal />} />
            </Routes>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
