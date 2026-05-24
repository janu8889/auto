/* eslint-disable @next/next/no-img-element */
import "./shipping.css";

import logoAsset from "./assets/logo.png";

const navLeft = [
  { label: "Home", href: "https://kandeautosales.com/" },
  { label: "Inventory", href: "https://kandeautosales.com/inventory.php" },
  { label: "About", href: "https://kandeautosales.com/about.php" },
];

const navRight = [
  { label: "Shipping", href: "https://kandeautosales.com/shipping.php", active: true },
  { label: "Sell", href: "https://kandeautosales.com/sell.php" },
  { label: "Contact", href: "https://kandeautosales.com/contact.php" },
];

const services = [
  {
    title: "Enclosed Transport",
    subtitle: "Premium protection for your vehicle",
    price: "Starting at $1.00/mile",
    buttonClass: "btn btn-primary btn-block",
    icon: "enclosed",
    features: ["Full weather protection", "$500K+ insurance coverage", "GPS tracking included", "Soft-tie down system"],
  },
  {
    title: "Open Transport",
    subtitle: "Economical nationwide delivery",
    price: "Starting at $0.85/mile",
    buttonClass: "btn btn-outline btn-block",
    icon: "open",
    features: ["Cost-effective option", "Full insurance coverage", "Flexible scheduling", "Professional handlers"],
  },
  {
    title: "Door-to-Door",
    subtitle: "Maximum convenience",
    price: "Custom Quote",
    buttonClass: "btn btn-outline btn-block",
    icon: "home",
    features: ["Pickup at any location", "Delivery to your home", "Inspection on arrival", "Enclosed or open option"],
  },
];

const processSteps = [
  ["1", "Request Quote", "Tell us your pickup and delivery locations"],
  ["2", "Schedule", "Choose your pickup date and transport type"],
  ["3", "Track", "Monitor your vehicle throughout transit"],
  ["4", "Receive", "Inspect and accept your vehicle at delivery"],
];

