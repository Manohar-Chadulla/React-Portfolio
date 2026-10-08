import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomNavbar.css"

import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaSearch,
  FaEnvelope
} from "react-icons/fa";

import "./BottomNavbar.css";

function BottomNavbar() {
  return (
    <div className="bottom-navbar">

      <NavLink to="/" className="bottom-item">
        <FaHome />
        <span>Home</span>
      </NavLink>

      <NavLink to="/skills" className="bottom-item">
        <FaCode />
        <span>Skills</span>
      </NavLink>

      <NavLink to="/projects" className="bottom-item">
        <FaProjectDiagram />
        <span>Projects</span>
      </NavLink>

      <NavLink to="/search" className="bottom-item">
        <FaSearch />
        <span>Search</span>
      </NavLink>

      <NavLink to="/contact" className="bottom-item">
        <FaEnvelope />
        <span>Contact</span>
      </NavLink>

    </div>
  );
}

export default BottomNavbar;