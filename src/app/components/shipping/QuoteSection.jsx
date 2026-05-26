"use client";

import { useState } from "react";

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function QuoteSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const formData = new FormData(e.target);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      pickupZip: formData.get("pickupZip"),
      deliveryZip: formData.get("deliveryZip"),
      vehicleInfo: formData.get("vehicleInfo"),
      transportType: formData.get("transportType"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/shipping", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.error || "Something went wrong");
      }

      setSuccess(true);
      e.target.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="quote"
      style={{
        background: "var(--color-white)",
      }}
    >
      <div className="container" style={{ maxWidth: 700 }}>
        <div className="section-header reveal revealed">
          <span className="section-tag">Free Quote</span>

          <h2 className="section-title">Get Your Shipping Estimate</h2>

          <div className="section-line" />
        </div>

        <div
          className="contact-form reveal revealed"
          style={{ boxShadow: "var(--shadow-lg)" }}
        >
          {success && (
            <div
              style={{
                padding: "1rem",
                marginBottom: "1rem",
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.4)",
                color: "#34D399",
                borderRadius: 12,
              }}
            >
              ✅ Quote request sent! We will contact you soon.
            </div>
          )}

          {error && (
            <div
              style={{
                padding: "1rem",
                marginBottom: "1rem",
                background: "rgba(239,68,68,0.15)",
                border: "1px solid rgba(239,68,68,0.4)",
                color: "#F87171",
                borderRadius: 12,
              }}
            >
              ❌ {error}
            </div>
          )}

          <form id="shippingQuoteForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" name="fullName" id="fullName" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" id="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input type="tel" name="phone" id="phone" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pickupZip">Pickup ZIP Code *</label>
                <input type="text" name="pickupZip" id="pickupZip" required />
              </div>

              <div className="form-group">
                <label htmlFor="deliveryZip">Delivery ZIP Code *</label>
                <input
                  type="text"
                  name="deliveryZip"
                  id="deliveryZip"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="vehicleInfo">Vehicle Information</label>
              <input type="text" name="vehicleInfo" id="vehicleInfo" />
            </div>

            <div className="form-group">
              <label htmlFor="transportType">Transport Type</label>
              <select
                name="transportType"
                id="transportType"
                defaultValue="Enclosed"
              >
                <option value="Enclosed">Enclosed (Recommended)</option>
                <option value="Open">Open</option>
                <option value="Not Sure">Not Sure - Please Advise</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Notes</label>
              <textarea name="message" id="message" rows={3} />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block btn-lg"
              disabled={loading}
            >
              {loading ? "Sending..." : "Request Quote"}
              {!loading && <ArrowIcon />}
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