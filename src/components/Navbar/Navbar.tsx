"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import '@/style/navbar.css';

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <div>
      <nav className="navbar">
        <a href="#home" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <img src="/assets/icons/arian-logo.svg" alt="Arian Logo" style={{ width: 36, height: 36, borderRadius: '8px', boxShadow: '0 2px 8px #00d8ff44', background: '#fff' }} />
          <span
            style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: 1, color: isDark ? '#fff' : '#222', transition: 'color 0.3s' }}
          >
            Arian Portfolio
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Hamburger menu button for mobile */}
          <button
            className="navbar-hamburger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile-menu"
            onClick={handleMenuToggle}
            style={{
              background: 'none',
              border: 'none',
              flexDirection: 'column',
              cursor: 'pointer',
              gap: '0.25rem',
              marginLeft: '1rem',
            }}
          >
            <span style={{ width: '1.75rem', height: 3, background: isDark ? '#fff' : '#222', borderRadius: 4, transition: 'all 0.3s' }} />
            <span style={{ width: '1.75rem', height: 3, background: isDark ? '#fff' : '#222', borderRadius: 4, transition: 'all 0.3s' }} />
            <span style={{ width: '1.75rem', height: 3, background: isDark ? '#fff' : '#222', borderRadius: 4, transition: 'all 0.3s' }} />
          </button>
          {/* Desktop nav */}
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
      {/* Mobile sidebar menu with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="navbar-mobile-menu"
            initial={{ x: 250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 250, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: 220,
              height: '100vh',
              background: isDark ? '#181818' : '#f8fafc',
              boxShadow: '-2px 0 16px rgba(0,0,0,0.12)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '4rem 1.5rem',
              gap: '1.5rem',
              zIndex: 2000,
            }}
          >
            <button
              aria-label="Close menu"
              onClick={handleMenuToggle}
              style={{
                alignSelf: 'flex-end',
                background: 'none',
                border: 'none',
                fontSize: 28,
                color: isDark ? '#fff' : '#222',
                marginBottom: '2rem',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
            <a href="#home" onClick={handleNavClick} style={{ color: isDark ? '#fff' : '#222', fontWeight: 600, fontSize: 18, marginBottom: 16 }}>Home</a>
            <a href="#about" onClick={handleNavClick} style={{ color: isDark ? '#fff' : '#222', fontWeight: 600, fontSize: 18, marginBottom: 16 }}>About</a>
            <a href="#projects" onClick={handleNavClick} style={{ color: isDark ? '#fff' : '#222', fontWeight: 600, fontSize: 18, marginBottom: 16 }}>Projects</a>
            <a href="#contact" onClick={handleNavClick} style={{ color: isDark ? '#fff' : '#222', fontWeight: 600, fontSize: 18 }}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
