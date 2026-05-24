/* eslint-disable @next/next/no-img-element */
import "./about.css";

import logoAsset from "./assets/logo.png";

const navLeft = [
  { label: "Home", href: "https://kandeautosales.com/" },
  { label: "Inventory", href: "https://kandeautosales.com/inventory.php" },
  { label: "About", href: "https://kandeautosales.com/about.php", active: true },
];

const navRight = [
  { label: "Shipping", href: "https://kandeautosales.com/shipping.php" },
  { label: "Sell", href: "https://kandeautosales.com/sell.php" },
  { label: "Contact", href: "https://kandeautosales.com/contact.php" },
];

const values = [
  {
    title: "Integrity",
    icon: "shield",
    titleColor: "#f8fafc",
    text: "Complete transparency in every vehicle's history, condition, and provenance. No surprises, only trust.",
  },
  {
    title: "Excellence",
    icon: "award",
    titleColor: "var(--color-navy)",
    text: "Only the finest vehicles earn a place in our inventory. We accept nothing less than exceptional.",
  },
  {
    title: "Relationship",
    icon: "users",
    titleColor: "#f8fafc",
    text: "Building lasting connections with customers who share our passion for automotive excellence.",
  },
];

const stats = [
  ["18+", "Years in Business"],
  ["500+", "Happy Customers"],
  ["50", "States Served"],
  ["100%", "Satisfaction Focus"],
];

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

function ExternalIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ValueIcon({ type }) {
  const style = { width: 28, height: 28 };

  if (type === "award") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
              <a key={item.label} href={item.href} className={item.active ? "nav-link active" : "nav-link"} itemProp="url">
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
              <a key={item.label} href={item.href} className="nav-link" itemProp="url">
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

function Hero() {
  return (
    <div className="page-header" style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <span className="hero-tag" style={{ animation: "fadeUp 0.6s ease both" }}>
          Est. 2008
        </span>
        <h1>Our Story</h1>
        <p>A legacy built on passion, integrity, and excellence</p>
      </div>
    </div>
  );
}

function BeginningSection() {
  return (
    <section style={{ padding: "5rem 2rem", background: "#1e293b" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div className="reveal-left revealed">
          <span className="section-tag" style={{ textAlign: "left" }}>
            The Beginning
          </span>
          <h2 className="section-title" style={{ textAlign: "left" }}>
            A Passion Born of Purpose
          </h2>
          <div className="section-line" style={{ margin: "0 0 2rem 0" }} />

          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.375rem",
              color: "#f8fafc",
              fontStyle: "italic",
              marginBottom: "1.5rem",
              lineHeight: 1.5,
            }}
          >
            &quot;Every modern automobile represents innovation and excellence. Our mission is to connect you with your perfect vehicle.&quot;
          </p>

          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Founded in 2008, K&E Auto Inc emerged from a deep-rooted passion for automotive excellence. What began as a
            personal vision quickly evolved into a trusted destination for drivers across the nation.
          </p>

          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.9 }}>
            Today, we continue that tradition, combining decades of expertise with an unwavering commitment to quality. Each
            vehicle in our inventory is meticulously vetted, ensuring that every purchase represents the very best in modern
            automotive excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section style={{ padding: "var(--section-padding) 2rem", background: "var(--color-bg-primary)" }}>
      <div className="container">
        <div className="section-header reveal revealed">
          <span className="section-tag">Our Philosophy</span>
          <h2 className="section-title">Guiding Principles</h2>
          <div className="section-line" />
          <p className="section-subtitle">The values that define every interaction and transaction</p>
        </div>

        <div
          className="stagger-children revealed"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem", maxWidth: 1100, margin: "0 auto" }}
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="value-card"
              style={{
                background: "#2c3e50",
                padding: "2.5rem",
                borderRadius: "var(--radius-xl)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                textAlign: "center",
                transition: "all var(--transition-smooth)",
                border: "1px solid #475569",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: "rgba(201,169,98,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <ValueIcon type={value.icon} />
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: value.titleColor, marginBottom: "0.75rem" }}>
                {value.title}
              </h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, fontSize: "0.9375rem" }}>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-container reveal revealed">
        {stats.map(([value, label]) => (
          <div className="stat-item" key={label}>
            <div className="stat-number">{value}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
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
                  Norway Pines Pl
                  <br />
                  Hermantown, MN 55811
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
              <LocationIcon style={{ width: 48, height: 48, marginBottom: "1rem", opacity: 0.5, stroke: "var(--color-navy)", strokeWidth: 1.5 }} />
              <p style={{ color: "var(--color-text-secondary)" }}>Hermantown, MN </p>
              <a
                href="https://maps.google.com/?q=Norway+Pines+Pl%2C+Hermantown%2C+MN+55811"
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

function CtaSection() {
  return (
    <section className="section-dark" style={{ padding: "5rem 2rem", textAlign: "center" }}>
      <div className="container reveal revealed">
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#ffffff", marginBottom: "1rem" }}>
          Ready to Find Your Vehicle?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "2rem", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
          Whether you&apos;re a seasoned buyer or exploring your first purchase, we&apos;re here to guide you.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://kandeautosales.com/inventory.php" className="btn btn-primary btn-lg">
            Browse Inventory
          </a>
          <a href="https://kandeautosales.com/contact.php" className="btn btn-outline-light btn-lg">
            Contact Us
          </a>
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

export default function AboutPage() {
  return (
    <>
      <Header />
      <main role="main">
        <Hero />
        <BeginningSection />
        <PhilosophySection />
        <StatsBar />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
      <button className="back-to-top" id="backToTop" aria-label="Back to top" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
