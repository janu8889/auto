const stats = [
  ["12+", "Years in Business"],
  ["300+", "Happy Customers"],
  ["50", "States Served"],
  ["100%", "Satisfaction Focus"],
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-container reveal revealed">
        {stats.map(([value, label]) => (
          <div className="stat-item" key={label}>
            <div className="stat-number">{value}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}