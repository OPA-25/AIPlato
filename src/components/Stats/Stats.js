import "./Stats.css";
import {
  FaRobot,
  FaBolt,
  FaServer,
  FaCheckCircle
} from "react-icons/fa";

const stats = [
  {
    icon: <FaRobot />,
    value: "2.4M",
    label: "AI Requests Today",
    status: "Live"
  },
  {
    icon: <FaServer />,
    value: "128",
    label: "Active AI Models",
    status: "Running"
  },
  {
    icon: <FaBolt />,
    value: "118ms",
    label: "Average Response",
    status: "Optimized"
  },
  {
    icon: <FaCheckCircle />,
    value: "99.98%",
    label: "Automation Success",
    status: "Verified"
  }
];

function Stats() {
  return (
    <section className="stats">

      {stats.map((item, index) => (

        <div className="stats-card" key={index}>

          <div className="stats-icon">
            {item.icon}
          </div>

          <h2>{item.value}</h2>

          <p>{item.label}</p>

          <span className="status">
            ● {item.status}
          </span>

        </div>

      ))}

    </section>
  );
}

export default Stats;