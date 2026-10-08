import React, { useState } from "react";
import {
  FaSearch,
  FaPalette,
  FaCode,
  FaProjectDiagram,
  FaTimes,
} from "react-icons/fa";

import "./Search.css";

function Search() {
  const [search, setSearch] = useState("");

  const items = [
    {
      title: "Graphic Design",
      category: "Skills",
      description: "Creative graphic design, posters and social media designs.",
      icon: <FaPalette />,
    },
    {
      title: "Adobe Photoshop",
      category: "Skills",
      description: "Photo editing, poster design and image manipulation.",
      icon: <FaPalette />,
    },
    {
      title: "Adobe Illustrator",
      category: "Skills",
      description: "Logo, vector and branding design.",
      icon: <FaPalette />,
    },
    {
      title: "React JS",
      category: "Frontend",
      description: "Building modern and responsive web applications.",
      icon: <FaCode />,
    },
    {
      title: "To-Do List",
      category: "Projects",
      description: "A React-based task management application.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Portfolio Website",
      category: "Projects",
      description: "Personal portfolio website built using React.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Frontend Projects",
      category: "Projects",
      description: "Responsive websites created using HTML, CSS and React.",
      icon: <FaProjectDiagram />,
    },
  ];

  const filteredItems = items.filter((item) =>
    `${item.title} ${item.category} ${item.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="search-page">

      {/* Header */}

      <div className="search-header">
        <p>EXPLORE MY WORK</p>

        <h1>
          Search <span>Portfolio</span>
        </h1>

        <p>
          Search my skills, projects and technologies.
        </p>
      </div>


      {/* Search Box */}

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search skills, projects, React..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            className="clear-btn"
            onClick={() => setSearch("")}
          >
            <FaTimes />
          </button>
        )}

      </div>


      {/* Results */}

      <div className="search-results">

        {filteredItems.length > 0 ? (

          filteredItems.map((item, index) => (

            <div className="search-card" key={index}>

              <div className="result-icon">
                {item.icon}
              </div>

              <div className="result-content">

                <span>{item.category}</span>

                <h2>{item.title}</h2>

                <p>{item.description}</p>

              </div>

            </div>

          ))

        ) : (

          <div className="no-results">
            <FaSearch />
            <h2>No results found</h2>
            <p>Try searching for another keyword.</p>
          </div>

        )}

      </div>

    </section>
  );
}

export default Search;