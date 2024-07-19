import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Signin from "./Pages/Signin";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/Sign-in" element={<Signin />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
