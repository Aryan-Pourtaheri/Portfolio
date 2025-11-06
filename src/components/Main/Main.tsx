"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContactUs } from "@/lib/ContactUs";
import ProjectsSection from "../projectsSection";
import { Typewriter } from 'react-simple-typewriter';


const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "tween" as const } },
};


const Main = () => {
  return (
  <main className="main-content min-h-screen font-sans transition-colors duration-500">
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
              className="w-60 h-60 rounded-full border-4 border-[#00d8ff] shadow-lg object-cover object-top profile-pic-bg"
            />
          </motion.div>
        </div>
        <motion.h1
          className="main-title mb-4"
          initial={{ opacity: 0, y: -60, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "tween" }}
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
          className="main-subtitle mb-8 text-xl md:text-2xl font-medium text-gray-300 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.span
            className="inline-block text-2xl"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ✨
          </motion.span>
            <Typewriter
              words={['Creative Front-End Developer', 'React & Next.js Specialist', 'Tailwind CSS Aficionado', 'UI/UX & Interactive Designer', 'Web Performance Enthusiast']}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
        </motion.p>

        <motion.a
          href="#contact"
          className="main-contact-btn"
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
        className="skills-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1.5}
        variants={sectionVariants}
      >
  <h2 className="skills-title">Skills</h2>
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
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={sectionVariants}
      >
    <h2 className="about-title">About Me</h2>
  <div className="about-card rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center transition-colors duration-500">
          <div className="flex-1 flex flex-col gap-4">
            <div className="about-item">
              <span className="about-emoji">👨‍💻</span>
              <span className="about-text">Front-End Dev & UI Enthusiast</span>
            </div>
            <div className="about-item">
              <span className="about-emoji">🚀</span>
              <span className="about-text">React, Next.js, Tailwind, Node.js, Supabase</span>
            </div>
            <div className="about-item">
              <span className="about-emoji">🎨</span>
              <span className="about-text">Design-driven, pixel-perfect, and creative</span>
            </div>
            <div className="about-item">
              <span className="about-emoji">🤝</span>
              <span className="about-text">Team player, mentor, and open-source fan</span>
            </div>
            <div className="about-item">
              <span className="about-emoji">🌱</span>
              <span className="about-text">Always learning, always building</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="about-fact bg-gradient rounded-lg p-4 text-center font-bold shadow">
              <span className="text-3xl">💡</span>
              <div>Did you know?</div>
              <div className="about-fact-desc font-normal mt-2">
                I once built a full-stack app in 48 hours for a hackathon—and won!(that was a good dream)
              </div>
            </div>
            <div className="about-funfact rounded-lg p-4 text-center font-semibold shadow">
              <span className="text-2xl">🏆</span>
              <div>Fun Fact</div>
              <div className="about-funfact-desc font-normal mt-2">
                I can debug CSS with my eyes closed (almost).
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="contact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        variants={sectionVariants}
      >
        <h2 className="contact-title mb-4">Contact</h2>
        <ContactUs/>
        <div className="contact-socials">
          <a href="https://github.com/Aryan-Pourtaheri" target="_blank" rel="noopener noreferrer" className="contact-social-link">GitHub</a>
          <a href="https://tr.linkedin.com/in/arian-pourtaheri-147567377" target="_blank" rel="noopener noreferrer" className="contact-social-link">LinkedIn</a>
          {/* Add more social links as needed */}
        </div>
      </motion.section>
    </main>
  );
};

export default Main;
