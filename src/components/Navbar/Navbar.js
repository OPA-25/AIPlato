import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaBrain,
  FaRupeeSign,
  FaStar,
  FaQuestionCircle,
  FaRocket
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo">
        AIPlato
      </div> 

      {/* NAV LINKS */}
      <nav className={menu ? "nav active" : "nav"}>

        <a href="#features" onClick={() => setMenu(false)}>
          <FaBrain style={{ marginRight: "8px", color: "#FFC801" }} />
          Features
        </a>

        <a href="#pricing" onClick={() => setMenu(false)}>
          <FaRupeeSign  style={{ marginRight: "8px", color: "#FFC801" }} />
          Pricing
        </a>

        <a href="#testimonials" onClick={() => setMenu(false)}>
          <FaStar style={{ marginRight: "8px", color: "#FFC801" }} />
          Testimonials
        </a>

        <a href="#faq" onClick={() => setMenu(false)}>
          <FaQuestionCircle style={{ marginRight: "8px", color: "#FFC801" }} />
          FAQ
        </a>

        {/* CTA BUTTON */}
        <button className="desktop-btn">
          <FaRocket style={{ marginRight: "8px" }} />
          Get Started
        </button>

      </nav>

      {/* MOBILE MENU ICON */}
      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}

export default Navbar;