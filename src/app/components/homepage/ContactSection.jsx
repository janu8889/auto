import { ArrowIcon } from "./HomepageIcons";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Start the Conversation</h2>
          <div className="section-line" />
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>K&E Auto Inc</h3>
            <div className="contact-item">
              <div className="contact-icon">⌖</div>
              <div className="contact-item-content">
                <h4>Visit Us</h4>
                <p>Norway Pines Pl<br />Hermantown, MN 55811</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">☎</div>
              <div className="contact-item-content">
                <h4>Call Us</h4>
                <p><a href="tel:2185050788">218-505-0788</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">◷</div>
              <div className="contact-item-content">
                <h4>Business Hours</h4>
                <p>Monday to Friday: 9AM - 5PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input type="text" name="fullName" id="fullName" required placeholder="Full name" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" name="email" id="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" name="phone" id="phone" required placeholder="(555) 123-4567" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4" placeholder="Tell us about what you're looking for..." />
              </div>
              <div className="consent-group">
                <label>
                  <input type="checkbox" name="consent" required defaultChecked />
                  <span>I agree to receive communications from K&E Auto Inc.</span>
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Message <ArrowIcon />
              </button>
              <p className="form-note">We typically respond within 24 hours</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
