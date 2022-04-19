import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const [user,loading,error]= useAuthState (auth)
  const handleSignOut= event =>{
    event.preventDefault()
    signOut (auth)
  }
  return (

    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><h1>DentalCare</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <NavLink
            className={({ isActive }) => (isActive ? "link link-active" : "link")}
            to="/Home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link link-active" : "link")}
            to="/Services"
          >
          Services
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link link-active" : "link")}
            to="/about"
          >
            About
          </NavLink>
          {
            user?(<NavLink onClick={handleSignOut}
              className={({ isActive }) => (isActive ? "link link-active" : "link")}
              to="/"
            >
             Signout
            </NavLink>):(<NavLink
              className={({ isActive }) => (isActive ? "link link-active" : "link")}
              to="/login"
            >
              Login
            </NavLink>)

          }
          
          <NavLink
            className={({ isActive }) => (isActive ? "link link-active" : "link")}
            to="/signup"
          >
            Signup
          </NavLink>                  
          <NavLink
            className={({ isActive }) => (isActive ? "link link-active" : "link")}
            to="/blog"
          >
          Blog
          </NavLink>      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    <nav className="nav-link">
      <div className="container d-flex justify-content-center align-items-center gap-5">
       
        <div className="d-flex gap-4">
                           
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;