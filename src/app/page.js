/* eslint-disable @next/next/no-img-element */

import Hero from "./components/homepage/Hero";
import StatsBar from "./components/homepage/StatsBar";
import FeaturedVehicles from "./components/homepage/FeaturedVehicles";
import StorySection from "./components/homepage/StorySection";
import Testimonials from "./components/homepage/Testimonials";
import ContactSection from "./components/homepage/ContactSection";


import vehicleRaptor from "./homepage-assets/vehicle-raptor.jpg";
import vehicleSierra from "./homepage-assets/vehicle-sierra.jpg";
import vehicleF450 from "./homepage-assets/vehicle-f450.jpg";


const stats = [
  { value: "22+", label: "Cars Available" },
  { value: "7+", label: "Years Experience" },
  { value: "500+", label: "Happy Customers" },
  { value: "50", label: "States Served" },
];

const vehicles = [
  {
    href: "https://kandeautosales.com/inventory/2023-ford-f-150-raptor-hennessey-velociraptor-600",
    year: "2023",
    title: "Ford F-150 Raptor Hennessey VelociRaptor 600",
    specs: "15,803 miles · Twin-Turbocharged 3.5-Liter V6 · Automatic",
    price: "$65,000",
    image: vehicleRaptor,
  },
  {
    href: "https://kandeautosales.com/inventory/2024-gmc-sierra-3500hd-at4",
    year: "2024",
    title: "GMC Sierra 3500HD AT4",
    specs: "23,190 miles · Duramax 6.6L V8 Turbodiesel · 10-Speed Automatic",
    price: "$60,000",
    image: vehicleSierra,
  },
  {
    href: "https://kandeautosales.com/inventory/2026-ford-f-450-super-duty-xlt",
    year: "2026",
    title: "Ford F-450 Super Duty XLT",
    specs: "8,428 miles · 6.7L High Output Power Stroke V8 Diesel · 10-Speed Automatic",
    price: "$65,000",
    image: vehicleF450,
  },
];


function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}


function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}


function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="section-header reveal revealed">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}


export default function Home() {
  return (
    <div className="homepage">
      <main>
        <Hero />
        <StatsBar stats={stats} />
        <FeaturedVehicles vehicles={vehicles}/>
        <StorySection />
        <Testimonials />
        <ContactSection />
      </main>
      <button className="back-to-top" id="backToTop" aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}
