// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-slate-100 via-white to-slate-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-indigo-600 dark:text-indigo-400 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Toolbox
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center group p-4 rounded-xl shadow-md dark:shadow-none bg-white dark:bg-gray-800 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
