import "./Companies.css";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Companies() {

  const data = [
    { name: "Tata", value: 20 },
    { name: "Infosys", value: 25 },
    { name: "Wipro", value: 15 },
    { name: "HCL", value: 20 },
    { name: "Tech Mahindra", value: 20 },
  ];

  const COLORS = ["#FFC801", "#FF9932", "#22C55E", "#3B82F6", "#A855F7"];

  return (
    <section className="companies">

      <p className="company-title">
        Trusted by innovative teams across industries
      </p>

      {/* REAL PIE CHART */}
      <div className="company-chart">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* COMPANY CARDS */}
      <div className="company-container">
        <div className="company-card">Tata</div>
        <div className="company-card">Infosys</div>
        <div className="company-card">Wipro</div>
        <div className="company-card">HCL</div>
        <div className="company-card">More.......</div>
      </div>

    </section>
  );
}

export default Companies;