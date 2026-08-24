const confidencePoints = [
  {
    number: "01",
    title: "Buy with confidence",
    description: "Market-based pricing.",
  },
  {
    number: "02",
    title: "Drive with confidence",
    description: "Enjoy a 60 day / 3,000 mile limited warranty.",
  },
  {
    number: "03",
    title: "Commit with confidence",
    description: "3 day / 250 mile returns, no questions asked.",
  },
];

export default function ConfidenceSection() {
  return (
    <section className="confidence-section">
      <div className="container">
        <div className="section-header reveal revealed">
          <span className="section-tag">Peace of mind</span>
          <h2 className="section-title">BUY WITH CONFIDENCE</h2>
          <div className="section-line" />
        </div>

        <div className="confidence-grid stagger-children revealed">
          {confidencePoints.map((point) => (
            <article className="confidence-card" key={point.number}>
              <span className="confidence-number">{point.number}</span>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
