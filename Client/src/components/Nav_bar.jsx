import React from 'react';
import './styles/Nav_bar.css';

const NavBar = () => {
  /* ToDO : Make login href show account if logged in */
  return (
  <div class="topnav">
    <a class="active" href="/">Home</a>
    <a href="/tool">Tool</a>
    <a href="/login">Login</a>
    <a href="/contact">Contact</a>
  </div>
  );
};

export default NavBar;
