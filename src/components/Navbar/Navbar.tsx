
"use client";

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import '@/style/navbar.css';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  console.log(isDark) 

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <span>MyPortfolio</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="theme-toggle-btn"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar
