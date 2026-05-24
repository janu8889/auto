/* eslint-disable @next/next/no-img-element */
import logoAsset from "./homepage-assets/logo.png";
import vehicleRaptor from "./homepage-assets/vehicle-raptor.jpg";
import vehicleSierra from "./homepage-assets/vehicle-sierra.jpg";
import vehicleF450 from "./homepage-assets/vehicle-f450.jpg";
import showroomAsset from "./homepage-assets/showroom.jpg";
import avatarTyler from "./homepage-assets/avatar-tyler.jpg";
import avatarJason from "./homepage-assets/avatar-jason.jpg";
import avatarChris from "./homepage-assets/avatar-chris.jpg";

const navLeft = [
  { label: "Home", href: "https://kandeautosales.com/", active: true },
  { label: "Inventory", href: "https://kandeautosales.com/inventory.php" },
  { label: "About", href: "https://kandeautosales.com/about.php" },
];

const navRight = [
  { label: "Shipping", href: "https://kandeautosales.com/shipping.php" },
  { label: "Sell", href: "https://kandeautosales.com/sell.php" },
  { label: "Contact", href: "https://kandeautosales.com/contact.php" },
];

const stats = [
  { value: "22+", label: "Cars Available" },
  { value: "7+", label: "Years Experience" },
  { value: "500+", label: "Happy Customers" },
  { value: "50", label: "States Served" },
];

const vehicles = [
  {
    href: "https://kandeautosales.com/inventory/2023-ford-f-150-raptor-hennessey-velociraptor-600",
    year: "2023",
    title: "Ford F-150 Raptor Hennessey VelociRaptor 600",
    specs: "15,803 miles · Twin-Turbocharged 3.5-Liter V6 · Automatic",
    price: "$65,000",
    image: vehicleRaptor,
  },
  {
    href: "https://kandeautosales.com/inventory/2024-gmc-sierra-3500hd-at4",
    year: "2024",
    title: "GMC Sierra 3500HD AT4",
    specs: "23,190 miles · Duramax 6.6L V8 Turbodiesel · 10-Speed Automatic",
    price: "$60,000",
    image: vehicleSierra,
  },
  {
    href: "https://kandeautosales.com/inventory/2026-ford-f-450-super-duty-xlt",
    year: "2026",
    title: "Ford F-450 Super Duty XLT",
    specs: "8,428 miles · 6.7L High Output Power Stroke V8 Diesel · 10-Speed Automatic",
    price: "$65,000",
    image: vehicleF450,
  },
];

const features = [
  { label: "Verified History", icon: "shield" },
  { label: "Detailed Photos", icon: "image" },
  { label: "Nationwide Shipping", icon: "truck" },
  { label: "Expert Guidance", icon: "users" },
];

