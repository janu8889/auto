"use client";

/* eslint-disable @next/next/no-img-element */
import { useMemo, useState } from "react";
import "./inventory.css";

import logoAsset from "./assets/logo.png";
import vehicle01 from "./assets/vehicle-01.jpg";
import vehicle02 from "./assets/vehicle-02.jpg";
import vehicle03 from "./assets/vehicle-03.jpg";
import vehicle04 from "./assets/vehicle-04.jpg";
import vehicle05 from "./assets/vehicle-05.jpg";
import vehicle06 from "./assets/vehicle-06.jpg";
import vehicle07 from "./assets/vehicle-07.jpg";
import vehicle08 from "./assets/vehicle-08.jpg";
import vehicle09 from "./assets/vehicle-09.jpg";
import vehicle10 from "./assets/vehicle-10.jpg";
import vehicle11 from "./assets/vehicle-11.jpg";
import vehicle12 from "./assets/vehicle-12.jpg";
import vehicle13 from "./assets/vehicle-13.jpg";
import vehicle14 from "./assets/vehicle-14.jpg";
import vehicle15 from "./assets/vehicle-15.jpg";
import vehicle16 from "./assets/vehicle-16.jpg";
import vehicle17 from "./assets/vehicle-17.jpg";
import vehicle18 from "./assets/vehicle-18.jpg";
import vehicle19 from "./assets/vehicle-19.jpg";
import vehicle20 from "./assets/vehicle-20.jpg";
import vehicle21 from "./assets/vehicle-21.jpg";
import vehicle22 from "./assets/vehicle-22.jpg";
import vehicle23 from "./assets/vehicle-23.jpg";
import vehicle24 from "./assets/vehicle-24.jpg";
import vehicle25 from "./assets/vehicle-25.jpg";
import vehicle26 from "./assets/vehicle-26.jpg";
import vehicle27 from "./assets/vehicle-27.jpg";
import vehicle28 from "./assets/vehicle-28.jpg";
import vehicle29 from "./assets/vehicle-29.jpg";

const navLeft = [
  { label: "Home", href: "https://kandeautosales.com/" },
  { label: "Inventory", href: "https://kandeautosales.com/inventory.php", active: true },
  { label: "About", href: "https://kandeautosales.com/about.php" },
];

const navRight = [
  { label: "Shipping", href: "https://kandeautosales.com/shipping.php" },
  { label: "Sell", href: "https://kandeautosales.com/sell.php" },
  { label: "Contact", href: "https://kandeautosales.com/contact.php" },
];

const makeOptions = ["Chevrolet", "Dodge", "Ford", "GMC", "Lexus", "Mercedes-Benz", "Ram", "Winnebago"];
const yearOptions = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"];
const sortOptions = [
  ["newest", "Newest First"],
  ["oldest", "Oldest First"],
  ["price-low", "Price: Low to High"],
  ["price-high", "Price: High to Low"],
  ["year-new", "Year: Newest"],
  ["year-old", "Year: Oldest"],
];

const vehicleImages = [
  vehicle01,
  vehicle02,
  vehicle03,
  vehicle04,
  vehicle05,
  vehicle06,
  vehicle07,
  vehicle08,
  vehicle09,
  vehicle10,
  vehicle11,
  vehicle12,
  vehicle13,
  vehicle14,
  vehicle15,
  vehicle16,
  vehicle17,
  vehicle18,
  vehicle19,
  vehicle20,
  vehicle21,
  vehicle22,
  vehicle23,
  vehicle24,
  vehicle25,
  vehicle26,
  vehicle27,
  vehicle28,
  vehicle29,
];