const faqs = [
  [
    "How long does shipping take?",
    "Transit times vary by distance. East Coast to West Coast typically takes 7-10 days. Regional transport (under 500 miles) usually takes 2-4 days. We'll provide an accurate estimate with your quote.",
  ],
  [
    "Is my vehicle insured during transport?",
    "Yes, all vehicles are fully insured during transport. Our enclosed carriers provide up to $500,000 in coverage. We can arrange additional coverage for high-value vehicles upon request.",
  ],
  [
    "Can I track my vehicle?",
    "Absolutely. Our enclosed transporters are equipped with GPS tracking. You'll receive regular updates and can request real-time location information at any time.",
  ],
  [
    "What if my car doesn't run?",
    "No problem. Our carriers are equipped with winches and ramps to safely load non-running vehicles. Please let us know in advance so we can accommodate your needs.",
  ],
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
  ["Shipping FAQ", "#faq"],
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

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={{ width: 18, height: 18, flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ServiceIcon({ type }) {
  const style = { width: 28, height: 28 };

  if (type === "open") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
        <path d="M14 18V6a2 2 0 00-2-2H4a2 2 0 00-2 2v11a1 1 0 001 1h2" />
        <path d="M14 18h6a1 1 0 001-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0016.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    );
  }

  if (type === "home") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
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

function Hero() {
  return (
    <div className="page-header">
      <span className="hero-tag" style={{ animation: "fadeUp 0.6s ease both" }}>
        Nationwide Delivery
      </span>
      <h1>White-Glove Transport</h1>
      <p>Professional enclosed shipping to all 50 states</p>
    </div>
  );
}

function ServicesSection() {
  return (
    <section style={{ padding: "var(--section-padding) 2rem", background: "var(--color-bg-primary)" }}>
      <div className="container">
        <div className="section-header reveal revealed">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Transport Options</h2>
          <div className="section-line" />
          <p className="section-subtitle">Choose the shipping method that best fits your needs</p>
        </div>

        <div
          className="stagger-children revealed"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem", maxWidth: 1100, margin: "0 auto" }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="shipping-card"
              style={{
                background: "#2c3e50",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                transition: "all var(--transition-smooth)",
                border: "1px solid #475569",
                transform: "translateY(0px)",
              }}
            >
              <div style={{ background: "var(--color-bg-secondary)", padding: "2rem", textAlign: "center" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "rgba(201,169,98,0.15)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                  }}
                >
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.375rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>
                  {service.title}
                </h3>
                <p style={{ color: "#CBD5E1", fontSize: "0.875rem" }}>{service.subtitle}</p>
              </div>

              <div style={{ padding: "2rem" }}>
                <ul style={{ listStyle: "none", marginBottom: "1.5rem" }}>
                  {service.features.map((feature, index) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.75rem 0",
                        borderBottom: index === service.features.length - 1 ? undefined : "1px solid var(--color-border)",
                        color: "var(--color-text-secondary)",
                        fontSize: "0.9375rem",
                      }}
                    >
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p style={{ textAlign: "center", color: "var(--color-gold)", fontFamily: "var(--font-heading)", fontSize: "1.125rem", marginBottom: "1rem" }}>
                  {service.price}
                </p>
                <a href="#quote" className={service.buttonClass}>
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-dark" style={{ padding: "var(--section-padding) 2rem" }}>
      <div className="container">
        <div className="section-header reveal revealed">
          <span className="section-tag">The Process</span>
          <h2 className="section-title">How It Works</h2>
          <div className="section-line" />
        </div>

        <div
          className="stagger-children revealed"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2rem", maxWidth: 1000, margin: "0 auto" }}
        >
          {processSteps.map(([number, title, text]) => (
            <div key={title} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  border: "2px solid var(--color-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  color: "var(--color-gold)",
                }}
              >
                {number}
              </div>
              <h4 style={{ color: "var(--color-text)", fontFamily: "var(--font-heading)", marginBottom: "0.5rem" }}>{title}</h4>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.7 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" style={{ padding: "var(--section-padding) 2rem", background: "var(--color-bg-primary)" }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-header reveal revealed">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
          <div className="section-line" />
        </div>

        <div className="reveal revealed" style={{ background: "var(--color-white)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-sm)", overflow: "hidden" }}>
          {faqs.map(([question, answer], index) => {
            const isOpen = index === faqs.length - 1;

            return (
              <div key={question} className="faq-item" style={{ borderBottom: index === faqs.length - 1 ? undefined : "1px solid var(--color-border)" }}>
                <button
                  className="faq-question"
                  style={{
                    width: "100%",
                    padding: "1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  type="button"
                >
                  <span style={{ fontWeight: 600, color: "var(--color-navy)" }}>{question}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ width: 20, height: 20, transition: "transform 0.3s", color: "var(--color-gold)", transform: isOpen ? "rotate(180deg)" : undefined }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="faq-answer" style={{ maxHeight: isOpen ? 81 : 0, overflow: "hidden", transition: "max-height 0.3s" }}>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>{answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section id="quote" style={{ padding: "var(--section-padding) 2rem", background: "var(--color-white)" }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <div className="section-header reveal revealed">
          <span className="section-tag">Free Quote</span>
          <h2 className="section-title">Get Your Shipping Estimate</h2>
          <div className="section-line" />
        </div>

        <div className="contact-form reveal revealed" style={{ boxShadow: "var(--shadow-lg)" }}>
          <form id="shippingQuoteForm" action="/api/contact.php" method="POST">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" name="fullName" id="fullName" required placeholder="Full name" minLength={1} maxLength={100} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" id="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input type="tel" name="phone" id="phone" required placeholder="(555) 123-4567" minLength={10} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pickupZip">Pickup ZIP Code *</label>
                <input type="text" name="pickupZip" id="pickupZip" required placeholder="10001" />
              </div>
              <div className="form-group">
                <label htmlFor="deliveryZip">Delivery ZIP Code *</label>
                <input type="text" name="deliveryZip" id="deliveryZip" required placeholder="90210" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="vehicleInfo">Vehicle Information</label>
              <input type="text" name="vehicleInfo" id="vehicleInfo" placeholder="Year, Make, Model (e.g., 1967 Ford Mustang)" />
            </div>

            <div className="form-group">
              <label htmlFor="transportType">Transport Type</label>
              <select name="transportType" id="transportType" defaultValue="Enclosed">
                <option value="Enclosed">Enclosed (Recommended)</option>
                <option value="Open">Open</option>
                <option value="Not Sure">Not Sure - Please Advise</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Notes</label>
              <textarea name="message" id="message" rows={3} placeholder="Any special requirements or questions?" />
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Request Quote
              <ArrowIcon />
            </button>

            <p className="form-note">We typically respond with quotes within 24 hours</p>
          </form>
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

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main role="main">
        <Hero />
        <ServicesSection />
        <ProcessSection />
        <FaqSection />
        <QuoteSection />
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
