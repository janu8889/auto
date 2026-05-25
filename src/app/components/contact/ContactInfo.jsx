// components/contact/ContactInfo.jsx


function ContactInfo({MailIcon, LocationIcon, ClockIcon}) {
  return (
    <div className="contact-info">
      <h3>Contact Information</h3>

      <div className="contact-item">
        <div className="contact-icon">
          <LocationIcon />
        </div>

        <div className="contact-item-content">
          <h4>Visit Us</h4>

          <p>
            3595 Buckhead Loop NE
            <br />
            Atlanta, GA 31126
          </p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          <MailIcon />
        </div>

        <div className="contact-item-content">
          <h4>Email</h4>

          <p>
            <a href="mailto:sales@.com">sales@.com</a>
          </p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          <ClockIcon />
        </div>

        <div className="contact-item-content">
          <h4>Business Hours</h4>

          <p>Monday to Friday: 9AM - 5PM</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "2rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h4
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: "var(--color-gold)",
            marginBottom: "1rem",
          }}
        >
          Full range of vehicles sourced across the U.S., professionally handled and delivered quickly to your location.
        </h4>

        <div style={{ display: "flex", gap: "0.75rem" }} />
      </div>
    </div>
  );
}

export default ContactInfo;