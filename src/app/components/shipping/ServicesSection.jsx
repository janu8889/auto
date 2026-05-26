// components/shipping/ServicesSection.jsx

function ServicesSection({ services, ServiceIcon, CheckIcon }) {
  return (
    <section
      style={{
        background: "var(--color-bg-primary)",
      }}
    >
      <div className="container">
        <div className="section-header reveal revealed">
          <span className="section-tag">Our Services</span>

          <h2 className="section-title">Transport Options</h2>

          <div className="section-line" />

          <p className="section-subtitle">
            Choose the shipping method that best fits your needs
          </p>
        </div>

        <div
          className="stagger-children revealed shipping-grid"
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
              <div
                style={{
                  background: "var(--color-bg-secondary)",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
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

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.375rem",
                    color: "var(--color-text)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {service.title}
                </h3>

                <p style={{ color: "#CBD5E1", fontSize: "0.875rem" }}>
                  {service.subtitle}
                </p>
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
                        borderBottom:
                          index === service.features.length - 1
                            ? undefined
                            : "1px solid var(--color-border)",
                        color: "var(--color-text-secondary)",
                        fontSize: "0.9375rem",
                      }}
                    >
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    textAlign: "center",
                    color: "var(--color-gold)",
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.125rem",
                    marginBottom: "1rem",
                  }}
                >
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

export default ServicesSection;