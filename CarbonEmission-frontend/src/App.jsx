import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Apps from "./Pages/Apps/Apps";
import AppDetail from "./Pages/AppDetail/AppDetail";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/apps/:name" element={<AppDetail />} />
      </Routes>
    </div>
  );
}

export default App;
