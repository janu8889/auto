"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import InventoryGrid from "../components/inventory/InventoryGrid";
import "./inventory.css";

const makeOptions = [
  "Chevrolet",
  "Dodge",
  "Ford",
  "GMC",
  "Lexus",
  "Mercedes-Benz",
  "Ram",
  "Winnebago",
];

const yearOptions = [
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
];

const sortOptions = [
  ["newest", "Newest First"],
  ["oldest", "Oldest First"],
  ["price-low", "Price: Low to High"],
  ["price-high", "Price: High to Low"],
  ["year-new", "Year: Newest"],
  ["year-old", "Year: Oldest"],
];

export default function InventoryPage() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/autos"); // IMPORTANT
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

  function sortVehicles(list, sort) {
    const next = [...list];

    if (sort === "oldest") next.reverse();
    if (sort === "price-low") next.sort((a, b) => a.price - b.price);
    if (sort === "price-high") next.sort((a, b) => b.price - a.price);
    if (sort === "year-new") next.sort((a, b) => b.year - a.year);
    if (sort === "year-old") next.sort((a, b) => a.year - b.year);

    return next;
  }

  return (
    <main role="main">
      <div className="page-header">
        <span className="hero-tag">Inventory</span>
        <h1>Featured Vehicles</h1>
        <p>Find the right vehicle for your needs</p>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", padding: "2rem" }}>
          Loading vehicles...
        </p>
      ) : (
        <InventoryGrid
          sortVehicles={sortVehicles}
          vehicles={vehicles}
          sortOptions={sortOptions}
          yearOptions={yearOptions}
          makeOptions={makeOptions}
        />
      )}
    </main>
  );
}