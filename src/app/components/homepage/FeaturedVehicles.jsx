import Link from "next/link";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
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

export default function FeaturedVehicles({ vehicles }) {
  return (
    <section
      id="featured"
      style={{
        padding: "var(--section-padding) 2rem",
        background: "var(--color-bg-primary)",
      }}
    >
      <div className="container">
        <SectionHeader
          tag="Featured"
          title="Premium Vehicles"
          subtitle="Find the right vehicle for your lifestyle"
        />

        <div className="vehicles-grid stagger-children revealed">
          {vehicles.map((vehicle) => (
            <Link
              href={`/inventory/${vehicle.slug}`}
              className="vehicle-card"
              key={vehicle.title}
            >
              <div className="vehicle-card-image">
                <img
                  src={vehicle.image.src}
                  alt={vehicle.title}
                  loading="lazy"
                />
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
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="/inventory" className="btn btn-secondary btn-lg">
            View All 22 Vehicles
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}