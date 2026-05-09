import { PageHeader, SiteFooter, SiteNav } from "../components/KandeShared";

export default function ContactPage() {
  return (
    <div className="homepage">
      <SiteNav />
      <main>
        <PageHeader tag="Call Us Directly 218-505-0788" title="Get In Touch" subtitle="Whether you have a question about a vehicle or need assistance, our team is here to help" />

        <section>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item"><div className="contact-icon">⌖</div><div className="contact-item-content"><h4>Visit Us</h4><p>Norway Pines Pl<br />Hermantown, MN 55811</p></div></div>
              <div className="contact-item"><div className="contact-icon">☎</div><div className="contact-item-content"><h4>Call Us</h4><p><a href="tel:2185050788">218-505-0788</a></p></div></div>
              <div className="contact-item"><div className="contact-icon">✉</div><div className="contact-item-content"><h4>Email</h4><p><a href="mailto:sales@kandeautosales.com">sales@kandeautosales.com</a></p></div></div>
              <div className="contact-item"><div className="contact-icon">◷</div><div className="contact-item-content"><h4>Business Hours</h4><p>Monday to Friday: 9AM - 5PM</p></div></div>
            </div>

            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form>
                <div className="form-group"><label htmlFor="fullName">Full Name *</label><input id="fullName" placeholder="Full name" required /></div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="email">Email Address *</label><input id="email" type="email" placeholder="john@example.com" required /></div>
                  <div className="form-group"><label htmlFor="phone">Phone Number *</label><input id="phone" placeholder="(555) 123-4567" required /></div>
                </div>
                <div className="form-group"><label htmlFor="subject">Subject</label><select id="subject"><option>General Inquiry</option><option>Question About a Vehicle</option><option>Interested in Selling</option><option>Shipping Information</option><option>Other</option></select></div>
                <div className="form-group"><label htmlFor="message">Your Message *</label><textarea id="message" rows="5" required /></div>
                <div className="consent-group"><label><input type="checkbox" required defaultChecked /><span>I consent to K&E Auto Inc contacting me regarding my inquiry.</span></label></div>
                <button className="btn btn-primary btn-block" type="submit">Send Message</button>
                <p className="form-note">We aim to respond within 24 hours</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
