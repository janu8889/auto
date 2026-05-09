const vehicles = [
  {
    year: "2023",
    title: "Ford F-150 Raptor Hennessey VelociRaptor 600",
    specs: "4WD | 600 HP | Premium Performance Package",
    price: "$129,995",
    image: "/homepage/vehicle-raptor.jpg",
  },
  {
    year: "2024",
    title: "GMC Sierra 3500HD AT4",
    specs: "Diesel | Crew Cab | Heavy Duty Capability",
    price: "$89,995",
    image: "/homepage/vehicle-sierra.jpg",
  },
  {
    year: "2026",
    title: "Ford F-450 Super Duty XLT",
    specs: "Commercial Grade | Super Duty | Built to Tow",
    price: "$99,995",
    image: "/homepage/vehicle-f450.jpg",
  },
];

const testimonials = [
  {
    name: "Tyler Brooks",
    vehicle: "Ford F-150 Raptor",
    image: "/homepage/avatar-tyler.jpg",
    text: "The whole process was polished from the first call to delivery. The truck was exactly as described.",
  },
  {
    name: "Jason Miller",
    vehicle: "GMC Sierra 3500HD",
    image: "/homepage/avatar-jason.jpg",
    text: "K&E made buying out of state simple. Clear communication, honest details, and fast shipping.",
  },
  {
    name: "Chris Alvarez",
    vehicle: "Ford Super Duty",
    image: "/homepage/avatar-chris.jpg",
    text: "A premium inventory and a team that actually knows the vehicles. I would buy from them again.",
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

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="homepage">
      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-content">
            <span className="hero-tag">Premium Automobiles</span>
            <h1 className="hero-title">K&E Auto Inc</h1>
            <p className="hero-description">
              Discover a curated selection of modern performance trucks and premium vehicles in Hermantown, MN.
            </p>
            <div className="hero-buttons">
              <a href="#inventory" className="btn btn-primary btn-lg">
                View Inventory <ArrowIcon />
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg">
                Contact Us
              </a>
            </div>
          </div>
          <a href="#inventory" className="scroll-indicator">
            <span>Scroll</span>
            <span className="scroll-indicator-icon" />
          </a>
        </section>

        <section className="stats-bar">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Vehicles Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50</div>
              <div className="stat-label">State Shipping</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5★</div>
              <div className="stat-label">Client Rated</div>
            </div>
          </div>
        </section>

        <section className="section-dark" id="inventory">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Featured Inventory</span>
              <h2 className="section-title">Performance Ready</h2>
              <div className="section-line" />
              <p className="section-subtitle">
                Hand-selected vehicles with the presence, capability, and condition our clients expect.
              </p>
            </div>

            <div className="vehicles-grid">
              {vehicles.map((vehicle) => (
                <article className="vehicle-card" key={vehicle.title}>
                  <div className="vehicle-card-image">
                    <img src={vehicle.image} alt={vehicle.title} />
                  </div>
                  <div className="vehicle-card-body">
                    <p className="vehicle-year">{vehicle.year}</p>
                    <h3 className="vehicle-title">{vehicle.title}</h3>
                    <p className="vehicle-specs">{vehicle.specs}</p>
                    <div className="vehicle-card-footer">
                      <strong className="vehicle-price">{vehicle.price}</strong>
                      <a href="#contact" className="vehicle-card-btn" aria-label={`Ask about ${vehicle.title}`}>
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-grid">
            <div className="story-image">
              <img src="/homepage/showroom.jpg" alt="K&E Auto Inc showroom" />
            </div>
            <div className="story-content">
              <span className="section-tag">Excellence</span>
              <h2 className="section-title">Modern Luxury Defined</h2>
              <div className="section-line" />
              <p className="story-quote">&ldquo;Uniting performance with prestige.&rdquo;</p>
              <p>
                For over 18 years, K&E Auto Inc has been the premier destination for drivers seeking the pinnacle of
                automotive engineering. Our inventory features hand-selected modern vehicles that represent the ultimate
                in performance, technology, and design.
              </p>
              <p>
                Every vehicle tells a story. Our commitment is to preserve these stories while connecting passionate
                enthusiasts with the cars and trucks of their dreams.
              </p>
              <div className="story-features">
                <span>Verified History</span>
                <span>Nationwide Shipping</span>
                <span>Premium Selection</span>
                <span>Personal Support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-dark" id="shipping">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Client Feedback</span>
              <h2 className="section-title">Trusted Nationwide</h2>
              <div className="section-line" />
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <div className="testimonial-rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.vehicle}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
      </main>

    </div>
  );
}
