import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#111827] rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 sm:h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          {project.title}
        </h3>

        {/* Hide long description on very small screens */}
        <p className="hidden sm:block text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
          {/* GitHub button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm rounded-lg bg-gray-700 hover:bg-gray-600 transition text-center"
          >
            Code
          </a>

          {/* Live Demo button */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition text-center"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
