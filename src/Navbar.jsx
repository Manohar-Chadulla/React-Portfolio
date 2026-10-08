import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaSearch,
  FaEnvelope,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <span>CM</span>
        <h2>Manohar</h2>
      </div>

      {/* Menu */}
      <nav className="navbar-menu">

        <NavLink to="/" className="nav-link">
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink to="/skills" className="nav-link">
          <FaCode />
          <span>Skills</span>
        </NavLink>

        <NavLink to="/projects" className="nav-link">
          <FaProjectDiagram />
          <span>Projects</span>
        </NavLink>

        <NavLink to="/search" className="nav-link">
          <FaSearch />
          <span>Search</span>
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          <FaEnvelope />
          <span>Contact</span>
        </NavLink>

      </nav>

    </header>
  );
}

export default Navbar;