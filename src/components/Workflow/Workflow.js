import "./Workflow.css";

function Workflow() {
  return (
    <section className="workflow" id="workflow">

      {/* LEFT SIDE */}
      <div className="workflow-left">

        <p className="section-tag">
          AI DECISION PIPELINE
        </p>

        <h2>
          Watch AI Transform Raw Data Into Business Intelligence
        </h2>

        <p className="workflow-desc">
          AIPlato continuously validates, analyzes, predicts and automates
          your business workflows using enterprise-grade AI models.
        </p>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>

            <div>
              <h3>Connect Data Sources</h3>
              <p>
                Securely connect Excel, CSV, ERP, CRM and Cloud platforms.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">02</div>

            <div>
              <h3>AI Understands Context</h3>
              <p>
                Intelligent models clean, validate and organize every dataset.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">03</div>

            <div>
              <h3>Predict & Automate</h3>
              <p>
                Generate predictions, trigger workflows and create reports instantly.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="workflow-right">

        <div className="workflow-box">

          <div className="live-status">

            <span className="dot"></span>

            AI Engine Online

          </div>

          <h3>Live AI Processing</h3>

          <div className="progress-box">

            <div className="progress-title">
              <span>Current Task</span>
              <strong>84%</strong>
            </div>

            <div className="progress">
              <div className="progress-fill"></div>
            </div>

            <small>Financial_Report_2026.xlsx</small>

          </div>

          <div className="status-grid">

            <div className="status-item">
              <h4>Documents</h4>
              <p>1,284</p>
            </div>

            <div className="status-item">
              <h4>Accuracy</h4>
              <p>99.82%</p>
            </div>

            <div className="status-item">
              <h4>Latency</h4>
              <p>118 ms</p>
            </div>

            <div className="status-item">
              <h4>AI Queue</h4>
              <p>24</p>
            </div>

          </div>

          <div className="activity-feed">

            <h4>Recent Activity</h4>

            <ul>

              <li>✓ Customer records classified</li>

              <li>✓ Sales forecast generated</li>

              <li>✓ Fraud anomaly detected</li>

              <li>✓ CRM synchronized</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Workflow;