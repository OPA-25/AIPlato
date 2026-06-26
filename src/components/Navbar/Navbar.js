import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaBrain,
  FaStar,
  FaQuestionCircle,
  FaRocket,
  FaDollarSign
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>

      <div className="logo">
        <span>AI</span>Plato
      </div>

      <nav className={menu ? "nav active" : "nav"}>

        <a href="#features" onClick={() => setMenu(false)}>
          <FaBrain />
          Features
        </a>

        <a href="#pricing" onClick={() => setMenu(false)}>
          <FaDollarSign />
          Pricing
        </a>

        <a href="#testimonials" onClick={() => setMenu(false)}>
          <FaStar />
          Reviews
        </a>

        <a href="#faq" onClick={() => setMenu(false)}>
          <FaQuestionCircle />
          FAQ
        </a>

        <button className="desktop-btn">
          <FaRocket />
          Launch AI
        </button>

      </nav>

      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}

export default Navbar;