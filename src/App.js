import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import About from "./pages/About";
import Home from "./home/Home";
import SolarAndInverter from "./pages/SolaAndInverter";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <React.Fragment>
      <div className="headColor">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />

        <Route path="SolarAndInverter" element={<SolarAndInverter />} />
        <Route path="Projects" element={<Projects />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
