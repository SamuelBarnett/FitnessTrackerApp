import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Goals from "../pages/goals";
import Login from "../pages/login";
import Navigation from "./navigation";
import Diary from "../pages/foodDiary";
import Home from "../pages/home";

function App() {
  return (
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/login" element={<Login />} />
            <Route path="/foodDiary" element={<Diary />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
