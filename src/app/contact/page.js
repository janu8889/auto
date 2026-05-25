/* eslint-disable @next/next/no-img-element */
import "./contact.css";

import logoAsset from "./assets/logo.png";

const navLeft = [
  { label: "Home", href: "https://kandeautosales.com/" },
  { label: "Inventory", href: "https://kandeautosales.com/inventory.php" },
  { label: "About", href: "https://kandeautosales.com/about.php" },
];

const navRight = [
  { label: "Shipping", href: "https://kandeautosales.com/shipping.php" },
  { label: "Sell", href: "https://kandeautosales.com/sell.php" },
  { label: "Contact", href: "https://kandeautosales.com/contact.php", active: true },
];

const subjectOptions = ["General Inquiry", "Question About a Vehicle", "Interested in Selling", "Shipping Information", "Other"];

const footerExplore = [
  ["Home", "https://kandeautosales.com/"],
  ["Inventory", "https://kandeautosales.com/inventory.php"],
  ["About Us", "https://kandeautosales.com/about.php"],
  ["Shipping", "https://kandeautosales.com/shipping.php"],
  ["Sell Your Car", "https://kandeautosales.com/sell.php"],
];

const footerSupport = [
  ["Contact Us", "https://kandeautosales.com/contact.php"],
  ["Shipping FAQ", "https://kandeautosales.com/shipping.php#faq"],
  ["Privacy Policy", "https://kandeautosales.com/privacy.php"],
  ["Terms of Service", "https://kandeautosales.com/terms.php"],
];

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function Header() {
  return (
    <>
      <nav className="navbar scrolled" id="navbar" itemScope itemType="https://schema.org/SiteNavigationElement">
        <div className="nav-container">
          <div className="nav-left">
            {navLeft.map((item) => (
              <a key={item.label} href={item.href} className="nav-link" itemProp="url">
                {item.label}
              </a>
            ))}
          </div>

          <a href="https://kandeautosales.com/" className="logo" itemProp="url">
            <img
              src={logoAsset.src}
              alt="K&E Auto Inc"
              className="logo-image"
              style={{
                "--desktop-logo-height": "100px",
                "--mobile-logo-height": "90px",
                height: "var(--desktop-logo-height)",
              }}
            />
          </a>

          <div className="nav-right">
            {navRight.map((item) => (
              <a key={item.label} href={item.href} className={item.active ? "nav-link active" : "nav-link"} itemProp="url">
                {item.label}
              </a>
            ))}
            <a href="tel:2185050788" className="nav-cta" aria-label="Call 218-505-0788">
              <PhoneIcon />
              218-505-0788
            </a>
          </div>

          <button className="mobile-menu-btn sf-hidden" id="mobileMenuBtn" aria-label="Toggle menu" type="button" />
        </div>
      </nav>
      <div className="mobile-nav sf-hidden" id="mobileNav" role="navigation" aria-label="Mobile navigation" />
    </>
  );
}

function CallBand() {
  return (
    <div style={{ background: "#1e293b", padding: "calc(var(--nav-height) + 3rem) 2rem 3rem", textAlign: "center" }}>
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.75rem" }}>
        Call Us Directly
      </p>
      <a
        href="tel:2185050788"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.75rem,4vw,2.5rem)",
          color: "var(--color-gold)",
          transition: "opacity 0.3s",
        }}
      >
        <PhoneIcon style={{ width: 32, height: 32 }} />
        218-505-0788
      </a>
    </div>
  );
}

function ContactInfo() {
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
            Norway Pines Pl
            <br />
            Hermantown, MN 55811
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
            <a href="mailto:sales@kandeautosales.com">sales@kandeautosales.com</a>
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

      <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <h4 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: "var(--color-gold)", marginBottom: "1rem" }}>
          Follow Us
        </h4>
        <div style={{ display: "flex", gap: "0.75rem" }} />
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="contact-form">
      <h3>Send Us a Message</h3>
      <form id="contactForm" action="/api/contact.php" method="POST">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            required
            autoComplete="name"
            placeholder="Full name"
            minLength={1}
            maxLength={100}
            title="Enter at least 1 character"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" name="email" id="email" required autoComplete="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" name="phone" id="phone" required autoComplete="tel" placeholder="(555) 123-4567" minLength={10} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select name="subject" id="subject" defaultValue="General Inquiry">
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea name="message" id="message" rows={5} required placeholder="How can we help you?" />
        </div>

        <div className="consent-group">
          <label>
            <input type="checkbox" name="consent" required defaultChecked value="on" />
            <span>
              I consent to K&E Auto Inc contacting me regarding my inquiry.{" "}
              <small>
                <a href="https://kandeautosales.com/privacy.php" target="_blank">
                  Privacy Policy
                </a>
              </small>
            </span>
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block btn-lg">
          Send Message
          <ArrowIcon />
        </button>

        <p className="form-note">We aim to respond within 24 hours</p>
      </form>
    </div>
  );
}

function ContactSection() {
  return (
    <section style={{ padding: "var(--section-padding) 2rem", background: "var(--color-bg-primary)" }}>
      <div className="container">
        <div className="section-header reveal revealed">
          <span className="section-tag">Get In Touch</span>
          <h1 className="section-title">We&apos;d Love to Hear From You</h1>
          <div className="section-line" />
          <p className="section-subtitle">Whether you have a question about a vehicle or need assistance, our team is here to help</p>
        </div>

        <div className="contact-grid reveal revealed">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="https://kandeautosales.com/" className="footer-logo">
              <img src={logoAsset.src} alt="K&E Auto Inc" className="footer-logo-image" style={{ height: 150 }} />
            </a>
            <p />
            <div className="footer-social" />
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <ul className="footer-links">
              {footerExplore.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul className="footer-links">
              {footerSupport.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <LocationIcon />
              <span>
                Norway Pines Pl
                <br />
                Hermantown, MN 55811
              </span>
            </div>
            <div className="footer-contact-item">
              <PhoneIcon />
              <a href="tel:2185050788">218-505-0788</a>
            </div>
            <div className="footer-contact-item">
              <MailIcon />
              <a href="mailto:sales@kandeautosales.com">sales@kandeautosales.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="https://kandeautosales.com/privacy.php">Privacy</a>
            <a href="https://kandeautosales.com/terms.php">Terms</a>
          </div>
          <p className="footer-copyright">© 2026 K&E Auto Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function ContactPage() {
  return (
    <>
      <main role="main">
        <CallBand />
        <ContactSection />
      </main>
    </>
  );
}
