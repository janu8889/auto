const stats = [
  ["18+", "Years Experience"],
  ["500+", "Vehicles Delivered"],
  ["50", "State Shipping"],
  ["5★", "Client Rated"],
];

export default function StatsSection() {
  return (
    <section className="stats-bar">
      <div className="stats-container">
        {stats.map(([number, label]) => (
          <div className="stat-item" key={label}>
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