const vehicles = [
  {
    "href": "https://kandeautosales.com/inventory/2024-gmc-sierra-1500-sport-edition",
    "make": "GMC",
    "year": 2024,
    "price": 36900,
    "search": "2024 gmc sierra 1500 sport edition 6.2-liter v8",
    "alt": "2024 GMC Sierra 1500 Sport Edition",
    "yearText": "2024",
    "title": "GMC Sierra 1500 Sport Edition",
    "specs": "33,814 miles · 6.2-Liter V8 · Automatic",
    "priceText": "$36,900",
    "imageIndex": 0
  },
  {
    "href": "https://kandeautosales.com/inventory/2017-ford-f-150-raptor-hennessey-velociraptor-600",
    "make": "Ford",
    "year": 2017,
    "price": 38000,
    "search": "2017 ford f-150 raptor hennessey velociraptor 600 3.5-liter v6",
    "alt": "2017 Ford F-150 Raptor Hennessey VelociRaptor 600",
    "yearText": "2017",
    "title": "Ford F-150 Raptor Hennessey VelociRaptor 600",
    "specs": "82,114 miles · 3.5-Liter V6 · Automatic",
    "priceText": "$38,000",
    "imageIndex": 1
  },
  {
    "href": "https://kandeautosales.com/inventory/2023-ford-f-150-raptor-hennessey-velociraptor-600",
    "make": "Ford",
    "year": 2023,
    "price": 65000,
    "search": "2023 ford f-150 raptor hennessey velociraptor 600 twin-turbocharged 3.5-liter v6",
    "alt": "2023 Ford F-150 Raptor Hennessey VelociRaptor 600",
    "yearText": "2023",
    "title": "Ford F-150 Raptor Hennessey VelociRaptor 600",
    "specs": "15,803 miles · Twin-Turbocharged 3.5-Liter V6 · Automatic",
    "priceText": "$65,000",
    "imageIndex": 2
  },
  {
    "href": "https://kandeautosales.com/inventory/2024-ford-bronco-badlands",
    "make": "Ford",
    "year": 2024,
    "price": 42000,
    "search": "2024 ford bronco badlands 2.7l v6",
    "alt": "2024 Ford Bronco Badlands",
    "yearText": "2024",
    "title": "Ford Bronco Badlands",
    "specs": "1,823 miles · 2.7L V6 · Automatic",
    "priceText": "$42,000",
    "imageIndex": 3
  },
  {
    "href": "https://kandeautosales.com/inventory/2021-dodge-charger-srt-hellcat-redeye-widebody",
    "make": "Dodge",
    "year": 2021,
    "price": 49000,
    "search": "2021 dodge charger srt hellcat redeye widebody 6.2 liter supercharged v8",
    "alt": "2021 Dodge Charger SRT Hellcat Redeye Widebody",
    "yearText": "2021",
    "title": "Dodge Charger SRT Hellcat Redeye Widebody",
    "specs": "32,618 miles · 6.2 Liter Supercharged V8 · Automatic",
    "priceText": "$49,000",
    "imageIndex": 4
  },
  {
    "href": "https://kandeautosales.com/inventory/2022-chevrolet-corvette-stingray-2lt",
    "make": "Chevrolet",
    "year": 2022,
    "price": 48800,
    "search": "2022 chevrolet corvette stingray 2lt 6.2l v8 490hp 465ft. lbs.",
    "alt": "2022 Chevrolet Corvette Stingray 2LT",
    "yearText": "2022",
    "title": "Chevrolet Corvette Stingray 2LT",
    "specs": "19,108 miles · 6.2L V8 490hp 465ft. lbs. · 8-Speed Double Clutch",
    "priceText": "$48,800",
    "imageIndex": 5
  },
  {
    "href": "https://kandeautosales.com/inventory/2024-chevrolet-corvette-stingray-2lt",
    "make": "Chevrolet",
    "year": 2024,
    "price": 60000,
    "search": "2024 chevrolet corvette stingray 2lt 6.2l v8 490hp 465ft. lbs.",
    "alt": "2024 Chevrolet Corvette Stingray 2LT",
    "yearText": "2024",
    "title": "Chevrolet Corvette Stingray 2LT",
    "specs": "3,792 miles · 6.2L V8 490hp 465ft. lbs. · 8-Speed Double Clutch",
    "priceText": "$60,000",
    "imageIndex": 6
  },
  {
    "href": "https://kandeautosales.com/inventory/2025-lexus-gx-550-premium",
    "make": "Lexus",
    "year": 2025,
    "price": 75000,
    "search": "2025 lexus gx 550 premium+ 3.4l twin turbo v6 349hp 479ft. lbs.",
    "alt": "2025 Lexus GX 550 Premium+",
    "yearText": "2025",
    "title": "Lexus GX 550 Premium+",
    "specs": "94 miles · 3.4L Twin Turbo V6 349hp 479ft. lbs. · 10-Speed Shiftable Automatic",
    "priceText": "$75,000",
    "imageIndex": 7
  },
  {
    "href": "https://kandeautosales.com/inventory/2024-chevrolet-silverado-1500-rst-redline-edition",
    "make": "Chevrolet",
    "year": 2024,
    "price": 39900,
    "search": "2024 chevrolet silverado 1500 rst redline edition ecotec3 6.2l v8 420hp 460ft. lbs.",
    "alt": "2024 Chevrolet Silverado 1500 RST REDLINE EDITION",
    "yearText": "2024",
    "title": "Chevrolet Silverado 1500 RST REDLINE EDITION",
    "specs": "32,203 miles · EcoTec3 6.2L V8 420hp 460ft. lbs. · 10-Speed Shiftable Automatic",
    "priceText": "$39,900",
    "imageIndex": 8
  },
  {
    "href": "https://kandeautosales.com/inventory/2022-gmc-yukon-xl-slt",
    "make": "GMC",
    "year": 2022,
    "price": 38000,
    "search": "2022 gmc yukon xl slt ecotec3 5.3l v8",
    "alt": "2022 GMC Yukon XL SLT",
    "yearText": "2022",
    "title": "GMC Yukon XL SLT",
    "specs": "63,494 miles · EcoTec3 5.3L V8 · 10-Speed Automatic with Overdrive",
    "priceText": "$38,000",
    "imageIndex": 9
  },
  {
    "href": "https://kandeautosales.com/inventory/2024-gmc-sierra-3500hd-at4",
    "make": "GMC",
    "year": 2024,
    "price": 60000,
    "search": "2024 gmc sierra 3500hd at4 duramax 6.6l v8 turbodiesel",
    "alt": "2024 GMC Sierra 3500HD AT4",
    "yearText": "2024",
    "title": "GMC Sierra 3500HD AT4",
    "specs": "23,190 miles · Duramax 6.6L V8 Turbodiesel · 10-Speed Automatic",
    "priceText": "$60,000",
    "imageIndex": 10
  },
  {
    "href": "https://kandeautosales.com/inventory/2024-ford-f-350-super-duty-limited",
    "make": "Ford",
    "year": 2024,
    "price": 63000,
    "search": "2024 ford f-350 super duty limited v-8 cyl",
    "alt": "2024 Ford F-350 Super Duty Limited",
    "yearText": "2024",
    "title": "Ford F-350 Super Duty Limited",
    "specs": "10,461 miles · V-8 cyl · 10-Speed Automatic",
    "priceText": "$63,000",
    "imageIndex": 11
  },
  {
    "href": "https://kandeautosales.com/inventory/2024-gmc-sierra-3500hd-denali-ultimate",
    "make": "GMC",
    "year": 2024,
    "price": 72000,
    "search": "2024 gmc sierra 3500hd denali ultimate duramax 6.6l v8 turbodiesel",
    "alt": "2024 GMC Sierra 3500HD Denali Ultimate",
    "yearText": "2024",
    "title": "GMC Sierra 3500HD Denali Ultimate",
    "specs": "23,235 miles · Duramax 6.6L V8 Turbodiesel · 10-Speed Automatic",
    "priceText": "$72,000",
    "imageIndex": 12
  },
  {
    "href": "https://kandeautosales.com/inventory/2023-chevrolet-silverado-3500hd-ltz",
    "make": "Chevrolet",
    "year": 2023,
    "price": 50000,
    "search": "2023 chevrolet silverado 3500hd ltz duramax 6.6l v8 turbodiesel",
    "alt": "2023 Chevrolet Silverado 3500HD LTZ",
    "yearText": "2023",
    "title": "Chevrolet Silverado 3500HD LTZ",
    "specs": "21,213 miles · Duramax 6.6L V8 Turbodiesel · 10-Speed Automatic",
    "priceText": "$50,000",
    "imageIndex": 13
  },
  {
    "href": "https://kandeautosales.com/inventory/2021-ford-f-350-super-duty-lariat",
    "make": "Ford",
    "year": 2021,
    "price": 45000,
    "search": "2021 ford f-350 super duty lariat v-8 cyl",
    "alt": "2021 Ford F-350 Super Duty Lariat",
    "yearText": "2021",
    "title": "Ford F-350 Super Duty Lariat",
    "specs": "39,945 miles · V-8 cyl · 10-Speed Automatic",
    "priceText": "$45,000",
    "imageIndex": 14
  },
  {
    "href": "https://kandeautosales.com/inventory/2025-ram-3500-laramie",
    "make": "Ram",
    "year": 2025,
    "price": 64000,
    "search": "2025 ram 3500 laramie i-6 cyl",
    "alt": "2025 Ram 3500 Laramie",
    "yearText": "2025",
    "title": "Ram 3500 Laramie",
    "specs": "1,768 miles · I-6 cyl · 8-Speed Automatic",
    "priceText": "$64,000",
    "imageIndex": 15
  },
  {
    "href": "https://kandeautosales.com/inventory/2024-ford-super-duty-f-550-drw",
    "make": "Ford",
    "year": 2024,
    "price": 58000,
    "search": "2024 ford super duty f-550 drw 7.3l v8 16v mpfi ohv",
    "alt": "2024 Ford Super Duty F-550 DRW",
    "yearText": "2024",
    "title": "Ford Super Duty F-550 DRW",
    "specs": "691 miles · 7.3L V8 16V MPFI OHV · Automatic",
    "priceText": "$58,000",
    "imageIndex": 16
  },
  {
    "href": "https://kandeautosales.com/inventory/2026-ford-f-450-super-duty-xlt",
    "make": "Ford",
    "year": 2026,
    "price": 65000,
    "search": "2026 ford f-450 super duty xlt 6.7l high output power stroke v8 diesel",
    "alt": "2026 Ford F-450 Super Duty XLT",
    "yearText": "2026",
    "title": "Ford F-450 Super Duty XLT",
    "specs": "8,428 miles · 6.7L High Output Power Stroke V8 Diesel · 10-Speed Automatic",
    "priceText": "$65,000",
    "imageIndex": 17
  },
  {
    "href": "https://kandeautosales.com/inventory/2020-ram-3500-laramie",
    "make": "Ram",
    "year": 2020,
    "price": 42900,
    "search": "2020 ram 3500 laramie cummins 6.7l i6 turbodiesel",
    "alt": "2020 Ram 3500 Laramie",
    "yearText": "2020",
    "title": "Ram 3500 Laramie",
    "specs": "60,193 miles · Cummins 6.7L I6 Turbodiesel · Aisin 6-Speed Automatic",
    "priceText": "$42,900",
    "imageIndex": 18
  },
  {
    "href": "https://kandeautosales.com/inventory/2024-gmc-sierra-3500hd-denali",
    "make": "GMC",
    "year": 2024,
    "price": 53000,
    "search": "2024 gmc sierra 3500hd denali v-8 cyl",
    "alt": "2024 GMC Sierra 3500HD Denali",
    "yearText": "2024",
    "title": "GMC Sierra 3500HD Denali",
    "specs": "40,039 miles · V-8 cyl · 10-Speed Automatic",
    "priceText": "$53,000",
    "imageIndex": 19
  },
  {
    "href": "https://kandeautosales.com/inventory/2022-mercedes-benz-sprinter-2500-winnebago-revel-4-4",
    "make": "Mercedes-Benz",
    "year": 2022,
    "price": 74000,
    "search": "2022 mercedes-benz sprinter 2500 winnebago revel 4×4 3.0-liter turbodiesel v6",
    "alt": "2022 Mercedes-Benz Sprinter 2500 Winnebago Revel 4×4",
    "yearText": "2022",
    "title": "Mercedes-Benz Sprinter 2500 Winnebago Revel 4×4",
    "specs": "31,565 miles · 3.0-Liter Turbodiesel V6 · Automatic",
    "priceText": "$74,000",
    "imageIndex": 20
  },
  {
    "href": "https://kandeautosales.com/inventory/2021-mercedes-benz-sprinter-2500-winnebago-revel-4-4",
    "make": "Mercedes-Benz",
    "year": 2021,
    "price": 58000,
    "search": "2021 mercedes-benz sprinter 2500 winnebago revel 4×4 3.0-liter turbodiesel v6",
    "alt": "2021 Mercedes-Benz Sprinter 2500 Winnebago Revel 4×4",
    "yearText": "2021",
    "title": "Mercedes-Benz Sprinter 2500 Winnebago Revel 4×4",
    "specs": "47,219 miles · 3.0-Liter Turbodiesel V6 · Automatic",
    "priceText": "$58,000",
    "imageIndex": 21
  },
  {
    "href": "https://kandeautosales.com/inventory/2021-winnebago-revel-4-4-motorhome",
    "make": "Winnebago",
    "year": 2021,
    "price": 64000,
    "search": "2021 winnebago revel 4×4 motorhome 3.0-liter bluetec turbodiesel v6",
    "alt": "2021 Winnebago Revel 4×4 Motorhome",
    "yearText": "2021",
    "title": "Winnebago Revel 4×4 Motorhome",
    "specs": "12,359 miles · 3.0-Liter BlueTec Turbodiesel V6 · Automatic",
    "priceText": "$64,000",
    "imageIndex": 22
  },
  {
    "href": "https://kandeautosales.com/inventory/2023-winnebago-revel-4-4-motorhome",
    "make": "Winnebago",
    "year": 2023,
    "price": 60000,
    "search": "2023 winnebago revel 4×4 motorhome 3.0-liter turbodiesel v6",
    "alt": "2023 Winnebago Revel 4×4 Motorhome",
    "yearText": "2023",
    "title": "Winnebago Revel 4×4 Motorhome",
    "specs": "41,034 miles · 3.0-Liter Turbodiesel V6 · Automatic",
    "priceText": "$60,000",
    "imageIndex": 23
  },
  {
    "href": "https://kandeautosales.com/inventory/2020-winnebago-revel-4-4-motorhome",
    "make": "Winnebago",
    "year": 2020,
    "price": 55000,
    "search": "2020 winnebago revel 4×4 motorhome 3.0-liter turbodiesel v6",
    "alt": "2020 Winnebago Revel 4×4 Motorhome",
    "yearText": "2020",
    "title": "Winnebago Revel 4×4 Motorhome",
    "specs": "43,136 miles · 3.0-Liter Turbodiesel V6 · Automatic",
    "priceText": "$55,000",
    "imageIndex": 24
  },
  {
    "href": "https://kandeautosales.com/inventory/2022-mercedes-benz-sprinter-2500-winnebago-revel-4-4-1",
    "make": "Mercedes-Benz",
    "year": 2022,
    "price": 57000,
    "search": "2022 mercedes-benz sprinter 2500 winnebago revel 4×4 3.0-liter turbodiesel v6",
    "alt": "2022 Mercedes-Benz Sprinter 2500 Winnebago Revel 4×4",
    "yearText": "2022",
    "title": "Mercedes-Benz Sprinter 2500 Winnebago Revel 4×4",
    "specs": "59,396 miles · 3.0-Liter Turbodiesel V6 · Automatic",
    "priceText": "$57,000",
    "imageIndex": 25
  },
  {
    "href": "https://kandeautosales.com/inventory/2019-winnebago-era-70b",
    "make": "Winnebago",
    "year": 2019,
    "price": 65000,
    "search": "2019 winnebago era 70b 3.0-liter turbodiesel v6",
    "alt": "2019 Winnebago Era 70B",
    "yearText": "2019",
    "title": "Winnebago Era 70B",
    "specs": "29,943 miles · 3.0-Liter Turbodiesel V6 · Automatic",
    "priceText": "$65,000",
    "imageIndex": 26
  },
  {
    "href": "https://kandeautosales.com/inventory/2018-mercedes-benz-sprinter-2500-winnebago-revel-4-4",
    "make": "Mercedes-Benz",
    "year": 2018,
    "price": 48000,
    "search": "2018 mercedes-benz sprinter 2500 winnebago revel 4×4 3.0-liter bluetec turbodiesel v6",
    "alt": "2018 Mercedes-Benz Sprinter 2500 Winnebago Revel 4×4",
    "yearText": "2018",
    "title": "Mercedes-Benz Sprinter 2500 Winnebago Revel 4×4",
    "specs": "59,795 miles · 3.0-Liter BlueTec Turbodiesel V6 · Automatic",
    "priceText": "$48,000",
    "imageIndex": 27
  },
  {
    "href": "https://kandeautosales.com/inventory/2021-mercedes-benz-sprinter-2500-winnebago-revel-4-4-1",
    "make": "Mercedes-Benz",
    "year": 2021,
    "price": 71000,
    "search": "2021 mercedes-benz sprinter 2500 winnebago revel 4×4 3.0-liter v6 turbodiesel",
    "alt": "2021 Mercedes-Benz Sprinter 2500 Winnebago Revel 4×4",
    "yearText": "2021",
    "title": "Mercedes-Benz Sprinter 2500 Winnebago Revel 4×4",
    "specs": "14,284 miles · 3.0-Liter V6 Turbodiesel · Automatic",
    "priceText": "$71,000",
    "imageIndex": 28
  }
];

