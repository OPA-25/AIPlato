import "./Workflow.css";

function Workflow() {
  return (
    <section className="workflow" id="workflow">

      <div className="workflow-left">

        <p className="section-tag">
          HOW IT WORKS
        </p>

        <h2>
          Let AI Handle Your Data While You Focus on Growth
        </h2>

        <p className="workflow-desc">
          AIPlato automates repetitive business processes,
          cleans your data, generates reports,
          and delivers actionable insights in just a few clicks.
        </p>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>

            <div>
              <h3>Upload Your Data</h3>
              <p>Import Excel, CSV or Database files securely.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">02</div>

            <div>
              <h3>AI Processing</h3>
              <p>Automatically clean, organize and analyze data.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">03</div>

            <div>
              <h3>Generate Insights</h3>
              <p>Create dashboards, reports and predictions instantly.</p>
            </div>
          </div>

        </div>

      </div>

      <div className="workflow-right">

        <div className="workflow-box">

          <h3>Today's Automation</h3>

          <div className="progress-box">

            <span>Processing Files</span>

            <div className="progress">
              <div className="progress-fill"></div>
            </div>

          </div>

          <div className="status-card">

            <div>
              <h4>Files Processed</h4>
              <p>1,284</p>
            </div>

            <div>
              <h4>Accuracy</h4>
              <p>99.2%</p>
            </div>

          </div>

          <div className="success">
            ✔ AI Completed Workflow Successfully
          </div>

        </div>

      </div>

    </section>
  );
}

export default Workflow;