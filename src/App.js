import React from "react";
import Home from "./Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Api from "./Home/Api";
import Apies from "./Home/Apies";

// import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/api" element={<Api></Api>}></Route>
        <Route path="/apies" element={<Apies></Apies>}></Route>
      </Routes>
    </div>

  );
}

export default App;
