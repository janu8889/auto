export const inventoryVehicles = [
  ["2024", "GMC Sierra 1500 Sport Edition", "33,814 miles · 6.2-Liter V8 · Automatic", "$36,900", "/info-pages/inventory-01.jpg"],
  ["2017", "Ford F-150 Raptor Hennessey VelociRaptor 600", "82,114 miles · 3.5-Liter V6 · Automatic", "$38,000", "/info-pages/inventory-02.jpg"],
  ["2023", "Ford F-150 Raptor Hennessey VelociRaptor 600", "15,803 miles · Twin-Turbocharged 3.5-Liter V6 · Automatic", "$65,000", "/info-pages/inventory-03.jpg"],
  ["2024", "Ford Bronco Badlands", "1,823 miles · 2.7L V6 · Automatic", "$42,000", "/info-pages/inventory-04.jpg"],
  ["2021", "Dodge Charger SRT Hellcat Redeye Widebody", "32,618 miles · Supercharged V8 · Automatic", "$76,000", "/info-pages/inventory-05.jpg"],
  ["2022", "Chevrolet Corvette Stingray 2LT", "11,420 miles · 6.2L V8 · Automatic", "$69,900", "/info-pages/inventory-06.jpg"],
  ["2024", "Chevrolet Corvette Stingray 2LT", "5,911 miles · 6.2L V8 · Automatic", "$79,900", "/info-pages/inventory-07.jpg"],
  ["2025", "Lexus GX 550 Premium+", "Low miles · Twin-Turbo V6 · Automatic", "$74,900", "/info-pages/inventory-08.jpg"],
  ["2024", "Chevrolet Silverado 1500 RST Redline Edition", "Crew Cab · 4WD · Automatic", "$49,900", "/info-pages/inventory-09.jpg"],
  ["2022", "GMC Yukon XL SLT", "Premium SUV · 4WD · Automatic", "$58,900", "/info-pages/inventory-10.jpg"],
  ["2024", "GMC Sierra 3500HD AT4", "Diesel · Crew Cab · Heavy Duty", "$89,995", "/info-pages/inventory-11.jpg"],
  ["2024", "Ford F-350 Super Duty Limited", "Diesel · Super Duty · Luxury Trim", "$92,900", "/info-pages/inventory-12.jpg"],
];

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function PageHeader({ tag, title, subtitle }) {
  return (
    <header className="page-header">
      <div className="container">
        <span className="section-tag">{tag}</span>
        <h1 className="section-title">{title}</h1>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </div>
    </header>
  );
}

export function VehicleCard({ vehicle }) {
  const [year, title, specs, price, image] = vehicle;
  const href = title.includes("2023 Ford F-150 Raptor")
    ? "/inventory/2023-ford-f-150-raptor-hennessey-velociraptor-600"
    : "/contact";

  return (
    <article className="vehicle-card">
      <div className="vehicle-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="vehicle-card-body">
        <p className="vehicle-year">{year}</p>
        <h3 className="vehicle-title">{title}</h3>
        <p className="vehicle-specs">{specs}</p>
        <div className="vehicle-card-footer">
          <strong className="vehicle-price">{price}</strong>
          <a href={href} className="vehicle-card-btn" aria-label={`View ${title}`}>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}
