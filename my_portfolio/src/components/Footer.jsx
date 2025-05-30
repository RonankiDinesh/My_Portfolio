// src/components/Footer.js
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          © {year} Your Name. All rights reserved.
        </motion.p>

        <motion.div
          className="flex gap-5 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/RonankiDinesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ronanki-dinesh-896409293/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:dineshronanki777@gmail.com"
            className="hover:text-indigo-600 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
