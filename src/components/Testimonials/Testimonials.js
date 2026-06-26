import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonial-header">

        <span>TESTIMONIALS</span>

        <h2>Trusted by Businesses Worldwide</h2>

        <p>
          See how AIPlato is helping organizations automate workflows
          and improve productivity.
        </p>

      </div>

      <div className="testimonial-grid">

        <div className="testimonial-card">

          <div className="profile">
            <div className="avatar">A</div>

            <div>
              <h3>Arjun Mehta</h3>
              <p>CEO • TechNova</p>
            </div>
          </div>

          <p className="review">
            AIPlato transformed our reporting process.
            Tasks that took hours now finish in minutes.
          </p>

        </div>

        <div className="testimonial-card">

          <div className="profile">
            <div className="avatar">P</div>

            <div>
              <h3>Priya Sharma</h3>
              <p>Operations Manager</p>
            </div>
          </div>

          <p className="review">
            The AI automation is incredibly accurate.
            Our team now focuses on strategy instead of repetitive work.
          </p>

        </div>

        <div className="testimonial-card">

          <div className="profile">
            <div className="avatar">R</div>

            <div>
              <h3>Rahul Verma</h3>
              <p>Founder • DataCraft</p>
            </div>
          </div>

          <p className="review">
            Beautiful dashboards, fast performance,
            and excellent customer experience.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;