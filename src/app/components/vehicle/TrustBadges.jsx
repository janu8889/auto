"use client";

import {ShieldIcon} from "./icons"; // dacă vrei separat

export default function TrustBadges() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0.75rem",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      {/* Badge 1 */}
      <div
        className="trust-badge"
        style={{ padding: "0.625rem 0.75rem", gap: "0.5rem" }}
      >
        <ShieldIcon style={{ width: 18, height: 18, minWidth: 18 }} />
        <div>
          <span
            style={{
              fontSize: "0.8125rem",
              display: "block",
              lineHeight: 1.2,
            }}
          >
            No Hidden Fees
          </span>
          <span style={{ fontSize: "0.6875rem", lineHeight: 1.2 }}>
            All fees included
          </span>
        </div>
      </div>

      {/* Badge 2 */}
      <div
        className="trust-badge"
        style={{ padding: "0.625rem 0.75rem", gap: "0.5rem" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ width: 18, height: 18, minWidth: 18 }}
        >
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>

        <div>
          <span
            style={{
              fontSize: "0.8125rem",
              display: "block",
              lineHeight: 1.2,
            }}
          >
            Nationwide Shipping
          </span>
          <span style={{ fontSize: "0.6875rem", lineHeight: 1.2 }}>
            All 50 states
          </span>
        </div>
      </div>
    </div>
  );
}