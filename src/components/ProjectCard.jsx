import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group bg-[#111827] rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
      {/* Animated glowing dots */}
      <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 animate-ping"></span>
      <span className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 animate-ping"></span>
      <span className="absolute top-1/2 left-1 w-1.5 h-1.5 rounded-full bg-pink-400 opacity-0 group-hover:opacity-100 animate-pulse"></span>

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 sm:h-48 object-cover group-hover:brightness-110 transition duration-300"
      />

      {/* Card Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
          {project.title}
        </h3>

        {/* Hide long description on very small screens */}
        <p className="hidden sm:block text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition">
          {project.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
          {/* GitHub button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm rounded-lg bg-gray-700 hover:bg-gray-600 transition text-center hover:shadow-md hover:shadow-purple-400/40"
          >
            Code
          </a>

          {/* Live Demo button */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition text-center hover:shadow-md hover:shadow-blue-400/40"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
