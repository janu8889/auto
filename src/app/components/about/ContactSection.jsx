function ContactSection({ LocationIcon, ClockIcon, PhoneIcon, ExternalIcon }) {
  return (
    <section style={{ padding: "var(--section-padding) 2rem", background: "var(--color-bg-primary)" }}>
      <div className="container">
        <div className="contact-grid reveal revealed" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="contact-info">
            <h3>Visit Our Showroom</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.8 }}>
              Experience our inventory in person. Our showroom is open by appointment, ensuring personalized attention for every visitor.
            </p>

            <div className="contact-item">
              <div className="contact-icon">
                <LocationIcon />
              </div>
              <div className="contact-item-content">
                <h4>Location</h4>
                <p>
                  3595 Buckhead Loop NE
                  <br />
                  Atlanta, GA 31126
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <ClockIcon />
              </div>
              <div className="contact-item-content">
                <h4>Hours</h4>
                <p>Monday to Friday: 9AM - 5PM</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <PhoneIcon />
              </div>
              <div className="contact-item-content">
                <h4>Call Us</h4>
                <p>
                  <a href="tel:2185050788">218-505-0788</a>
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "var(--color-cream)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              minHeight: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <LocationIcon
                style={{
                  width: 48,
                  height: 48,
                  marginBottom: "1rem",
                  opacity: 0.5,
                  stroke: "var(--color-navy)",
                  strokeWidth: 1.5,
                }}
              />
              <p style={{ color: "var(--color-text-secondary)" }}>3595 Buckhead Loop NE </p>

              <a
                href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/place//data%3D!4m2!3m1!1s0x88f50f1118973e1b:0xb736585a8cb5e537%3Fsa%3DX%26ved%3D1t:8290%26ictx%3D111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ marginTop: "1rem" }}
              >
                Get Directions
                <ExternalIcon style={{ width: 16, height: 16 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;