export default function StatsBar({ stats }) {
  return (
    <div className="stats-bar">
      <div className="stats-container reveal revealed">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}