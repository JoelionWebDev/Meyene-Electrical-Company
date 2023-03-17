import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const navStyle = ({ isActive }) => {
    return {};
  };

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <button className="nav-toggle fixed" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <NavLink to="/" style={navStyle}>
              Home
            </NavLink>
            <NavLink to="About" style={navStyle}>
              About
            </NavLink>
            <NavLink to="Services" style={navStyle}>
              Services
            </NavLink>

            <NavLink to="SolarAndInverter" style={navStyle}>
              Sola/Inverter
            </NavLink>
            <NavLink to="Projects" style={navStyle}>
              Project
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// npm install react-router-dom