const footerExplore = [
  ["Home", "https://kandeautosales.com/"],
  ["Inventory", "https://kandeautosales.com/inventory.php"],
  ["About Us", "https://kandeautosales.com/about.php"],
  ["Shipping", "https://kandeautosales.com/shipping.php"],
  ["Sell Your Car", "https://kandeautosales.com/sell.php"],
];

const footerSupport = [
  ["Contact Us", "https://kandeautosales.com/contact.php"],
  ["Shipping FAQ", "https://kandeautosales.com/shipping.php#faq"],
  ["Privacy Policy", "https://kandeautosales.com/privacy.php"],
  ["Terms of Service", "https://kandeautosales.com/terms.php"],
];

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

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

function Header() {
  return (
    <>
      <nav className="navbar scrolled" id="navbar" itemScope itemType="https://schema.org/SiteNavigationElement">
        <div className="nav-container">
          <div className="nav-left">
            {navLeft.map((item) => (
              <a key={item.label} href={item.href} className={item.active ? "nav-link active" : "nav-link"} itemProp="url">
                {item.label}
              </a>
            ))}
          </div>

          <a href="https://kandeautosales.com/" className="logo" itemProp="url">
            <img
              src={logoAsset.src}
              alt="K&E Auto Inc"
              className="logo-image"
              style={{
                "--desktop-logo-height": "100px",
                "--mobile-logo-height": "90px",
                height: "var(--desktop-logo-height)",
              }}
            />
          </a>

          <div className="nav-right">
            {navRight.map((item) => (
              <a key={item.label} href={item.href} className="nav-link" itemProp="url">
                {item.label}
              </a>
            ))}
            <a href="tel:2185050788" className="nav-cta" aria-label="Call 218-505-0788">
              <PhoneIcon />
              218-505-0788
            </a>
          </div>

          <button className="mobile-menu-btn sf-hidden" id="mobileMenuBtn" aria-label="Toggle menu" type="button" />
        </div>
      </nav>
      <div className="mobile-nav sf-hidden" id="mobileNav" role="navigation" aria-label="Mobile navigation" />
    </>
  );
}

