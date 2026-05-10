import { featuredVehicles } from "./homepageData";
import { ArrowIcon } from "./HomepageIcons";

export default function FeaturedInventorySection() {
  return (
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
          {featuredVehicles.map((vehicle) => (
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
  );
}