const testimonials = [
  {
    name: "Tyler Brooks",
    text: "I purchased a brand new F-350 from Kash Automotive Group LLC and the process was flawless from start to finish. They knew exactly what I needed for my work, helped me choose the right configuration, and had everything ready quickly. The truck showed up exactly as promised - no surprises. Solid team and real professionals.",
    image: avatarTyler,
  },
  {
    name: "Jason Miller",
    text: "We've sourced multiple new trucks through Kash Automotive Group LLC, including Sierra 3500HD models for our fleet. Every unit was exactly as described, and the communication throughout the process was excellent. If you're looking for heavy-duty trucks without wasting time, this is the place.",
    image: avatarJason,
  },
  {
    name: "Chris Alvarez",
    text: "Picked up a brand new GMC Sierra 3500HD and couldn't be happier. The team at Kash Automotive Group LLC made everything straightforward - no pressure, just clear information and fast execution. They even handled the delivery to my location without any issues. Highly recommend if you want it done right.",
    image: avatarChris,
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function FeatureIcon({ type }) {
  const iconStyle = { width: 20, height: 20 };

  if (type === "image") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={iconStyle}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    );
  }

  if (type === "truck") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={iconStyle}>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={iconStyle}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={iconStyle}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function Header() {
  return (
    <>
      <nav className="navbar" id="navbar" >
        <div className="nav-container">
          <div className="nav-left">
            {navLeft.map((item) => (
              <a key={item.label} href={item.href} className={item.active ? "nav-link active" : "nav-link"}>
                {item.label}
              </a>
            ))}
          </div>

          <a href="https://kandeautosales.com/" className="logo">
            <img
              src={logoAsset.src}
              alt="Kash Automotive Group LLC"
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
              <a key={item.label} href={item.href} className="nav-link">
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
    <section className="hero" itemScope itemType="https://schema.org/WebPageElement">
      <div className="hero-bg" />

      <div className="hero-content">
        <span className="hero-tag">Premium Inventory</span>
        <h1 className="hero-title" itemProp="headline">
          Drive Your Passion Beyond Limits
        </h1>
        <p className="hero-description">
          Discover a curated selection of modern performance trucks and premium vehicles in Atlanta, GA.
        </p>
        <div className="hero-buttons">
          <a href="https://kandeautosales.com/inventory.php" className="btn btn-primary btn-lg">
            Browse Inventory
            <ArrowIcon />
          </a>
          <a href="https://kandeautosales.com/contact.php" className="btn btn-outline-light btn-lg">
            Contact Us
          </a>
        </div>
      </div>

      <a href="#featured" className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-indicator-icon" />
      </a>
    </section>
  );
}

function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-container reveal revealed">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="section-header reveal revealed">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}

function FeaturedVehicles() {
  return (
    <section id="featured" style={{ padding: "var(--section-padding) 2rem", background: "var(--color-bg-primary)" }}>
      <div className="container">
        <SectionHeader
          tag="Featured"
          title="Premium Vehicles"
          subtitle="Find the right vehicle for your lifestyle"
        />

        <div className="vehicles-grid stagger-children revealed">
          {vehicles.map((vehicle) => (
            <a href={vehicle.href} className="vehicle-card" key={vehicle.title}>
              <div className="vehicle-card-image">
                <img src={vehicle.image.src} alt={vehicle.title} loading="lazy" />
              </div>
              <div className="vehicle-card-body">
                <p className="vehicle-year">{vehicle.year}</p>
                <h3 className="vehicle-title">{vehicle.title}</h3>
                <p className="vehicle-specs">{vehicle.specs}</p>
                <div className="vehicle-card-footer">
                  <p className="vehicle-price">{vehicle.price}</p>
                  <span className="vehicle-card-btn">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }} className="reveal revealed">
          <a href="https://kandeautosales.com/inventory.php" className="btn btn-secondary btn-lg">
            View All 22 Vehicles
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section style={{ padding: 0, background: "#1e293b" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 700 }}>
        <div style={{ position: "relative", overflow: "hidden" }} className="reveal-left revealed">
          <img
            src={showroomAsset.src}
            alt="Kash Automotive Group LLC showroom"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        <div style={{ padding: "5rem", display: "flex", flexDirection: "column", justifyContent: "center" }} className="reveal-right revealed">
          <span className="section-tag" style={{ textAlign: "left" }}>
            Excellence
          </span>
          <h2 className="section-title" style={{ textAlign: "left" }}>
            Quality Vehicles You Can Trust
          </h2>
          <div className="section-line" style={{ margin: "0 0 2rem 0" }} />
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "#f8fafc", fontStyle: "italic", marginBottom: "1.5rem", lineHeight: 1.5 }}>
            &quot;Reliable vehicles for everyday driving.&quot;
          </p>
          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
            For over 7 years, Kash Automotive Group LLC has helped drivers find dependable vehicles at competitive prices. Our inventory includes a wide selection of cars, SUVs, and trucks chosen for their quality, value, and reliability.
          </p>
          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.9, marginBottom: "2rem" }}>
            Every vehicle tells a story. Our commitment is to preserve these stories while connecting passionate enthusiasts with the cars of their dreams.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {features.map((feature) => (
              <div key={feature.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(201,169,98,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FeatureIcon type={feature.icon} />
                </div>
                <span style={{ fontWeight: 500, color: "var(--color-text)" }}>{feature.label}</span>
              </div>
            ))}
          </div>
          <a href="https://kandeautosales.com/about.php" className="btn btn-outline" style={{ width: "fit-content" }}>
            Learn Our Story
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-dark" style={{ padding: "var(--section-padding) 2rem" }}>
      <div className="container">
        <SectionHeader tag="Testimonials" title="What Our Customers Say" subtitle="Trusted by drivers and enthusiasts across the nation" />
        <div className="testimonials-grid stagger-children revealed">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image.src} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section style={{ padding: "var(--section-padding) 2rem", background: "var(--color-bg-primary)" }}>
      <div className="container">
        <SectionHeader tag="Contact" title="Begin Your Journey" subtitle="Ready to find your next vehicle? We're here to help make it happen." />

        <div className="contact-grid reveal revealed">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <div className="contact-icon">
                <LocationIcon />
              </div>
              <div className="contact-item-content">
                <h4>Visit Our Showroom</h4>
                <p>
                  3595 Buckhead Loop NE
                  <br />
                  Atlanta, GA 31126
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <PhoneIcon />
              </div>
              <div className="contact-item-content">
                <h4>Call Us</h4>
                <p>
                  <a href="tel:2185050788" style={{ color: "var(--color-gold)", fontWeight: 600, fontSize: "1.125rem" }}>
                    218-505-0788
                  </a>
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
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form id="contactForm" action="/api/contact.php" method="POST">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input type="text" name="fullName" id="fullName" required autoComplete="name" placeholder="Full name" minLength="1" maxLength="100" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" name="email" id="email" required autoComplete="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" name="phone" id="phone" required autoComplete="tel" placeholder="(555) 123-4567" minLength="10" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4" placeholder="Tell us about what you're looking for..." />
              </div>
              <div className="consent-group">
                <label>
                  <input type="checkbox" name="consent" required defaultChecked value="on" />
                  <span>
                    I agree to receive communications from Kash Automotive Group LLC.{" "}
                    <small>
                      <a href="https://kandeautosales.com/privacy.php" target="_blank">
                        Privacy Policy
                      </a>
                    </small>
                  </span>
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Message
                <ArrowIcon />
              </button>
              <p className="form-note">We typically respond within 24 hours</p>
            </form>
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
              <img src={logoAsset.src} alt="Kash Automotive Group LLC" className="footer-logo-image" style={{ height: 150 }} />
            </a>
            <p />
            <div className="footer-social" />
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li>
                <a href="https://kandeautosales.com/">Home</a>
              </li>
              <li>
                <a href="https://kandeautosales.com/inventory.php">Inventory</a>
              </li>
              <li>
                <a href="https://kandeautosales.com/about.php">About Us</a>
              </li>
              <li>
                <a href="https://kandeautosales.com/shipping.php">Shipping</a>
              </li>
              <li>
                <a href="https://kandeautosales.com/sell.php">Sell Your Car</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul className="footer-links">
              <li>
                <a href="https://kandeautosales.com/contact.php">Contact Us</a>
              </li>
              <li>
                <a href="https://kandeautosales.com/shipping.php#faq">Shipping FAQ</a>
              </li>
              <li>
                <a href="https://kandeautosales.com/privacy.php">Privacy Policy</a>
              </li>
              <li>
                <a href="https://kandeautosales.com/terms.php">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <LocationIcon />
              <span>
                3595 Buckhead Loop NE
                <br />
                Atlanta, GA 31126
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
          <p className="footer-copyright">© 2026 Kash Automotive Group LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <main role="main">
        <Hero />
        <StatsBar />
        <FeaturedVehicles />
        <StorySection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <button className="back-to-top" id="backToTop" aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}
