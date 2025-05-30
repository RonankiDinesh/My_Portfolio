// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-indigo-600 dark:text-indigo-400 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-xl border border-indigo-100 dark:border-gray-700 bg-white/60 dark:bg-gray-800/70 backdrop-blur-md transition-transform hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              <div className="p-6 text-left space-y-3">
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex gap-3 pt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition"
                  >
                    <FiExternalLink /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 border border-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-white transition"
                  >
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
