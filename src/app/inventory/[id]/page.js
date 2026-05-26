"use client";

/* eslint-disable @next/next/no-img-element */
import "./vehicle-detail.css";
import Link from "next/link";

import VehicleGallery from "../../components/vehicle/VehicleGallery";
import TrustBadges from "../../components/vehicle/TrustBadges";
import VehicleDescription from "../../components/vehicle/VehicleDescription";
import InquiryForm from "../../components/vehicle/InquiryForm";
import VehicleSidebar from "../../components/vehicle/VehicleSidebar";


import logoAsset from "./assets/logo.png";
import raptor01 from "./assets/raptor-01.jpg";
import raptor02 from "./assets/raptor-02.jpg";
import raptor03 from "./assets/raptor-03.jpg";
import raptor04 from "./assets/raptor-04.jpg";
import raptor05 from "./assets/raptor-05.jpg";
import raptor06 from "./assets/raptor-06.jpg";
import raptor07 from "./assets/raptor-07.jpg";
import raptor08 from "./assets/raptor-08.jpg";
import raptor09 from "./assets/raptor-09.jpg";
import raptor10 from "./assets/raptor-10.jpg";
import raptor11 from "./assets/raptor-11.jpg";
import raptor12 from "./assets/raptor-12.jpg";
import raptor13 from "./assets/raptor-13.jpg";
import raptor14 from "./assets/raptor-14.jpg";

const galleryImages = [
  raptor01,
  raptor02,
  raptor03,
  raptor04,
  raptor05,
  raptor06,
  raptor07,
  raptor08,
  raptor09,
  raptor10,
  raptor11,
  raptor12,
  raptor13,
  raptor14,
];

const specs = [
  ["Mileage", "15,803 mi"],
  ["Engine", "Twin-Turbocharged 3.5-Liter V6"],
  ["Transmission", "Automatic"],
  ["Exterior Color", "Agate Black Metallic Paint"],
  ["Interior Color", "Black Leather Upholstery"],
  ["Title Status", "Clean"],
];


function ChevronLeftIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export default function VehicleDetailPage() {
  return (
    <>
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
                <VehicleDescription />
                <InquiryForm />
              </div>
              <VehicleSidebar specs={specs} />
            </div>
          </div>
        </div>

        <div className="image-lightbox sf-hidden" id="lightbox" />
        <div className="mobile-sticky-buttons sf-hidden" />
      </main>
    </>
  );
}
