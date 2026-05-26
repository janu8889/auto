"use client";

import { useState } from "react";
import { PhoneIcon, MailIcon, ArrowRightIcon, ShieldIcon } from "./icons";

function PhoneIconSmall(props) {
  return <PhoneIcon {...props} style={{ width: 14, height: 14, ...props.style }} />;
}

function MailIconSmall(props) {
  return <MailIcon {...props} style={{ width: 14, height: 14, ...props.style }} />;
}

function InquiryForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error"

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		setStatus("");

		try {
			const formData = new FormData(e.target);

			const res = await fetch("/api/inquiry", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					fullName: formData.get("fullName"),
					email: formData.get("email"),
					phone: formData.get("phone"),
					subject: "Vehicle Inquiry",
					message: formData.get("message"),
				}),
			});

			const data = await res.json();

			if (!res.ok || !data.ok) {
				throw new Error(data?.error || "Request failed");
			}

			setStatus("success");
			e.target.reset();
		} catch (err) {
			setStatus("error");
		} finally {
			setLoading(false);
		}
};

  return (
    <div className="vehicle-inquiry" id="inquirySection">
      <h3>Interested in This Vehicle?</h3>

      <p className="inquiry-subtitle">
        Complete the form below and we&apos;ll reach out promptly with more information.
      </p>

      <form id="vehicleInquiryForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inqFullName">Full Name *</label>
          <input
            type="text"
            name="fullName"
            id="inqFullName"
            required
            autoComplete="name"
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="inqEmail">
              <MailIconSmall style={{ marginRight: 4, verticalAlign: "middle" }} />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              id="inqEmail"
              required
              autoComplete="email"
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="inqPhone">
              <PhoneIconSmall style={{ marginRight: 4, verticalAlign: "middle" }} />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              id="inqPhone"
              required
              autoComplete="tel"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inqMessage">Message (Optional)</label>
          <textarea
            name="message"
            id="inqMessage"
            rows={5}
            placeholder="Tell us what you'd like to know about this vehicle..."
          />
        </div>

        <div className="consent-group">
          <label>
            <input type="checkbox" name="consent" required defaultChecked value="on" />
            <span>I agree to receive communications about this vehicle and related offerings.</span>
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block btn-lg"
          style={{ marginTop: "1rem", opacity: loading ? 0.7 : 1 }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Inquiry"}
          <ArrowRightIcon style={{ width: 18, height: 18 }} />
        </button>

        {/* SUCCESS / ERROR exact same pattern */}
        {status === "success" && (
          <p style={{ color: "#22c55e", marginTop: "10px" }}>
            Message sent successfully. We&apos;ll get back to you shortly.
          </p>
        )}

        {status === "error" && (
          <p style={{ color: "#ef4444", marginTop: "10px" }}>
            Something went wrong. Please try again.
          </p>
        )}

        <p className="form-note" style={{ marginTop: "1rem", color: "#a1a1aa" }}>
          <ShieldIcon style={{ width: 14, height: 14, display: "inline-block", verticalAlign: "middle", marginRight: 4 }} />
          Your information is secure. We&apos;ll respond within 24 hours.
        </p>
      </form>
    </div>
  );
}

export default InquiryForm;