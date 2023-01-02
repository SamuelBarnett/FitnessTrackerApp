import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Goals from "../pages/goals";
import Login from "../pages/login";
import Navigation from "./navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route>
            <Route index element={<Login />} />
            <Route path="/goals" element={<Goals />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
