/* eslint-disable @next/next/no-img-element */
import "./purchase.css";

import logoAsset from "./assets/logo.png";
import vehicleAsset from "./assets/vehicle.jpg";

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

const states = [
  ["AL", "Alabama"],
  ["AK", "Alaska"],
  ["AZ", "Arizona"],
  ["AR", "Arkansas"],
  ["CA", "California"],
  ["CO", "Colorado"],
  ["CT", "Connecticut"],
  ["DE", "Delaware"],
  ["FL", "Florida"],
  ["GA", "Georgia"],
  ["HI", "Hawaii"],
  ["ID", "Idaho"],
  ["IL", "Illinois"],
  ["IN", "Indiana"],
  ["IA", "Iowa"],
  ["KS", "Kansas"],
  ["KY", "Kentucky"],
  ["LA", "Louisiana"],
  ["ME", "Maine"],
  ["MD", "Maryland"],
  ["MA", "Massachusetts"],
  ["MI", "Michigan"],
  ["MN", "Minnesota"],
  ["MS", "Mississippi"],
  ["MO", "Missouri"],
  ["MT", "Montana"],
  ["NE", "Nebraska"],
  ["NV", "Nevada"],
  ["NH", "New Hampshire"],
  ["NJ", "New Jersey"],
  ["NM", "New Mexico"],
  ["NY", "New York"],
  ["NC", "North Carolina"],
  ["ND", "North Dakota"],
  ["OH", "Ohio"],
  ["OK", "Oklahoma"],
  ["OR", "Oregon"],
  ["PA", "Pennsylvania"],
  ["RI", "Rhode Island"],
  ["SC", "South Carolina"],
  ["SD", "South Dakota"],
  ["TN", "Tennessee"],
  ["TX", "Texas"],
  ["UT", "Utah"],
  ["VT", "Vermont"],
  ["VA", "Virginia"],
  ["WA", "Washington"],
  ["WV", "West Virginia"],
  ["WI", "Wisconsin"],
  ["WY", "Wyoming"],
  ["DC", "Washington DC"],
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
        <ol>
          <li>
            <a href="https://kandeautosales.com/">Home</a>
          </li>
          <li>
            <a href="https://kandeautosales.com/inventory.php">Inventory</a>
          </li>
          <li>
            <a href="https://kandeautosales.com/inventory/2023-ford-f-150-raptor-hennessey-velociraptor-600">
              2023 Ford F-150 Raptor Hennessey VelociRaptor 600
            </a>
          </li>
          <li>Purchase</li>
        </ol>
      </div>
    </nav>
  );
}

function VehicleSummary() {
  return (
    <div className="purchase-vehicle-summary">
      <div className="purchase-vehicle-image">
        <img src={vehicleAsset.src} alt="2023 Ford F-150 Raptor Hennessey VelociRaptor 600" />
      </div>
      <div className="purchase-vehicle-info">
        <p className="purchase-vehicle-year">2023</p>
        <h2 className="purchase-vehicle-title">Ford F-150 Raptor Hennessey VelociRaptor 600</h2>
        <p className="purchase-vehicle-price">$65,000</p>
      </div>
    </div>
  );
}

function PurchaseForm() {
  return (
    <div className="purchase-form-container" id="purchaseFormContainer">
      <div className="purchase-form-header">
        <h1>Complete Your Purchase</h1>
        <p>Please provide your information below. After submission, you will receive an invoice via email with payment instructions and documents to sign online.</p>
      </div>

      <form id="purchaseForm" className="purchase-form" encType="multipart/form-data">
        <div className="form-section">
          <h3>Personal Information</h3>

          <div className="form-group">
            <label htmlFor="full_name">Full Name (as shown on ID) *</label>
            <input type="text" name="full_name" id="full_name" required autoComplete="name" placeholder="John Doe" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" name="email" id="email" required autoComplete="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" name="phone" id="phone" required autoComplete="tel" placeholder="(555) 123-4567" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Shipping Address</h3>

          <div className="form-group">
            <label htmlFor="street">Street Address *</label>
            <input type="text" name="street" id="street" required autoComplete="street-address" placeholder="123 Main Street" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input type="text" name="city" id="city" required autoComplete="address-level2" placeholder="Hermantown" />
            </div>
            <div className="form-group form-group-small">
              <label htmlFor="state">State *</label>
              <select name="state" id="state" required autoComplete="address-level1" defaultValue="">
                <option value="">Select</option>
                {states.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group form-group-small">
              <label htmlFor="zip">ZIP Code *</label>
              <input type="text" name="zip" id="zip" required autoComplete="postal-code" placeholder="32837" maxLength={10} pattern="[0-9]{5}(-[0-9]{4})?" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Identity Verification</h3>
          <p className="form-section-note">
            Please upload a clear photo of the <strong>front of your Driver&apos;s License</strong> or government-issued ID.
          </p>

          <div className="form-group">
            <label htmlFor="id_document">Front of Driver&apos;s License / ID *</label>
            <div className="file-upload-wrapper">
              <input type="file" name="id_document" id="id_document" required accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,application/pdf" capture="environment" />
              <div className="file-upload-box" id="fileUploadBox">
                <div className="file-upload-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <p className="file-upload-text">
                  <span className="file-upload-btn">Choose File</span> or drag and drop
                </p>
                <p className="file-upload-hint">Supports: JPG, PNG, GIF, WEBP, PDF (Max 10MB)</p>
                <p className="file-upload-mobile-hint sf-hidden">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16, verticalAlign: "middle" }}>
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  On mobile? Tap to take a photo with your camera
                </p>
              </div>
              <div className="file-preview" id="filePreview" style={{ display: "none" }} />
            </div>
          </div>
        </div>

        <div className="consent-group purchase-consent">
          <label>
            <input type="checkbox" name="consent" id="consent" required value="on" />
            <span className="consent-text">
              I confirm that the information provided is accurate and I authorize K&E Auto Inc to contact me regarding this purchase. I understand that submitting this form is a non-binding expression of interest and does not constitute a final purchase agreement. I agree to the{" "}
              <a href="https://kandeautosales.com/terms.php" target="_blank">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="https://kandeautosales.com/privacy.php" target="_blank">
                Privacy Policy
              </a>
              .
            </span>
          </label>
        </div>

        <div className="alert alert-error" id="formError" style={{ display: "none" }} />

        <button type="submit" className="btn btn-primary btn-lg btn-block" id="submitBtn">
          <span className="btn-text">Submit Purchase Request</span>
          <span className="btn-loading" style={{ display: "none" }}>
            <svg className="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
            </svg>
            Processing...
          </span>
        </button>
        <p className="form-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14, verticalAlign: "middle", marginRight: 4 }}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Your information is encrypted and secure
        </p>
      </form>
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

export default function PurchasePage() {
  return (
    <>
      <Header />
      <main role="main">
        <Breadcrumb />
        <section className="purchase-section">
          <div className="container">
            <div className="purchase-container">
              <VehicleSummary />
              <PurchaseForm />
              <div className="purchase-success" id="purchaseSuccess" style={{ display: "none" }} />
            </div>
          </div>
        </section>
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
