import React from "react";
import "./Navbar.css";
import logo from "../logo.svg";
import cupcake from "../cupcake.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Hobbies</div>
      {/* <div className="navbar-brand"> */}
      {/* <img src={cupcake} alt="Logo" className="navbar-logo" /> */}
      {/* </div> */}
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
