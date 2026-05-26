// components/shipping/ProcessSection.jsx

function ProcessSection({ processSteps }) {
  return (
    <section
      className="section-dark"
      style={{ padding: "var(--section-padding) 2rem" }}
    >
      <div className="container">
        <div className="section-header reveal revealed">
          <span className="section-tag">The Process</span>

          <h2 className="section-title">How It Works</h2>

          <div className="section-line" />
        </div>

        <div
          className="stagger-children revealed"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {processSteps.map(([number, title, text]) => (
            <div key={title} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  border: "2px solid var(--color-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  color: "var(--color-gold)",
                }}
              >
                {number}
              </div>

              <h4
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "0.5rem",
                }}
              >
                {title}
              </h4>

              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;