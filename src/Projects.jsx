import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Garbage Management System",
    description:
      "An e-commerce app with a shopping cart and user authentication.",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React.",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
