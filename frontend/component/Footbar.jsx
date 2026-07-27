import "../component/Footbar.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section">
          <h3>My School</h3>
          <p>Empowering students for a bright future.</p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@school.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 My School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;