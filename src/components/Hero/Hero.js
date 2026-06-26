import "./Hero.css";
import { useEffect, useState } from "react";
import { FaRocket, FaSearch, FaArrowRight, FaBolt } from "react-icons/fa";

function Hero() {
  const [aiCount, setAiCount] = useState(2.4);

  // 🔥 lightweight live simulation (no performance hit)
  useEffect(() => {
    const interval = setInterval(() => {
      setAiCount((prev) => +(prev + Math.random() * 0.1).toFixed(2));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">

        {/* SYSTEM STATUS BADGE (NEW WINNING ELEMENT) */}
        <div className="system-status">
          <FaBolt />
          <span>AI Core Active • Latency 120ms</span>
        </div>

        {/* TAG */}
        <p className="tag">
          ⚡ AI Powered Enterprise Platform
        </p>

        {/* MAIN TITLE */}
        <h1>
          Power your
          <br />
          future with AI
        </h1>

        {/* LIVE METRIC (DIFFERENTIATOR) */}
        <div className="live-metric">
          <span className="metric-number">{aiCount}M+</span>
          <span className="metric-text">
            AI decisions processed today
          </span>
        </div>

        {/* SUBTITLE */}
        <p className="subtitle">
          Deploy intelligent AI agents, automate business
          operations and unlock enterprise productivity.
        </p>

        {/* SEARCH BAR */}
        <div className="hero-search">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search AI workflows, analytics, automation..."
          />

          <button>
            Search <FaArrowRight />
          </button>
        </div>

        {/* CTA BUTTONS */}
        <div className="hero-btns">
          <button className="primary">
            <FaRocket style={{ marginRight: "8px" }} />
            Build Workflow
          </button>

          <button className="secondary">
            Explore Platform
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;