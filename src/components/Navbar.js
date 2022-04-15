import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">React Projects</Link>
      <nav>
        <Link to="/modal">Modal</Link>
      </nav>
    </div>
  );
};

export default Navbar;
