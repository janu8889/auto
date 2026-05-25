import Link from "next/link";

function CtaSection() {
  return (
    <section className="section-dark" style={{ padding: "5rem 2rem", textAlign: "center" }}>
      <div className="container reveal revealed">
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem,4vw,2.5rem)",
            color: "#ffffff",
            marginBottom: "1rem",
          }}
        >
          Ready to Find Your Vehicle?
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "2rem",
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Whether you&apos;re a seasoned buyer or exploring your first purchase, we&apos;re here to guide you.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/inventory" className="btn btn-primary btn-lg">
            Browse Inventory
          </Link>

          <Link href="/contact" className="btn btn-outline-light btn-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;