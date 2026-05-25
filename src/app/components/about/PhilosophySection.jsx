const values = [
  {
    title: "Integrity",
    icon: "shield",
    titleColor: "#f8fafc",
    text: "Complete transparency in every vehicle's history, condition, and provenance. No surprises, only trust.",
  },
  {
    title: "Excellence",
    icon: "award",
    titleColor: "var(--color-navy)",
    text: "Only the finest vehicles earn a place in our inventory. We accept nothing less than exceptional.",
  },
  {
    title: "Relationship",
    icon: "users",
    titleColor: "#f8fafc",
    text: "Building lasting connections with customers who share our passion for automotive excellence.",
  },
];

function ValueIcon({ type }) {
  const style = { width: 28, height: 28 };

  if (type === "award") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function PhilosophySection() {
  return (
    <section style={{ padding: "var(--section-padding) 2rem", background: "var(--color-bg-primary)" }}>
      <div className="container">
        <div className="section-header reveal revealed">
          <span className="section-tag">Our Philosophy</span>
          <h2 className="section-title">Guiding Principles</h2>
          <div className="section-line" />
          <p className="section-subtitle">The values that define every interaction and transaction</p>
        </div>

        <div className="stagger-children revealed" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem", maxWidth: 1100, margin: "0 auto" }}>
          {values.map((value) => (
            <div key={value.title} className="value-card" style={{ background: "#2c3e50", padding: "2.5rem", borderRadius: "var(--radius-xl)", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", textAlign: "center", transition: "all var(--transition-smooth)", border: "1px solid #475569" }}>
              <div style={{ width: 64, height: 64, background: "rgba(201,169,98,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <ValueIcon type={value.icon} />
              </div>

              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: value.titleColor, marginBottom: "0.75rem" }}>
                {value.title}
              </h3>

              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, fontSize: "0.9375rem" }}>
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}