function FilterBar({ search, make, year, sort, onSearchChange, onMakeChange, onYearChange, onSortChange }) {
  return (
    <div className="filter-bar reveal revealed">
      <div className="search-input-wrapper">
        <SearchIcon />
        <input
          type="text"
          id="searchInput"
          placeholder="Search by make, model, year..."
          autoComplete="off"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="form-group" style={{ margin: 0, minWidth: 160 }}>
        <select id="makeFilter" value={make} onChange={(event) => onMakeChange(event.target.value)}>
          <option value="">All Makes</option>
          {makeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group" style={{ margin: 0, minWidth: 130 }}>
        <select id="yearFilter" value={year} onChange={(event) => onYearChange(event.target.value)}>
          <option value="">All Years</option>
          {yearOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group" style={{ margin: 0, minWidth: 140 }}>
        <select id="sortFilter" value={sort} onChange={(event) => onSortChange(event.target.value)}>
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

function VehicleCard({ vehicle }) {
  const image = vehicleImages[vehicle.imageIndex];

  return (
    <a
      href={vehicle.href}
      className="vehicle-card"
      data-make={vehicle.make}
      data-year={vehicle.year}
      data-price={vehicle.price}
      data-search={vehicle.search}
    >
      <div className="vehicle-card-image">
        <img src={image.src} alt={vehicle.alt} loading="lazy" />
      </div>
      <div className="vehicle-card-body">
        <p className="vehicle-year">{vehicle.yearText}</p>
        <h3 className="vehicle-title">{vehicle.title}</h3>
        <p className="vehicle-specs">{vehicle.specs}</p>
        <div className="vehicle-card-footer">
          <p className="vehicle-price">{vehicle.priceText}</p>
          <span className="vehicle-card-btn">
            <ArrowRightIcon />
          </span>
        </div>
      </div>
    </a>
  );
}

function sortVehicles(list, sort) {
  const next = [...list];

  if (sort === "oldest") next.reverse();
  if (sort === "price-low") next.sort((a, b) => a.price - b.price);
  if (sort === "price-high") next.sort((a, b) => b.price - a.price);
  if (sort === "year-new") next.sort((a, b) => b.year - a.year);
  if (sort === "year-old") next.sort((a, b) => a.year - b.year);

  return next;
}

function InventoryGrid() {
  const [search, setSearch] = useState("");
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [sort, setSort] = useState("newest");

  const visibleVehicles = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = vehicles.filter((vehicle) => {
      const matchesSearch = !query || vehicle.search.toLowerCase().includes(query) || vehicle.title.toLowerCase().includes(query);
      const matchesMake = !make || vehicle.make === make;
      const matchesYear = !year || String(vehicle.year) === year;
      return matchesSearch && matchesMake && matchesYear;
    });

    return sortVehicles(filtered, sort);
  }, [make, search, sort, year]);

  return (
    <section className="inventory-section">
      <div className="inventory-container">
        <FilterBar
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
            <VehicleCard key={vehicle.href} vehicle={vehicle} />
          ))}
        </div>

        <div className="inventory-empty" id="emptyState" style={{ display: visibleVehicles.length ? "none" : "block", textAlign: "center", padding: "4rem 2rem" }}>
          <SearchIcon style={{ width: 64, height: 64, marginBottom: "1.5rem" }} />
        </div>

        <p className="inventory-count" id="resultsCount">
          Showing <span id="visibleCount">{visibleVehicles.length}</span> of {vehicles.length} vehicles
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="https://kandeautosales.com/" className="footer-logo">
              <img src={logoAsset.src} alt="K&E Auto Inc" className="footer-logo-image" style={{ height: 150 }} />
            </a>
            <p />
            <div className="footer-social" />
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <ul className="footer-links">
              {footerExplore.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul className="footer-links">
              {footerSupport.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <LocationIcon />
              <span>
                Norway Pines Pl
                <br />
                Hermantown, MN 55811
              </span>
            </div>
            <div className="footer-contact-item">
              <PhoneIcon />
              <a href="tel:2185050788">218-505-0788</a>
            </div>
            <div className="footer-contact-item">
              <MailIcon />
              <a href="mailto:sales@kandeautosales.com">sales@kandeautosales.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="https://kandeautosales.com/privacy.php">Privacy</a>
            <a href="https://kandeautosales.com/terms.php">Terms</a>
          </div>
          <p className="footer-copyright">© 2026 K&E Auto Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function InventoryPage() {
  return (
    <>
      <Header />
      <main role="main">
        <div className="page-header">
          <span className="hero-tag" style={{ animation: "fadeUp 0.6s ease both" }}>
            Inventory
          </span>
          <h1>Featured Vehicles</h1>
          <p>{"Find the right vehicle for your needs"}</p>
        </div>
        <InventoryGrid />
      </main>
      <Footer />
      <button className="back-to-top" id="backToTop" aria-label="Back to top" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
