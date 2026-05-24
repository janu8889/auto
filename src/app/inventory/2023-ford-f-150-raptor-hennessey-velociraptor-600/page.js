"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import "./vehicle-detail.css";

import logoAsset from "./assets/logo.png";
import raptor01 from "./assets/raptor-01.jpg";
import raptor02 from "./assets/raptor-02.jpg";
import raptor03 from "./assets/raptor-03.jpg";
import raptor04 from "./assets/raptor-04.jpg";
import raptor05 from "./assets/raptor-05.jpg";
import raptor06 from "./assets/raptor-06.jpg";
import raptor07 from "./assets/raptor-07.jpg";
import raptor08 from "./assets/raptor-08.jpg";
import raptor09 from "./assets/raptor-09.jpg";
import raptor10 from "./assets/raptor-10.jpg";
import raptor11 from "./assets/raptor-11.jpg";
import raptor12 from "./assets/raptor-12.jpg";
import raptor13 from "./assets/raptor-13.jpg";
import raptor14 from "./assets/raptor-14.jpg";

const navLeft = [
  { label: "Home", href: "https://kandeautosales.com/" },
  { label: "Inventory", href: "https://kandeautosales.com/inventory.php", active: true },
  { label: "About", href: "https://kandeautosales.com/about.php" },
];

const navRight = [
  { label: "Shipping", href: "https://kandeautosales.com/shipping.php" },
  { label: "Sell", href: "https://kandeautosales.com/sell.php" },
  { label: "Contact", href: "https://kandeautosales.com/contact.php" },
];

const galleryImages = [
  raptor01,
  raptor02,
  raptor03,
  raptor04,
  raptor05,
  raptor06,
  raptor07,
  raptor08,
  raptor09,
  raptor10,
  raptor11,
  raptor12,
  raptor13,
  raptor14,
];

const specs = [
  ["Mileage", "15,803 mi"],
  ["Engine", "Twin-Turbocharged 3.5-Liter V6"],
  ["Transmission", "Automatic"],
  ["Exterior Color", "Agate Black Metallic Paint"],
  ["Interior Color", "Black Leather Upholstery"],
  ["Title Status", "Clean"],
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

function ChevronLeftIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
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
            <a itemProp="item" href="https://kandeautosales.com/inventory.php">
              <span itemProp="name">Inventory</span>
            </a>
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">2023 Ford F-150 Raptor Hennessey VelociRaptor 600</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

function VehicleGallery() {
  const [activeImage, setActiveImage] = useState(0);

  const showPrevious = () => {
    setActiveImage((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveImage((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="vehicle-gallery" id="vehicleGallery">
      <div className="gallery-main">
        <img src={galleryImages[activeImage].src} alt="2023 Ford F-150 Raptor Hennessey VelociRaptor 600" id="mainImage" />
        <button className="gallery-nav gallery-prev" type="button" onClick={showPrevious} aria-label="Previous image">
          <ChevronLeftIcon />
        </button>
        <button className="gallery-nav gallery-next" type="button" onClick={showNext} aria-label="Next image">
          <ChevronRightIcon />
        </button>
        <div className="gallery-counter" id="galleryCounter">
          {activeImage + 1} / {galleryImages.length}
        </div>
      </div>

      <div className="gallery-thumbnails">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={index === activeImage ? "gallery-thumb active" : "gallery-thumb"}
            onClick={() => setActiveImage(index)}
            aria-label={`Show thumbnail ${index + 1}`}
          >
            <img src={image.src} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

function TrustBadges() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "1rem", marginBottom: "1rem" }}>
      <div className="trust-badge" style={{ padding: "0.625rem 0.75rem", gap: "0.5rem" }}>
        <ShieldIcon style={{ width: 18, height: 18, minWidth: 18 }} />
        <div>
          <span className="trust-title" style={{ fontSize: "0.8125rem", display: "block", lineHeight: 1.2 }}>
            No Hidden Fees
          </span>
          <span className="trust-desc" style={{ fontSize: "0.6875rem", lineHeight: 1.2 }}>
            All fees included
          </span>
        </div>
      </div>
      <div className="trust-badge" style={{ padding: "0.625rem 0.75rem", gap: "0.5rem" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18, minWidth: 18 }}>
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
        <div>
          <span className="trust-title" style={{ fontSize: "0.8125rem", display: "block", lineHeight: 1.2 }}>
            Nationwide Shipping
          </span>
          <span className="trust-desc" style={{ fontSize: "0.6875rem", lineHeight: 1.2 }}>
            All 50 states
          </span>
        </div>
      </div>
    </div>
  );
}

function VehicleDescription() {
  return (
    <div className="vehicle-content">
      <div className="vehicle-tabs">
        <button className="vehicle-tab active" data-tab="overview" type="button">
          Overview
        </button>
      </div>

      <div className="tab-content active" id="tab-overview">
        <div className="vehicle-description">
          <h2>About This Ford F-150 Raptor Hennessey VelociRaptor 600</h2>
          <p>
            This 2023 Ford F-150 Raptor Hennessey VelociRaptor 600 is powered by a Twin-Turbocharged 3.5-Liter V6 paired
            with an automatic transmission, delivering enhanced power and off-road capability, finished in Agate Black Metallic
            with Black leather upholstery.
            <br />
            <br />
            Equipped with the Hennessey VelociRaptor 600 package including ECU tuning, upgraded induction components, and
            intercooler improvements. Features include a dual-range transfer case, electronically locking rear differential,
            redesigned front and rear bumpers, 3-inch suspension lift, leveling components, 20-inch Hennessey wheels with
            35-inch tires, power-retractable side steps, front LED light bar, LED lighting, twin-panel panoramic sunroof,
            power tailgate with integrated step, and towing equipment with Pro Trailer Backup Assist.
            <br />
            <br />
            The interior offers heated and ventilated front seats, heated rear seats, dual-zone automatic climate control, SYNC
            4 touchscreen infotainment with navigation and smartphone connectivity, and a Bang & Olufsen sound system,
            combining Hennessey performance upgrades with premium comfort and technology.
          </p>
        </div>
      </div>
    </div>
  );
}

function InquiryForm() {
  return (
    <div className="vehicle-inquiry" id="inquirySection">
      <h3>Interested in This Vehicle?</h3>
      <p className="inquiry-subtitle">Complete the form below and we&apos;ll reach out promptly with more information.</p>

      <form id="vehicleInquiryForm" action="/api/contact.php" method="POST">
        <div className="form-group">
          <label htmlFor="inqFullName">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14, display: "inline-block", verticalAlign: "middle", marginRight: 4, color: "var(--color-gold)" }}>
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Full Name *
          </label>
          <input type="text" name="fullName" id="inqFullName" required autoComplete="name" placeholder="Enter your full name" minLength={1} maxLength={100} title="Enter at least 1 character" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="inqEmail">
              <MailIcon style={{ width: 14, height: 14, display: "inline-block", verticalAlign: "middle", marginRight: 4, color: "var(--color-gold)" }} />
              Email Address *
            </label>
            <input type="email" name="email" id="inqEmail" required autoComplete="email" placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="inqPhone">
              <PhoneIcon style={{ width: 14, height: 14, display: "inline-block", verticalAlign: "middle", marginRight: 4, color: "var(--color-gold)" }} />
              Phone Number *
            </label>
            <input type="tel" name="phone" id="inqPhone" required autoComplete="tel" placeholder="(555) 123-4567" minLength={10} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inqMessage">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14, display: "inline-block", verticalAlign: "middle", marginRight: 4, color: "var(--color-gold)" }}>
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Message (Optional)
          </label>
          <textarea name="message" id="inqMessage" rows={5} placeholder="Tell us what you'd like to know about this vehicle..." />
        </div>

        <div className="consent-group">
          <label>
            <input type="checkbox" name="consent" required defaultChecked value="on" />
            <span>I agree to receive communications about this vehicle and related offerings.</span>
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: "1rem" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20 }}>
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2z" />
          </svg>
          Send Inquiry
          <ArrowRightIcon style={{ width: 18, height: 18 }} />
        </button>
        <p className="form-note" style={{ marginTop: "1rem", color: "#a1a1aa" }}>
          <ShieldIcon style={{ width: 14, height: 14, display: "inline-block", verticalAlign: "middle", marginRight: 4 }} />
          Your information is secure. We&apos;ll respond within 24 hours.
        </p>
      </form>
    </div>
  );
}

