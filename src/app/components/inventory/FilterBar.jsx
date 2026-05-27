export default function FilterBar({
  search,
  make,
  year,
  sort,
  onSearchChange,
  onMakeChange,
  onYearChange,
  onSortChange,
  makeOptions,
  yearOptions,
  sortOptions,
  SearchIcon,
}) {
  return (
    <div className="filter-bar reveal revealed">
      <div className="search-input-wrapper">
        <SearchIcon />

        <input
          type="text"
          placeholder="Search by make, model, year..."
          value={search}
          onChange={(e) => onSearchChange?.(e.target.value)} // ✅ FIX
        />
      </div>

      <div className="form-group" style={{ margin: 0 }}>
        <select value={make} onChange={(e) => onMakeChange(e.target.value)}>
          <option value="">All Makes</option>
          {makeOptions.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group" style={{ margin: 0 }}>
        <select value={year} onChange={(e) => onYearChange(e.target.value)}>
          <option value="">All Years</option>
          {yearOptions.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group" style={{ margin: 0 }}>
        <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
          {sortOptions.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}