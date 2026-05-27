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
              href={`/inventory/${vehicle._id}`}
              className="vehicle-card"
              key={vehicle._id}
            >
              <div className="vehicle-card-image">
                <img
                  src={vehicle.imgs?.[0]}
                  alt={vehicle.name}
                />
              </div>
            {console.log(vehicle._id)}

              <div className="vehicle-card-body">
                <p className="vehicle-year">{vehicle.year}</p>
                <h3 className="vehicle-title">{vehicle.name}</h3>
                <p className="vehicle-specs">{vehicle.mileage} miles - {vehicle.engine}</p>

                <div className="vehicle-card-footer">
                  <p className="vehicle-price">$ {vehicle.price}</p>

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