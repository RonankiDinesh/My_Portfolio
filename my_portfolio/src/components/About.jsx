// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-8 text-indigo-600 dark:text-indigo-400 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          👋 Hey there! I'm a <span className="text-indigo-600 dark:text-indigo-400 font-semibold">full stack developer</span> who loves building clean, interactive, and user-friendly digital experiences.
          <br /><br />
          With solid knowledge in <span className="font-semibold text-indigo-500">Frontend</span> technologies like <span className="font-semibold">HTML, CSS, JavaScript, React</span> and <span className="font-semibold text-indigo-500">Backend</span> skills in <span className="font-semibold">Node.js, Express, MongoDB</span> — I enjoy bringing both sides of development together.
          <br /><br />
          I'm also a curious and passionate <span className="text-indigo-600 dark:text-indigo-400 font-semibold">learner</span> who's constantly exploring new tools, frameworks, and trends to stay ahead in the tech world.
          <br /><br />
          💡 My mission? To contribute to meaningful projects, collaborate with talented teams, and craft digital products that solve real-world problems — one line of code at a time.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            View My Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
