
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
    <nav className="nav-link">
      <div className="container d-flex justify-content-center align-items-center gap-5">
        <div>
          <h1>DentalCare</h1>
        </div>
        <div className="d-flex gap-4">
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/Home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/Services"
          >
          Services
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/signup"
          >
            Signup
          </NavLink>                  
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/blog"
          >
          Blog
          </NavLink>                  
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;