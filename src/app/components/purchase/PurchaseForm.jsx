"use client";

import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const states = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"],
  ["CA", "California"], ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"],
  ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"], ["ID", "Idaho"],
  ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"], ["KS", "Kansas"],
  ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"], ["MD", "Maryland"],
  ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"], ["MS", "Mississippi"],
  ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"],
  ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"], ["NY", "New York"],
  ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"], ["OK", "Oklahoma"],
  ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"],
  ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"],
  ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"], ["WV", "West Virginia"],
  ["WI", "Wisconsin"], ["WY", "Wyoming"], ["DC", "Washington DC"],
];

export default function PurchaseForm({ id }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const formData = new FormData(e.target);
      formData.append("vehicleId", id);
      
      const res = await fetch("/api/purchase", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setSuccess(true);
      e.target.reset();
      setFileUploaded(false);
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    setFileUploaded(!!file);
  }

  return (
    <div className="purchase-form-container" id="purchaseFormContainer">

      <div className="purchase-form-header">
        <h1>Complete Your Purchase</h1>
        <p>
          Please provide your information below. After submission, you will receive an invoice via email with payment instructions and documents to sign online.
        </p>
      </div>

      {success && (
        <div className="alert alert-success">
          Purchase request sent successfully
        </div>
      )}

      {error && (
        <div className="alert alert-error" id="formError">
          {error}
        </div>
      )}

      <form
        id="purchaseForm"
        className="purchase-form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="form-section">
          <h3>Personal Information</h3>

          <div className="form-group">
            <label htmlFor="full_name">Full Name (as shown on ID) *</label>
            <input type="text" name="full_name" id="full_name" required autoComplete="name" placeholder="John Doe" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" name="email" id="email" required autoComplete="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" name="phone" id="phone" required autoComplete="tel" placeholder="(555) 123-4567" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Shipping Address</h3>

          <div className="form-group">
            <label htmlFor="street">Street Address *</label>
            <input type="text" name="street" id="street" required autoComplete="street-address" placeholder="123 Main Street" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input type="text" name="city" id="city" required autoComplete="address-level2" placeholder="Hermantown" />
            </div>

            <div className="form-group form-group-small">
              <label htmlFor="state">State *</label>
              <select name="state" id="state" required defaultValue="">
                <option value="">Select</option>
                {states.map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>

            <div className="form-group form-group-small">
              <label htmlFor="zip">ZIP Code *</label>
              <input type="text" name="zip" id="zip" required />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Identity Verification</h3>

          <p className="form-section-note">
            Please upload a clear photo of the <strong>front of your Driver&apos;s License</strong> or government-issued ID.
          </p>

          <div className="form-group">
            <label htmlFor="id_document">Front of Driver&apos;s License / ID *</label>

            <div className="file-upload-wrapper">
              <input
                type="file"
                name="id_document"
                id="id_document"
                required
                accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,application/pdf"
                capture="environment"
                onChange={handleFileChange}
              />

              <div className="file-upload-box" id="fileUploadBox">
                <div className="file-upload-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>

                <p className="file-upload-text">
                  <span className="file-upload-btn">Choose File</span> or drag and drop{" "}
                  {fileUploaded && (
                    <span style={{ marginLeft: 8, color: "green", fontWeight: 600 }}>
                      ✔ Uploaded
                    </span>
                  )}
                </p>

                <p className="file-upload-hint">
                  Supports: JPG, PNG, GIF, WEBP, PDF (Max 10MB)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="consent-group purchase-consent">
          <label>
            <input type="checkbox" name="consent" required value="on" />
            <span>
              I confirm that the information provided is accurate and I authorize Kash Automotive Group LLC to contact me regarding this purchase. I understand that submitting this form is a non-binding expression of interest and does not constitute a final purchase agreement. I agree to the <Link href="/terms">Terms of Service</Link> and <Link href="/privacy"> Privacy Policy</Link>. 
            </span>
          </label>
        </div>

        <div className="alert alert-error" id="formError" style={{ display: "none" }} />

        <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={loading}>
          {loading ? "Processing..." : "Submit Purchase Request"}
        </button>

        <p className="form-note">
          Your information is encrypted and secure
        </p>
      </form>
    </div>
  );
}