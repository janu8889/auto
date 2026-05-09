export default function PurchasePage() {
  return (
    <div className="homepage">
      <main>
        <header className="page-header detail-header">
          <div className="container">
            <span className="section-tag">Home / Inventory / Purchase</span>
            <h1 className="section-title">Purchase 2023 Ford F-150 Raptor Hennessey VelociRaptor 600</h1>
            <p className="section-subtitle">$65,000</p>
          </div>
        </header>

        <section>
          <div className="container purchase-grid">
            <aside className="purchase-summary">
              <img src="/info-pages/purchase-01.jpg" alt="2023 Ford F-150 Raptor Hennessey VelociRaptor 600" />
              <h2>Complete Your Purchase</h2>
              <p>After submission, you will receive an invoice via email with payment instructions and documents to sign online.</p>
            </aside>

            <div className="contact-form">
              <h3>Personal Information</h3>
              <form>
                <div className="form-group"><label htmlFor="name">Full Name (as shown on ID) *</label><input id="name" placeholder="John Doe" required /></div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="email">Email Address *</label><input id="email" type="email" placeholder="john@example.com" required /></div>
                  <div className="form-group"><label htmlFor="phone">Phone Number *</label><input id="phone" placeholder="(555) 123-4567" required /></div>
                </div>
                <h3>Shipping Address</h3>
                <div className="form-group"><label htmlFor="street">Street Address *</label><input id="street" placeholder="123 Main Street" required /></div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="city">City *</label><input id="city" placeholder="Hermantown" required /></div>
                  <div className="form-group"><label htmlFor="state">State *</label><select id="state" required><option>Select</option><option>Minnesota</option><option>California</option><option>Florida</option><option>Texas</option><option>New York</option></select></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="zip">ZIP *</label><input id="zip" placeholder="55811" required /></div>
                  <div className="form-group"><label htmlFor="method">Delivery Method</label><select id="method"><option>Nationwide Shipping</option><option>Local Pickup</option></select></div>
                </div>
                <div className="consent-group"><label><input type="checkbox" required defaultChecked /><span>I understand this request begins the purchase process and does not complete payment automatically.</span></label></div>
                <button className="btn btn-primary btn-block" type="submit">Submit Purchase Request</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
