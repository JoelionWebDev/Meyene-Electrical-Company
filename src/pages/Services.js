import React from "react";
import Logo from "../home/logo";
import Social from "../Social";
import "./Services.css";

const Services = () => {
  return (
    <main>
      <div className="heroContainer">
        <Logo />
        <div className="hero">
          <div className="welcomNote">
            <h1 className="hero2">Our Services</h1>
          </div>
        </div>
      </div>
      <div className="services-container">
        <ul className="services">
          <li className="service">
            <a href="#ac">Wiring of all kinds of building/structure</a>
          </li>
          <li className="service">
            <a href="#ac">
              Installation of industrial earth and thunder arrestor{" "}
            </a>
          </li>
          <li className="service">
            <a href="#ac">Installation of solar and inverter</a>
          </li>
          <li className="service">
            <a href="#ac">Installation of automatic electrical panel </a>
          </li>
          <li className="service">
            <a href="#ac">Installation of air condition</a>
          </li>
          <li className="service">
            <a href="#ac">Installation of CCTV</a>
          </li>
          <li className="service">
            <a href="#ac">Installation of sound prove generator</a>
          </li>
          <li className="service">
            <a href="#ac">Installation of transformer </a>
          </li>
          <li className="service">
            <a href="#ac">Installation of DSTV/GOTV</a>
          </li>
          <li className="service">
            <a href="#ac">
              Installation of Ups and other alternative power supply
            </a>
          </li>
          <li className="service">
            <a href="#ac">Installation of intercom </a>
          </li>
          <li className="service">
            <a href="#ac">Installation of led screen/ led wall mesh</a>
          </li>
          <li className="service">
            <a href="#ac">Installation of signage (PYLON)</a>
          </li>
          <li className="service">
            <a href="#ac">Installation of led moving sign</a>
          </li>
          <li className="service">
            <a href="#ac">Installation of static Billboard</a>
          </li>
          <li className="service">
            <a href="#ac">Installation of telecommunication Wi-Fi </a>
          </li>
        </ul>
      </div>
      <Social />
    </main>
  );
};

export default Services;
