import "./Hero.css";
import { FaRocket, FaSearch, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="overlay"></div>

      <div className="hero-content">

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

        {/* SUBTITLE */}
        <p className="subtitle">
          Deploy intelligent AI agents, automate business
          operations and unlock enterprise productivity.
        </p>

        {/* SEARCH BAR (NEW UPGRADE) */}
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

        {/* BUTTONS */}
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