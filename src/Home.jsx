import React from "react";
import "./Home.css";
import Profile from "./assets/images/profile.png";

function Home() {
  return (
    <section className="home">

      {/* Left Side */}
      <div className="home-left">

        <p className="hello">Hello, I'm</p>

        <h1>
          Graphic <span>Designer</span>
        </h1>

        <h2>
          Creative Graphic Designer
        </h2>

        <p className="description">
          I create modern, creative and professional designs
          for brands, websites and social media.
        </p>

        {/* <div className="home-buttons">
          <button className="hire-btn">
            Hire Me
          </button>

          <button className="project-btn">
            View Projects
          </button>
        </div> */}

      </div>


      {/* Right Side */}
      <div className="home-right">

        <div className="profile-circle">
          <img
            src={Profile}
            alt="Graphic Designer"
          />
        </div>

      </div>

    </section>
  );
}

export default Home;