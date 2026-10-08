import React from "react";
import {
  FaPalette,
  FaPenNib,
  FaFigma,
  FaVideo,
  FaLayerGroup,
  FaLaptopCode,
} from "react-icons/fa";

import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "Adobe Photoshop",
      icon: <FaPalette />,
      level: "95%",
      width: "95%",
    },
    {
      name: "Adobe Illustrator",
      icon: <FaPenNib />,
      level: "90%",
      width: "90%",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      level: "85%",
      width: "85%",
    },
    {
      name: "UI / UX Design",
      icon: <FaLaptopCode />,
      level: "88%",
      width: "88%",
    },
    {
      name: "Branding & Logo Design",
      icon: <FaLayerGroup />,
      level: "92%",
      width: "92%",
    },
    {
      name: "Video Editing",
      icon: <FaVideo />,
      level: "80%",
      width: "80%",
    },
  ];

  return (
    <section className="skills-page">

      <div className="skills-header">
        <p>MY EXPERTISE</p>

        <h1>
          Graphic Designer <span>Skills</span>
        </h1>

        <p className="skills-description">
          Creative skills and tools I use to create modern,
          professional and visually attractive designs.
        </p>
      </div>


      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-top">

              <div className="skill-name">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h3>{skill.name}</h3>
              </div>

              <span>{skill.level}</span>

            </div>


            <div className="progress-bg">
              <div
                className="progress-bar"
                style={{ width: skill.width }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;