import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Goals from "./pages/Goals";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import Diary from "./pages/FoodDiary";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import AddGoal from "./pages/AddGoal";

function App() {
  return (
    <BrowserRouter>
      <div className="min-w-screen">
        <div className="flex min-h-screen">
          <Navigation />
          <Routes>
              <Route index element={<Home />} />
              <Route path="/goals" element={<Goals container={[]} />} />
              <Route path="/foodDiary" element={<Diary />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/AddGoal" element={<AddGoal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
