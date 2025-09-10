
"use client";
import React from "react";
import { motion } from "framer-motion";
// Project data for mapping
import { projects } from "@/data/projects";


const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "tween" as const } },
};

const Main = () => {
  return (
    <main className="bg-gradient-to-b from-[#181818] to-[#23272f] min-h-screen text-white font-sans">
      {/* Hero Section */}
      <motion.section
        id="home"
        className="flex flex-col items-center justify-center h-screen text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Picture */}
        <div className="mb-6 flex justify-center relative w-60 h-60">
          {/* Animated Emoji Stickers */}
          <motion.span
            className="absolute left-0 top-2 text-3xl select-none"
            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ filter: 'drop-shadow(0 2px 8px #fff8)' }}
          >
            🚀
          </motion.span>
          <motion.span
            className="absolute right-0 top-8 text-2xl select-none"
            animate={{ y: [0, 12, 0], rotate: [0, -8, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            style={{ filter: 'drop-shadow(0 2px 8px #a044ff88)' }}
          >
            💡
          </motion.span>
          <motion.span
            className="absolute left-8 bottom-0 text-2xl select-none"
            animate={{ y: [0, -8, 0], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
            style={{ filter: 'drop-shadow(0 2px 8px #00d8ff88)' }}
          >
            🎨
          </motion.span>
          <motion.div
            initial={{ boxShadow: '0 0 0 0 #00d8ff' }}
            animate={{ boxShadow: '0 0 0 8px #00d8ff40, 0 0 32px 0 #00d8ff80' }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            className="rounded-full"
          >
            <img
              src="/assets/images/profile-picture.jpg" // Replace with your actual image path
              alt="Profile"
              className="w-60 h-60 rounded-full border-4 border-[#00d8ff] shadow-lg object-cover object-top bg-[#23272f]"
            />
          </motion.div>
        </div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -60, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.span
            initial={{ rotate: -10 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mr-2"
          >👋</motion.span>
          Hi, I'm <span className="text-[#00d8ff]">Arian Pourtaheri</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.span
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block mr-2"
          >✨</motion.span>
          Front-End Developer | React | Next.js | Tailwind CSS
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block px-8 py-3 bg-[#00d8ff] text-black font-semibold rounded-full shadow-lg hover:bg-[#0078ff] transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 24px #00d8ff" }}
        >
          Contact Me
        </motion.a>
  </motion.section>

  {/* About Section */}
      {/* Skills Section */}
      <motion.section
        id="skills"
        className="max-w-4xl mx-auto py-24 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1.5}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-8 text-[#00d8ff]">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img src="/assets/icons/nextjs.png" alt="Next.js" className="w-16 h-16 mb-2" />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/icons/react.png" alt="React" className="w-16 h-16 mb-2" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/icons/tailwind.png" alt="Tailwind CSS" className="w-16 h-16 mb-2" />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/icons/nodejs.png" alt="Node.js" className="w-16 h-16 mb-2" />
            <span>Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/icons/supabase.png" alt="Supabase" className="w-16 h-16 mb-2" />
            <span>Supabase (SQL)</span>
          </div>
          {/* Add more skills as needed */}
        </div>
      </motion.section>
      <motion.section
        id="about"
        className="max-w-3xl mx-auto py-24 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#a044ff] via-[#6a11cb] to-[#fff] bg-clip-text text-transparent">About Me</h2>
        <div className="bg-[#23272f] rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👨‍💻</span>
              <span className="font-semibold text-purple-300">Front-End Dev & UI Enthusiast</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-semibold text-purple-300">React, Next.js, Tailwind, Node.js, Supabase</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <span className="font-semibold text-purple-300">Design-driven, pixel-perfect, and creative</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤝</span>
              <span className="font-semibold text-purple-300">Team player, mentor, and open-source fan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span className="font-semibold text-purple-300">Always learning, always building</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-gradient-to-r from-[#a044ff] to-[#6a11cb] rounded-lg p-4 text-center text-white font-bold shadow">
              <span className="text-3xl">💡</span>
              <div>Did you know?</div>
              <div className="text-purple-100 font-normal mt-2">
                I once built a full-stack app in 48 hours for a hackathon—and won!(that was a good dream)
              </div>
            </div>
            <div className="bg-[#181818] rounded-lg p-4 text-center text-purple-200 font-semibold shadow">
              <span className="text-2xl">🏆</span>
              <div>Fun Fact</div>
              <div className="text-purple-100 font-normal mt-2">
                I can debug CSS with my eyes closed (almost).
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="max-w-5xl mx-auto py-24 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-8 text-[#00d8ff]">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="bg-[#23272f] rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.08, rotate: [0, 2, -2, 0], boxShadow: "0 0 32px #00d8ff" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2, type: "spring" }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d8ff] hover:underline"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="max-w-2xl mx-auto py-24 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#00d8ff]">Contact</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-[#181818] border border-[#00d8ff] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-[#181818] border border-[#00d8ff] focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded bg-[#181818] border border-[#00d8ff] focus:outline-none"
            rows={5}
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#00d8ff] text-black font-semibold rounded-full shadow-lg hover:bg-[#0078ff] transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 flex gap-6 justify-center">
          <a href="https://github.com/Aryan-Pourtaheri" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#00d8ff] transition">GitHub</a>
          <a href="https://tr.linkedin.com/in/arian-pourtaheri-147567377" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#00d8ff] transition">LinkedIn</a>
          {/* Add more social links as needed */}
        </div>
      </motion.section>
    </main>
  );
};

export default Main;
