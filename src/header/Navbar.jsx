import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../styles/style-navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <h3>PORTOFOLIO</h3>
      <nav ref={navRef}>
        <Link to="/" onClick={hideNavbar}>
          Home
        </Link>
        <Link to="/certificate" onClick={hideNavbar}>
          Certificate
        </Link>
        <Link to="/achievement" onClick={hideNavbar}>
          Achievement
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
