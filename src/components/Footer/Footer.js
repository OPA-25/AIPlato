import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>AIPlato</h2>

          <p>
            Empowering businesses with AI-driven automation,
            analytics and enterprise solutions.
          </p>

        </div>

        <div className="footer-links">

          <div>

            <h3>Company</h3>

            <a href="/">About</a>
            <a href="/">Careers</a>
            <a href="/">Contact</a>

          </div>

          <div>

            <h3>Product</h3>

            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/">Security</a>

          </div>

          <div>

            <h3>Resources</h3>

            <a href="/">Blog</a>
            <a href="/">Documentation</a>
            <a href="/">Support</a>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 AIPlato. All Rights Reserved.
        </p>

        <div className="social-icons">

          <a href="/">LinkedIn</a>

          <a href="/">GitHub</a>

          <a href="/">Twitter</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;