"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 bg-[#f8fafc] dark:bg-[#181818] text-center text-gray-700 dark:text-gray-300 border-t-4 border-transparent dark:border-transparent transition-colors duration-500 mt-12 shadow-lg shadow-[#00d8ff22] dark:shadow-[#00d8ff33] relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00d8ff] via-[#6a11cb] to-[#a044ff] rounded-t-full opacity-80" />
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <span className="text-sm flex items-center gap-2">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block text-[#00d8ff]">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
          </svg>
          {new Date().getFullYear()} Aryan Pourtaheri. All rights reserved.
        </span>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/Aryan-Pourtaheri" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d8ff] transition flex items-center gap-1">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            GitHub
          </a>
          <a href="https://tr.linkedin.com/in/arian-pourtaheri-147567377" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d8ff] transition flex items-center gap-1">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
