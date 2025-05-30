// src/components/Contact.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (simulation). You can integrate EmailJS here.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-8 shadow-2xl flex flex-col gap-6 text-left border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          >
            Send Message
          </motion.button>
        </motion.form>

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
      </div>
    </section>
  );
};

export default Contact;
