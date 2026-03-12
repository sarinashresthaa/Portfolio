import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TaskPilot",
    description: "A project management system built with MERN stack that helps teams organize, track, and manage tasks efficiently.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/sarinashresthaa/TaskPilot-Full-Stack",
    demo: "https://sarina-taskpilot.netlify.app",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built using React and Tailwind CSS, showcasing my skills and projects.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/sarinashresthaa/Portfolio",
    demo: "https://sarinashrestha-portfolio.netlify.app/",
  },
  {
    title: " Todo List",
    description: "A simple and interactive Todo List app built with React and Tailwind CSS to manage tasks efficiently.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/sarinashresthaa/Todo-List",
    demo: "https://sarina-todo.netlify.app/",
  },
  {
    title: " MiniMart",
    description: "A responsive e-commerce app built with React and Tailwind CSS, using Fake Store API and Context API for real-time cart updates.",
    tech: ["React", "Tailwind CSS", "Typescript", "Shadcn UI", "Context API"],
    github: "https://github.com/sarinashresthaa/MiniMart",
    demo: "https://minimartbysarina.netlify.app/",
  },
  {
    title: " Task Tracker",
    description: "A clean and responsive task tracker app built with React and Typescript, powered by React Query for smooth CRUD performance.",
    tech: ["React", "Tailwind CSS", "Typescript", "React Query", "Shadcn UI"],
    github: "https://github.com/sarinashresthaa/tasktracker",
    demo: "https://tasktrackerbysarina.netlify.app/",
  }
];

const Projects = () => {
  return (
    <div id="projects-section" className=" bg-gray-50 py-16 px-6 pt-32">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-lime-600">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-lime-100 text-lime-700 px-2 py-1 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4 text-lg">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <FaGithub />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-600 hover:text-lime-700"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
