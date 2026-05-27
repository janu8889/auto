"use client";

/* eslint-disable @next/next/no-img-element */
import "../purchase.css";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import PurchaseForm from "../../components/purchase/PurchaseForm";
import VehicleSummary from "../../components/purchase/VehicleSummary";

export default function PurchasePage() {
  const { id } = useParams();

  const [auto, setAuto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/auto/${id}`);
        const data = await res.json();

        setAuto(data.auto);
      } catch (err) {
        console.error("Failed to load vehicle:", err);
      } finally {
        setLoading(false);
      }
    }

    if (id) load();
  }, [id]);

  if (loading) {
    return <p style={{ padding: 40 }}>Loading...</p>;
  }

  if (!auto) {
    return <p style={{ padding: 40 }}>Vehicle not found</p>;
  }

  return (
    <main role="main">
      <section className="purchase-section">
        <div className="container">
          <div className="purchase-container">

            <VehicleSummary vehicle={auto} />

            <PurchaseForm id={id} />

            <div
              className="purchase-success"
              id="purchaseSuccess"
              style={{ display: "none" }}
            />

          </div>
        </div>
      </section>
    </main>
  );
}