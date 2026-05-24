/* eslint-disable @next/next/no-img-element */
import "./terms.css";

import legalSections from "./legalData";
import logoAsset from "./assets/logo.png";

const navLeft = [
  { label: "Home", href: "https://kandeautosales.com/" },
  { label: "Inventory", href: "https://kandeautosales.com/inventory.php" },
  { label: "About", href: "https://kandeautosales.com/about.php" },
];

const navRight = [
  { label: "Shipping", href: "https://kandeautosales.com/shipping.php" },
  { label: "Sell", href: "https://kandeautosales.com/sell.php" },
  { label: "Contact", href: "https://kandeautosales.com/contact.php" },
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

function Breadcrumb() {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href="https://kandeautosales.com/">
              <span itemProp="name">Home</span>
            </a>
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Terms and Conditions</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

function LegalBlock({ block }) {
  if (block.type === "h3") return <h3>{block.text}</h3>;

  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item, index) => (
          <li key={typeof item === "string" ? item : item.strong + index}>
            {typeof item === "string" ? (
              item
            ) : (
              <>
                <strong>{item.strong}</strong> {item.text}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return <p>{block.text}</p>;
}

function LegalContent() {
  return (
    <section className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last Updated: May 3, 2026</p>

          {legalSections.map((section) => (
            <div className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.blocks.map((block, index) => (
                <LegalBlock block={block} key={section.title + "-" + index} />
              ))}
            </div>
          ))}

          <div className="legal-section">
            <h2>17. Contact Information</h2>
            <p>For questions about these Terms, please contact us:</p>
            <div className="contact-info">
              <p>
                <strong>K&E Auto Inc</strong>
              </p>
              <p>Norway Pines Pl</p>
              <p>
                Phone: <a href="tel:2185050788">218-505-0788</a>
              </p>
              <p>
                Email: <a href="mailto:sales@kandeautosales.com">sales@kandeautosales.com</a>
              </p>
            </div>
          </div>
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

export default function TermsPage() {
  return (
    <>
      <Header />
      <main role="main">
        <Breadcrumb />
        <LegalContent />
      </main>
      <Footer />
      <button className="back-to-top visible" id="backToTop" aria-label="Back to top" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
