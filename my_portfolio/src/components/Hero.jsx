// src/components/Hero.js
import React from "react";
import { motion } from "motion/react";
import profile from "../assets/profile.jfif";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-white to-slate-100 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.img
        src={profile}
        alt="profile"
        className="w-40 h-40 rounded-full border-4 border-indigo-500 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="mt-6 text-4xl font-bold text-gray-800 dark:text-white"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi, I'm{" "}
        <span className="text-indigo-600 dark:text-indigo-400">
          Ronanki Dinesh
        </span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        A passionate programmer learning new things and crafting interactive web
        experiences 🚀
      </motion.p>
      <motion.div
        className="mt-12 flex justify-center gap-8 text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://github.com/RonankiDinesh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ronanki-dinesh-896409293/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:dineshronanki777@gmail.com"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition duration-300"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
