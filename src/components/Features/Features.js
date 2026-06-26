import { useEffect, useState } from "react";
import "./Features.css";
import features from "../../data/featuresData";

// Icons
import {
  FaRobot,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaBrain
} from "react-icons/fa";

function Features() {

    const [mobile, setMobile] = useState(window.innerWidth < 768);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const resize = () => setMobile(window.innerWidth < 768);
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    // icon mapping (adds SaaS feel)
    const icons = [
        <FaRobot />,
        <FaChartLine />,
        <FaCloud />,
        <FaShieldAlt />,
        <FaBrain />
    ];

    return (
        <section className="features" id="features">

            <div className="features-header">

                <span>FEATURES</span>

                <h2>Everything Your Business Needs</h2>

                <p>
                    One codebase. Desktop Bento. Mobile Accordion.
                    Built for AI-powered automation.
                </p>

            </div>

            {
                mobile ? (

                    <div className="accordion">

                        {features.map((item, index) => (

                            <div className="accordion-item" key={item.id}>

                                <div
                                    className="accordion-title"
                                    onClick={() => setActive(index)}
                                >

                                    <span className="icon">
                                        {icons[index]}
                                    </span>

                                    {item.title}

                                </div>

                                {active === index && (
                                    <div className="accordion-content">
                                        {item.description}
                                    </div>
                                )}

                            </div>

                        ))}

                    </div>

                ) : (

                    <div className="bento-grid">

                        {features.map((item, index) => (

                            <div
                                key={item.id}
                                className={`bento-card ${active === index ? "selected" : ""}`}
                                onClick={() => setActive(index)}
                            >

                                <div className="card-icon">
                                    {icons[index]}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>

                        ))}

                    </div>

                )
            }

        </section>
    );
}

export default Features;