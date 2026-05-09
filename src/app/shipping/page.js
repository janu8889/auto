import { PageHeader } from "../components/KandeShared";

const options = [
  ["Enclosed Transport", "Premium protection for your vehicle", ["Full weather protection", "$500K+ insurance coverage", "GPS tracking included", "Soft-tie down system"], "Starting at $1.00/mile"],
  ["Open Transport", "Economical nationwide delivery", ["Cost-effective option", "Full insurance coverage", "Flexible scheduling", "Professional handlers"], "Starting at $0.85/mile"],
  ["Door-to-Door", "Maximum convenience", ["Pickup at any location", "Delivery to your home", "Inspection on arrival", "Enclosed or open option"], "Custom Quote"],
];

export default function ShippingPage() {
  return (
    <div className="homepage">
      <main>
        <PageHeader tag="Nationwide Delivery" title="White-Glove Transport" subtitle="Professional enclosed shipping to all 50 states" />

        <section className="section-dark">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Our Services</span>
              <h2 className="section-title">Transport Options</h2>
              <div className="section-line" />
              <p className="section-subtitle">Choose the shipping method that best fits your needs</p>
            </div>
            <div className="feature-grid">
              {options.map(([title, subtitle, items, price]) => (
                <article className="feature-card" key={title}>
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                  <ul>
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <strong>{price}</strong>
                  <a href="/contact" className="btn btn-primary">Get Quote</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="container narrow">
            <div className="section-header">
              <span className="section-tag">The Process</span>
              <h2 className="section-title">How It Works</h2>
              <div className="section-line" />
            </div>
            <div className="process-list">
              <div><span>1</span><h3>Request Quote</h3><p>Tell us your pickup and delivery locations.</p></div>
              <div><span>2</span><h3>Schedule</h3><p>Choose your pickup date and transport type.</p></div>
              <div><span>3</span><h3>Delivery</h3><p>Your vehicle arrives safely with inspection on arrival.</p></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
