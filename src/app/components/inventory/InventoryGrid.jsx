"use client";

/* eslint-disable @next/next/no-img-element */

import FilterBar from "./FilterBar";
import VehicleCard from "./VehicleCard";

function ArrowRightIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function InventoryGrid({
  vehicles,

  makeOptions,
  yearOptions,
  sortOptions,

  search,
  setSearch,

  selectedMake,
  selectedYear,
  selectedSort,

  setSelectedMake,
  setSelectedYear,
  setSelectedSort,
}) {
  return (
    <section className="inventory-section">
      <div className="inventory-container">

        <FilterBar
          SearchIcon={SearchIcon}

          sortOptions={sortOptions}
          yearOptions={yearOptions}
          makeOptions={makeOptions}

          search={search}
          onSearchChange={setSearch}   // 🔥 ASTA FIXEAZĂ TOT

          make={selectedMake}
          year={selectedYear}
          sort={selectedSort}

          onMakeChange={setSelectedMake}
          onYearChange={setSelectedYear}
          onSortChange={setSelectedSort}
        />

        <div className="inventory-grid" id="vehicleGrid">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle._id}
              vehicle={vehicle}
              ArrowRightIcon={ArrowRightIcon}
            />
          ))}
        </div>

        {vehicles.length === 0 && (
          <div
            className="inventory-empty"
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
            }}
          >
            <SearchIcon
              style={{
                width: 64,
                height: 64,
                marginBottom: "1.5rem",
              }}
            />

            <p>No vehicles found</p>
          </div>
        )}

        <p className="inventory-count">
          Showing <span>{vehicles.length}</span> vehicles
        </p>

      </div>
    </section>
  );
}