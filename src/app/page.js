"use client";

import { useEffect, useState } from "react";

import Hero from "./components/homepage/Hero";
import StatsBar from "./components/homepage/StatsBar";
import ConfidenceSection from "./components/homepage/ConfidenceSection";
import FeaturedVehicles from "./components/homepage/FeaturedVehicles";
import StorySection from "./components/homepage/StorySection";
import Testimonials from "./components/homepage/Testimonials";
import ContactSection from "./components/homepage/ContactSection";

export default function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/auto/random");

        if (!res.ok) {
          const text = await res.text();
          console.log("API ERROR:", text);
          return;
        }

        const data = await res.json();
        console.log(data)
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

  const stats = [
    { value: "20+", label: "Cars Available" },
    { value: "8+", label: "Years Experience" },
    { value: "300+", label: "Happy Customers" },
    { value: "50", label: "States Served" },
  ];

  return (
    <div className="homepage">
      <main>
        <Hero />
        <StatsBar stats={stats} />
        <ConfidenceSection />

        {loading ? (
          <p style={{ textAlign: "center", padding: "2rem" }}>
            Loading vehicles...
          </p>
        ) : (
          <FeaturedVehicles vehicles={vehicles} />
        )}

        <StorySection />
        <Testimonials />
        <ContactSection />
      </main>
    </div>
  );
}