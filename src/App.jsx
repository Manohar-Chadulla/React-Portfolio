import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BottomNavbar from "./BottomNavbar";

import Navbar from "./Navbar";
import "./App.css"; 
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Search from "./Search";
import Contact from "./Contact";
// import ContactUs from "./Contact";
// import Contact from "./Contact";

// function Home() {
//   return <h1>Home</h1>;
// }

// function Skills() {
//   return <h1>Skills</h1>;
// }

// function Projects() {
//   return <h1>Projects</h1>;
// }

// function Search() {
//   return <h1>Search</h1>;
// }

// function Contact() {
//   return <h1>Contact</h1>;
// }

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-content">

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

      </div>

      <BottomNavbar />

    </BrowserRouter>
  );
}

export default App;