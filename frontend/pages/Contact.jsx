import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <div className="contact-container">
        
        {/* 📌 Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: info@school.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: Pune, Maharashtra, India</p>
        </div>

        {/* 📌 Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>

      {/* 🗺️ Google Map */}
      <div className="map-container">
        <iframe
          title="School Location"
          src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;