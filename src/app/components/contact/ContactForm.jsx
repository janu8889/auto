"use client";

import { useState } from "react";
import Link from "next/link";

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ContactForm({ subjectOptions }) {
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
      subject: formData.get("subject"),
      message: formData.get("message"),
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
    <div className="contact-form">
      <h3>Send Us a Message</h3>

      {/* SUCCESS MESSAGE */}
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
          ✅ Thank you! We’ve received your message and will contact you soon.
        </div>
      )}

      {/* ERROR MESSAGE */}
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
            <label htmlFor="email">Email Address *</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" name="phone" id="phone" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select name="subject" id="subject" defaultValue="General Inquiry">
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
          />
        </div>

        <div className="consent-group">
          <label>
            <input type="checkbox" required defaultChecked />
            <span>
              I consent to being contacted.{" "}
              <small>
                <Link href="/privacy">Privacy Policy</Link>
              </small>
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block btn-lg"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
          {!loading && <ArrowIcon />}
        </button>

        <p className="form-note">
          We aim to respond within 24 hours
        </p>
      </form>
    </div>
  );
}

export default ContactForm;