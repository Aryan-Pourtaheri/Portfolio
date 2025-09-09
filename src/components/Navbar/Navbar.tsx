import React from 'react'
import '@/style/navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <span>MyPortfolio</span>
        </div>
        <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
        <label htmlFor="navbar-toggle" className="navbar-hamburger">
          <span />
          <span />
          <span />
        </label>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
