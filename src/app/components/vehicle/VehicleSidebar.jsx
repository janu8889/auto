"use client";
import Link from "next/link";
import { useState } from "react";

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function VehicleSidebar({ specs }) {
  return (
    <div className="vehicle-sidebar">
      <div className="vehicle-sidebar-header">
        <p className="vehicle-sidebar-year">2023</p>
        <h1 className="vehicle-sidebar-title">
          Ford F-150 Raptor Hennessey VelociRaptor 600
        </h1>
        <p className="vehicle-sidebar-price">$65,000</p>
      </div>

      <div className="specs-table">
        {specs.map(([label, value]) => (
          <div className="spec-row" key={label}>
            <span className="spec-label">{label}</span>
            <span className="spec-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="vehicle-cta">
        <div className="cta-buttons-row">
          <a href="#inquirySection" className="btn btn-primary btn-md">
            <MailIcon style={{ width: 16, height: 16 }} />
            Inquiry
          </a>

          <a href="tel:2185050788" className="btn btn-secondary btn-md">
            <PhoneIcon style={{ width: 16, height: 16 }} />
            Call Now
          </a>
        </div>

        <Link
          href="/purchase/43rsfdsddas4"
          className="btn btn-buy-now btn-lg"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}>
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>

          <span className="buy-now-content">
            <span className="buy-now-main">Buy Now - Save $3,250</span>
            <span className="buy-now-promo">5% online discount + free shipping</span>
          </span>
        </Link>

        <p className="cta-note">No obligation • Quick response guaranteed</p>
      </div>
    </div>
  );
}