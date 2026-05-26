import Link from "next/link";

export default function VehicleCard({
  vehicle,
  ArrowRightIcon,
  vehicleImages,
}) {
  const image = vehicleImages[vehicle.imageIndex];

  return (
    <Link href="/inventory/safasd" className="vehicle-card">
      <div className="vehicle-card-image">
        <img src={image.src} alt={vehicle.alt} loading="lazy" />
      </div>

      <div className="vehicle-card-body">
        <p className="vehicle-year">{vehicle.yearText}</p>

        <h3 className="vehicle-title">
          {vehicle.title}
        </h3>

        <p className="vehicle-specs">
          {vehicle.specs}
        </p>

        <div className="vehicle-card-footer">
          <p className="vehicle-price">
            {vehicle.priceText}
          </p>

          <span className="vehicle-card-btn">
            <ArrowRightIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}