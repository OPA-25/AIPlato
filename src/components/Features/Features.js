import { useEffect, useState, useRef, useCallback } from "react";
import "./Features.css";
import features from "../../data/featuresData";

import {
  FaRobot,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaBrain
} from "react-icons/fa";

function Features() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔥 IMPORTANT: keeps last active index safe during resize
  const lastActiveRef = useRef(0);

  const icons = useRef([
    <FaRobot />,
    <FaChartLine />,
    <FaCloud />,
    <FaShieldAlt />,
    <FaBrain />
  ]);

  // detect screen size safely
  const handleResize = useCallback(() => {
    const mobileView = window.innerWidth < 768;

    setIsMobile(mobileView);

    // 🔥 CONTEXT LOCK RULE (HACKATHON CRITICAL)
    // preserve active state during layout switch
    setActiveIndex(lastActiveRef.current);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleSelect = (index) => {
    setActiveIndex(index);
    lastActiveRef.current = index;
  };

  return (
    <section className="features" id="features">
      <div className="features-header">
        <span>FEATURES</span>
        <h2>Everything Your Business Needs</h2>
        <p>
          One system. Dual experience. Bento on desktop, Accordion on mobile.
        </p>
      </div>

      {/* ================= MOBILE ACCORDION ================= */}
      {isMobile ? (
        <div className="accordion">
          {features.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              <div
                className="accordion-title"
                onClick={() => handleSelect(index)}
              >
                <span className="icon">{icons.current[index]}</span>
                {item.title}
              </div>

              {activeIndex === index && (
                <div className="accordion-content">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* ================= DESKTOP BENTO ================= */
        <div className="bento-grid">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`bento-card ${
                activeIndex === index ? "selected" : ""
              }`}
              onMouseEnter={() => handleSelect(index)}
            >
              <div className="card-icon">
                {icons.current[index]}
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Features;