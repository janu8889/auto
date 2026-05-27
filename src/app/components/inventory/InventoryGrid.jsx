"use client";

/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";
import FilterBar from "./FilterBar";
import VehicleCard from "./VehicleCard";

function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
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
  sortVehicles,
}) {
  const [search, setSearch] = useState("");
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [sort, setSort] = useState("newest");

  const visibleVehicles = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = vehicles.filter((vehicle) => {
      const matchesSearch =
        !query ||
        (vehicle.search || "").toLowerCase().includes(query) ||
        (vehicle.title || "").toLowerCase().includes(query);

      const matchesMake = !make || vehicle.make === make;
      const matchesYear = !year || String(vehicle.year) === year;

      return matchesSearch && matchesMake && matchesYear;
    });

    return sortVehicles(filtered, sort);
  }, [search, make, year, sort, vehicles, sortVehicles]);

  return (
    <section className="inventory-section">
      <div className="inventory-container">

        <FilterBar
          SearchIcon={SearchIcon}
          sortOptions={sortOptions}
          yearOptions={yearOptions}
          makeOptions={makeOptions}
          search={search}
          make={make}
          year={year}
          sort={sort}
          onSearchChange={setSearch}
          onMakeChange={setMake}
          onYearChange={setYear}
          onSortChange={setSort}
        />

        <div className="inventory-grid" id="vehicleGrid">
          {visibleVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle._id || vehicle.href}
              vehicle={vehicle}
              ArrowRightIcon={ArrowRightIcon}
            />
          ))}
        </div>

        {visibleVehicles.length === 0 && (
          <div
            className="inventory-empty"
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
            }}
          >
            <SearchIcon style={{ width: 64, height: 64, marginBottom: "1.5rem" }} />
            <p>No vehicles found</p>
          </div>
        )}

        <p className="inventory-count">
          Showing <span>{visibleVehicles.length}</span> of {vehicles.length} vehicles
        </p>
      </div>
    </section>
  );
}