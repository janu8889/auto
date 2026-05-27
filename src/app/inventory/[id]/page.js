"use client";

/* eslint-disable @next/next/no-img-element */
import "./vehicle-detail.css";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import TrustBadges from "../../components/vehicle/TrustBadges";
import VehicleGallery from "../../components/vehicle/VehicleGallery";
import VehicleDescription from "../../components/vehicle/VehicleDescription";
import InquiryForm from "../../components/vehicle/InquiryForm";
import VehicleSidebar from "../../components/vehicle/VehicleSidebar";

function ChevronLeftIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export default function VehicleDetailPage() {
  const { id } = useParams();

  const [auto, setAuto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/auto/${id}`);
        const data = await res.json();
        console.log(data)

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

  const galleryImages =
    Array.isArray(auto.imgs) && auto.imgs.length > 0
      ? auto.imgs
      : ["/placeholder.jpg"];

  const specs = [
    ["Mileage", auto.mileage || "N/A"],
    ["Engine", auto.engine || "N/A"],
    ["Transmission", auto.transmission || "N/A"],
    ["Exterior Color", auto.exteriorColor || "N/A"],
    ["Interior Color", auto.interiorColor || "N/A"],
    ["Title Status",  auto.titleStatus || "N/A"],
  ];

  return (
    <main role="main">
      <div className="vehicle-detail">
        <div className="vehicle-detail-container">
          <Link href="/inventory" className="back-link">
            <ChevronLeftIcon />
            Back to Inventory
          </Link>

          <div className="vehicle-layout">
            <div className="vehicle-main">
              <VehicleGallery images={galleryImages} />
              <TrustBadges />
              <VehicleDescription name={auto.name} description={auto.description}/>
              <InquiryForm id={id} />
            </div>

            <VehicleSidebar id={auto._id} discountPrice={auto.discountPrice} price={auto.price} year={auto.year} name={auto.name} specs={specs} />
          </div>
        </div>
      </div>

      <div className="image-lightbox sf-hidden" id="lightbox" />
      <div className="mobile-sticky-buttons sf-hidden" />
    </main>
  );
}