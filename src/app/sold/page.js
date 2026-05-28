"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import InventoryGrid from "../components/sold/InventoryGrid";
import "./inventory.css";

const makeOptions = [
  "Cadillac",
  "Chevrolet",
  "Ford",
  "GMC",
  "Infiniti",
  "Lincoln",
  "Lucid",
];

const yearOptions = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2020",
];

const sortOptions = [
  ["newest", "Newest First"],
  ["oldest", "Oldest First"],
  ["price-low", "Price: Low to High"],
  ["price-high", "Price: High to Low"],
  ["year-new", "Year: Newest"],
  ["year-old", "Year: Oldest"],
];

export default function SoldPage() {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSort, setSelectedSort] = useState("newest");

  // LOAD AUTOS
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/sold");
        const data = await res.json();

        const autos = data.autos || [];

        setVehicles(autos);
      } catch (err) {
        console.error("Failed to load autos:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // FILTERS + SEARCH + SORT
  useEffect(() => {
    let next = [...vehicles];

    // SEARCH
    if (search.trim()) {
      const query = search.toLowerCase();

      next = next.filter((v) =>
        `${v.name || ""} ${v.make || ""} ${v.year || ""}`
          .toLowerCase()
          .includes(query)
      );
    }

    // MAKE
    if (selectedMake) {
      next = next.filter((v) => v.make === selectedMake);
    }

    // YEAR
    if (selectedYear) {
      next = next.filter(
        (v) => String(v.year) === String(selectedYear)
      );
    }

    // SORT
    if (selectedSort === "oldest") next.reverse();

    if (selectedSort === "price-low") {
      next.sort((a, b) => a.price - b.price);
    }

    if (selectedSort === "price-high") {
      next.sort((a, b) => b.price - a.price);
    }

    if (selectedSort === "year-new") {
      next.sort((a, b) => b.year - a.year);
    }

    if (selectedSort === "year-old") {
      next.sort((a, b) => a.year - b.year);
    }

    setFilteredVehicles(next);
  }, [
    vehicles,
    search,
    selectedMake,
    selectedYear,
    selectedSort,
  ]);

  return (
    <main role="main">
      <div className="page-header">
        <span className="hero-tag">Sold</span>
        <h1>Sold Vehicles</h1>
        <p>A record of vehicles successfully sold through our platform</p>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", padding: "2rem" }}>
          Loading vehicles...
        </p>
      ) : (
        <InventoryGrid
          vehicles={filteredVehicles}
          sortOptions={sortOptions}
          yearOptions={yearOptions}
          makeOptions={makeOptions}

          search={search}
          setSearch={setSearch}

          selectedMake={selectedMake}
          selectedYear={selectedYear}
          selectedSort={selectedSort}

          setSelectedMake={setSelectedMake}
          setSelectedYear={setSelectedYear}
          setSelectedSort={setSelectedSort}
        />
      )}
    </main>
  );
}