function VehicleSidebar() {
  return (
    <div className="vehicle-sidebar">
      <div className="vehicle-sidebar-header">
        <p className="vehicle-sidebar-year">2023</p>
        <h1 className="vehicle-sidebar-title">Ford F-150 Raptor Hennessey VelociRaptor 600</h1>
        <p className="vehicle-sidebar-price">$65,000</p>
      </div>

      <div className="specs-table">
        {specs.map(([label, value]) => (
          <div className="spec-row" key={label}>
            <span className="spec-label">{label}</span>
            <span className="spec-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="vehicle-cta">
        <div className="cta-buttons-row">
          <a href="#inquirySection" className="btn btn-primary btn-md">
            <MailIcon style={{ width: 16, height: 16 }} />
            Inquiry
          </a>
          <a href="tel:2185050788" className="btn btn-secondary btn-md">
            <PhoneIcon style={{ width: 16, height: 16 }} />
            Call Now
          </a>
        </div>
        <a href="https://kandeautosales.com/buy.php?slug=2023-ford-f-150-raptor-hennessey-velociraptor-600" className="btn btn-buy-now btn-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}>
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="buy-now-content">
            <span className="buy-now-main">Buy Now - Save $3,250</span>
            <span className="buy-now-promo">5% online discount + free shipping</span>
          </span>
        </a>
        <p className="cta-note">No obligation • Quick response guaranteed</p>
      </div>
    </div>
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

export default function VehicleDetailPage() {
  return (
    <>
      <Header />
      <main role="main">
        <div className="vehicle-detail">
          <Breadcrumb />
          <div className="vehicle-detail-container">
            <a href="https://kandeautosales.com/inventory.php" className="back-link">
              <ChevronLeftIcon />
              Back to Inventory
            </a>

            <div className="vehicle-layout">
              <div className="vehicle-main">
                <VehicleGallery />
                <TrustBadges />
                <VehicleDescription />
                <InquiryForm />
              </div>
              <VehicleSidebar />
            </div>
          </div>
        </div>

        <div className="image-lightbox sf-hidden" id="lightbox" />
        <div className="mobile-sticky-buttons sf-hidden" />
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
