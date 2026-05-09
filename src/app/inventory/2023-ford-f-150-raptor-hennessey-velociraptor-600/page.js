import { ArrowIcon } from "../../components/KandeShared";

const specs = [
  ["Mileage", "15,803 mi"],
  ["Engine", "Twin-Turbocharged 3.5-Liter V6"],
  ["Transmission", "Automatic"],
  ["Exterior Color", "Agate Black Metallic Paint"],
  ["Interior Color", "Black Leather Upholstery"],
  ["Title Status", "Clean"],
];

const thumbs = Array.from({ length: 6 }, (_, index) => `/info-pages/2023-ford-f-150-raptor-hennessey-velociraptor-60-${String(index + 1).padStart(2, "0")}.jpg`);

export default function VehicleDetailPage() {
  return (
    <div className="homepage">
      <main>
        <header className="page-header detail-header">
          <div className="container">
            <a href="/inventory" className="back-link">Back to Inventory</a>
            <h1 className="section-title">2023 Ford F-150 Raptor Hennessey VelociRaptor 600</h1>
            <p className="section-subtitle">No Hidden Fees · Nationwide Shipping · All fees included</p>
          </div>
        </header>

        <section>
          <div className="container detail-grid">
            <div className="vehicle-gallery">
              <img className="gallery-main" src="/info-pages/2023-ford-f-150-raptor-hennessey-velociraptor-60-01.jpg" alt="2023 Ford F-150 Raptor Hennessey VelociRaptor 600" />
              <div className="gallery-thumbs">
                {thumbs.map((thumb, index) => (
                  <img src={thumb} alt={`Thumbnail ${index + 1}`} key={thumb} />
                ))}
              </div>
            </div>

            <aside className="vehicle-summary">
              <h2>$65,000</h2>
              <dl>
                {specs.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <a href="/contact" className="btn btn-outline-light btn-block">Inquiry</a>
              <a href="tel:2185050788" className="btn btn-outline-light btn-block">Call Now</a>
              <a href="/purchase" className="btn btn-primary btn-block">Buy Now - Save $3,250 <ArrowIcon /></a>
              <p className="form-note">5% online discount + free shipping</p>
            </aside>
          </div>
        </section>

        <section className="section-dark">
          <div className="container narrow">
            <span className="section-tag">Overview</span>
            <h2 className="section-title">About This Ford F-150 Raptor</h2>
            <div className="section-line" />
            <p>
              This 2023 Ford F-150 Raptor Hennessey VelociRaptor 600 is powered by a Twin-Turbocharged 3.5-Liter V6
              paired with an automatic transmission, delivering enhanced power and off-road capability, finished in
              Agate Black Metallic with Black leather upholstery.
            </p>
            <p>
              Equipped with the Hennessey VelociRaptor 600 package including ECU tuning, upgraded induction components,
              intercooler improvements, a dual-range transfer case, electronically locking rear differential, lift
              components, Hennessey wheels, panoramic sunroof, SYNC 4 navigation, and Bang & Olufsen sound.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
