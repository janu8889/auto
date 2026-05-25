export default function BeginningSection() {
  return (
    <section style={{ padding: "5rem 2rem", background: "#1e293b" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div className="reveal-left revealed">
          <span className="section-tag" style={{ textAlign: "left" }}>
            The Beginning
          </span>

          <h2 className="section-title" style={{ textAlign: "left" }}>
            A Passion Born of Purpose
          </h2>

          <div className="section-line" style={{ margin: "0 0 2rem 0" }} />

          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.375rem",
              color: "#f8fafc",
              fontStyle: "italic",
              marginBottom: "1.5rem",
              lineHeight: 1.5,
            }}
          >
            &quot;Every modern automobile represents innovation and excellence. Our mission is to connect you with your perfect vehicle.&quot;
          </p>

          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Founded in 2019, Kash Automotive Group LLC emerged from a deep-rooted passion for automotive excellence. What began as a
            personal vision quickly evolved into a trusted destination for drivers across the nation.
          </p>

          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.9 }}>
            Today, we continue that tradition, combining decades of expertise with an unwavering commitment to quality. Each
            vehicle in our inventory is meticulously vetted, ensuring that every purchase represents the very best in modern
            automotive excellence.
          </p>
        </div>
      </div>
    </section>
  );
}