"use client";

/* eslint-disable @next/next/no-img-element */
import InventoryGrid from "../components/inventory/InventoryGrid";

import { useMemo, useState } from "react";
import "./inventory.css";

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


function sortVehicles(list, sort) {
  const next = [...list];

  if (sort === "oldest") next.reverse();
  if (sort === "price-low") next.sort((a, b) => a.price - b.price);
  if (sort === "price-high") next.sort((a, b) => b.price - a.price);
  if (sort === "year-new") next.sort((a, b) => b.year - a.year);
  if (sort === "year-old") next.sort((a, b) => a.year - b.year);

  return next;
}


export default function InventoryPage() {
  return (
    <>
      <main role="main">
        <div className="page-header">
          <span className="hero-tag" style={{ animation: "fadeUp 0.6s ease both" }}>
            Inventory
          </span>
          <h1>Featured Vehicles</h1>
          <p>{"Find the right vehicle for your needs"}</p>
        </div>
        <InventoryGrid  
          sortVehicles={sortVehicles}
          vehicleImages={vehicleImages}
          vehicles={vehicles}
          sortOptions={sortOptions}
          yearOptions={yearOptions}
          makeOptions={makeOptions}
        />
      </main>
    </>
  );
}
