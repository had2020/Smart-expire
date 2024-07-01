import React from 'react';
import './styles/Nav_bar.css';

const NavBar = () => {
  /* ToDO : Make login href show account if logged in */
  /* in app hub in the other website add a search bar in the middle to search for a solution with my apps with ai */
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

/* positioning nav bar items
style={{ float: 'right' }} 
*/