
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
        <a href="#home" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <img src="/assets/icons/arian-logo.svg" alt="Arian Logo" style={{ width: 36, height: 36, borderRadius: '8px', boxShadow: '0 2px 8px #00d8ff44', background: '#fff' }} />
          <span
            style={{
              fontWeight: 700,
              fontSize: '1.5rem',
              letterSpacing: 1,
              color: isDark ? '#fff' : '#222',
              transition: 'color 0.3s'
            }}
          >
            Arian Portfolio
          </span>
        </a>
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
