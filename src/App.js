import React from "react";
import Home from "./Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Api from "./Home/Api";
import Apies from "./Home/Apies";
import Chart from "./Chart/Chart";
import Blog from "./Chart/Blog/Blog";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

// import './App.css';

function App() {
  return (
    <div> <Navbar></Navbar>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/api" element={<Api></Api>}></Route>
        <Route path="/apies" element={<Apies></Apies>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/chart" element={<Chart></Chart>}></Route>


      </Routes>
    </div>

  );
}

export default App;
