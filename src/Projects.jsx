import React from "react";
import {
  FaTasks,
  FaUser,
  FaLaptopCode,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "To-Do List",
      category: "Web Application",
      description:
        "A simple and responsive To-Do List application to add, complete and delete daily tasks.",
      icon: <FaTasks />,
      technologies: "React JS • CSS • JavaScript",
      github: "#",
      demo: "#",
    },

    {
      title: "Portfolio Website",
      category: "Portfolio",
      description:
        "A modern personal portfolio website to showcase my skills, projects and graphic design work.",
      icon: <FaUser />,
      technologies: "React JS • CSS • React Icons",
      github: "#",
      demo: "#",
    },

    {
      title: "Frontend Projects",
      category: "Frontend Development",
      description:
        "A collection of responsive frontend projects created using modern HTML, CSS, JavaScript and React.",
      icon: <FaLaptopCode />,
      technologies: "HTML • CSS • JavaScript • React",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="projects-page">

      {/* Header */}

      <div className="projects-header">

        <p>MY WORK</p>

        <h1>
          My <span>Projects</span>
        </h1>

        <p className="projects-subtitle">
          Here are some of my recent projects and frontend
          development work.
        </p>

      </div>


      {/* Projects */}

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            {/* Project Icon */}

            <div className="project-icon">
              {project.icon}
            </div>


            {/* Category */}

            <span className="project-category">
              {project.category}
            </span>


            {/* Title */}

            <h2>{project.title}</h2>


            {/* Description */}

            <p className="project-description">
              {project.description}
            </p>


            {/* Technologies */}

            <div className="technologies">
              {project.technologies}
            </div>


            {/* Buttons */}

            <div className="project-buttons">

              <a
                href={project.github}
                className="github-btn"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.demo}
                className="demo-btn"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;