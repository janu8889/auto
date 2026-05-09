import { PageHeader } from "../components/KandeShared";

export default function SellPage() {
  return (
    <div className="homepage">
      <main>
        <PageHeader tag="Partner With Us" title="Sell Your Vehicle" subtitle="Reach qualified buyers through our trusted platform" />

        <section className="section-dark">
          <div className="container">
            <div className="feature-grid">
              <article className="feature-card"><h3>Qualified Buyers</h3><p>Access our network of serious buyers and automotive enthusiasts.</p></article>
              <article className="feature-card"><h3>Professional Photos</h3><p>We showcase your vehicle with premium presentation.</p></article>
              <article className="feature-card"><h3>Secure Process</h3><p>Transparent pricing and smooth transactions from start to finish.</p></article>
            </div>
          </div>
        </section>

        <section>
          <div className="container narrow">
            <div className="contact-form">
              <h3>Tell Us About Your Vehicle</h3>
              <form>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="year">Year *</label><input id="year" placeholder="1967" required /></div>
                  <div className="form-group"><label htmlFor="make">Make *</label><input id="make" placeholder="Ford" required /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="model">Model *</label><input id="model" placeholder="Mustang" required /></div>
                  <div className="form-group"><label htmlFor="mileage">Mileage</label><input id="mileage" placeholder="45000" /></div>
                </div>
                <div className="form-group"><label htmlFor="vin">VIN (optional)</label><input id="vin" placeholder="Vehicle Identification Number" /></div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="condition">Condition *</label><select id="condition" required><option>Select condition...</option><option>Concours/Show Quality</option><option>Excellent - Ready to show</option><option>Good - Minor flaws</option><option>Fair - Needs work</option></select></div>
                  <div className="form-group"><label htmlFor="price">Asking Price</label><input id="price" placeholder="$50,000" /></div>
                </div>
                <div className="form-group"><label htmlFor="description">Description</label><textarea id="description" rows="4" /></div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="name">Full Name *</label><input id="name" placeholder="Full name" required /></div>
                  <div className="form-group"><label htmlFor="email">Email *</label><input id="email" type="email" placeholder="john@example.com" required /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="phone">Phone *</label><input id="phone" placeholder="(555) 123-4567" required /></div>
                  <div className="form-group"><label htmlFor="location">Location</label><input id="location" placeholder="Los Angeles, CA" /></div>
                </div>
                <button className="btn btn-primary btn-block" type="submit">Submit Vehicle</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
