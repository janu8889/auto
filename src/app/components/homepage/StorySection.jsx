/* eslint-disable @next/next/no-img-element */

import showroomAsset from "../../homepage-assets/showroom.jpg";

const features = [
  { label: "Verified History", icon: "shield" },
  { label: "Detailed Photos", icon: "image" },
  { label: "Nationwide Shipping", icon: "truck" },
  { label: "Expert Guidance", icon: "users" },
];

function FeatureIcon({ type }) {
  const iconStyle = { width: 20, height: 20 };

  if (type === "image") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={iconStyle}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    );
  }

  if (type === "truck") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={iconStyle}>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={iconStyle}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={iconStyle}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function StorySection() {
  return (
    <section style={{ padding: 0, background: "#1e293b", overflowX: "hidden", }}>
      <div className="story-grid">

        {/* IMAGE */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          maxWidth: "100%",
        }}
      >
        <img
          src={showroomAsset.src}
          alt="Showroom"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block", // 👈 elimină spații ghost
          }}
          loading="lazy"
        />
        </div>

        {/* CONTENT */}
        <div style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span className="section-tag" style={{ textAlign: "left" }}>
            Excellence
          </span>

          <h2 className="section-title" style={{ textAlign: "left" }}>
            Quality Vehicles You Can Trust
          </h2>

          <div className="section-line" style={{ margin: "0 0 2rem 0" }} />

          <p style={{ fontSize: "1.5rem", color: "#f8fafc", fontStyle: "italic", marginBottom: "1.5rem" }}>
            “Reliable vehicles for everyday driving.”
          </p>

          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
            For over 7 years, we have helped drivers find dependable vehicles at competitive prices.
          </p>

          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.9, marginBottom: "2rem" }}>
            Every vehicle tells a story. Our commitment is to connect people with the right car.
          </p>

          {/* FEATURES */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {features.map((feature) => (
              <div key={feature.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(201,169,98,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FeatureIcon type={feature.icon} />
                </div>
                <span style={{ color: "var(--color-text)" }}>{feature.label}</span>
              </div>
            ))}
          </div>

          <a href="/about" className="btn btn-outline" style={{ width: "fit-content" }}>
            Learn Our Story
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}