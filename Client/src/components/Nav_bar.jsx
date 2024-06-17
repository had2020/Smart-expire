import React from 'react';
import './styles/Nav_bar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <a href="/">Home</a>
      <a href="/tool">Tool</a>
      <a href="/login">Login</a>
      <a href="/signup">Signup</a>
      <a href="/account">My Account</a>
      <a href="/about">About</a>
      <a href="/contact">Contact Me</a>
    </nav>
  );
};

export default NavBar;
