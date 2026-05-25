// components/shipping/QuoteSection.jsx

function QuoteSection({ ArrowIcon }) {
  return (
    <section
      id="quote"
      style={{
        padding: "var(--section-padding) 2rem",
        background: "var(--color-white)",
      }}
    >
      <div className="container" style={{ maxWidth: 700 }}>
        <div className="section-header reveal revealed">
          <span className="section-tag">Free Quote</span>

          <h2 className="section-title">
            Get Your Shipping Estimate
          </h2>

          <div className="section-line" />
        </div>

        <div
          className="contact-form reveal revealed"
          style={{ boxShadow: "var(--shadow-lg)" }}
        >
          <form
            id="shippingQuoteForm"
            action="/api/contact.php"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>

              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                placeholder="Full name"
                minLength={1}
                maxLength={100}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone *</label>

                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  placeholder="(555) 123-4567"
                  minLength={10}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pickupZip">
                  Pickup ZIP Code *
                </label>

                <input
                  type="text"
                  name="pickupZip"
                  id="pickupZip"
                  required
                  placeholder="10001"
                />
              </div>

              <div className="form-group">
                <label htmlFor="deliveryZip">
                  Delivery ZIP Code *
                </label>

                <input
                  type="text"
                  name="deliveryZip"
                  id="deliveryZip"
                  required
                  placeholder="90210"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="vehicleInfo">
                Vehicle Information
              </label>

              <input
                type="text"
                name="vehicleInfo"
                id="vehicleInfo"
                placeholder="Year, Make, Model (e.g., 1967 Ford Mustang)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="transportType">
                Transport Type
              </label>

              <select
                name="transportType"
                id="transportType"
                defaultValue="Enclosed"
              >
                <option value="Enclosed">
                  Enclosed (Recommended)
                </option>

                <option value="Open">Open</option>

                <option value="Not Sure">
                  Not Sure - Please Advise
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Additional Notes
              </label>

              <textarea
                name="message"
                id="message"
                rows={3}
                placeholder="Any special requirements or questions?"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block btn-lg"
            >
              Request Quote

              <ArrowIcon />
            </button>

            <p className="form-note">
              We typically respond with quotes within 24 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;