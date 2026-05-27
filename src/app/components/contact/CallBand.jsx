// components/contact/CallBand.jsx

function CallBand({PhoneIcon}) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "calc(var(--nav-height) + 3rem) 2rem 3rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: 2,
          marginBottom: "0.75rem",
        }}
      >
        Call Us Directly
      </p>

      <a
        href="tel:000-000-0000"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.75rem,4vw,2.5rem)",
          color: "var(--color-gold)",
          transition: "opacity 0.3s",
        }}
      >
        <PhoneIcon style={{ width: 32, height: 32 }} />
        000-000-0000
      </a>
    </div>
  );
}

export default CallBand;