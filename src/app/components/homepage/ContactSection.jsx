"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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

export default function ContactSection() {
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
      message: formData.get("message"),
      consent: formData.get("consent"),
    };

    try {
      const res = await fetch("/api/contact", {
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
      style={{
        background: "var(--color-bg-primary)",
      }}
    >
      <div className="container">
        <SectionHeader
          tag="Contact"
          title="Start Your Deal Today"
          subtitle="Tell us what you're looking for and we'll handle the rest — fast, simple, and transparent."
        />

        <div className="contact-grid reveal revealed">
          {/* INFO SIDE */}
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <LocationIcon />
              </div>
              <div className="contact-item-content">
                <h4>Location</h4>
                <p>
                  3595 Buckhead Loop NE
                  <br />
                  Atlanta, GA 31126
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <PhoneIcon />
              </div>
              <div className="contact-item-content">
                <h4>Phone</h4>
                <p>
                  <a
                    href="tel:2185050788"
                    style={{
                      color: "var(--color-gold)",
                      fontWeight: 600,
                      fontSize: "1.125rem",
                    }}
                  >
                    218-505-0788
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <ClockIcon />
              </div>
              <div className="contact-item-content">
                <h4>Working Hours</h4>
                <p>Monday – Friday: 9AM – 5PM</p>
                <p>Saturday: By appointment</p>
              </div>
            </div>

            <div className="contact-note">
              <p>
                Full range of vehicles sourced across the U.S., professionally handled and delivered quickly to your location.
              </p>
            </div>
          </div>

          {/* FORM SIDE */}
          <div className="contact-form">
            <h3>Request a Quote</h3>

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
                ✅ Message sent! We will contact you soon.
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

            <form onSubmit={handleSubmit}>
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

              <div className="form-group">
                <label htmlFor="message">What are you looking for?</label>
                <textarea name="message" id="message" rows="4" />
              </div>

              <div className="consent-group">
                <label>
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    defaultChecked
                  />
                  <span>
                    I agree to be contacted by Kash Automotive Group LLC.
                    <small>
                      {" "}
                      <Link href="/privacy">Privacy Policy</Link>
                    </small>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading ? "Sending..." : "Get My Offer"}
                {!loading && <ArrowIcon />}
              </button>

              <p className="form-note">
                Response time: usually under 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}