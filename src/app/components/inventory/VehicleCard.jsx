import Link from "next/link";

export default function VehicleCard({
  vehicle,
  ArrowRightIcon,
}) {

  console.log(vehicle)
  const image = vehicle.imgs[0];

  return (
    <Link href={`/inventory/${vehicle._id}`} className="vehicle-card">
      <div className="vehicle-card-image">
        <img src={image} alt={vehicle._id} />
      </div>

      <div className="vehicle-card-body">
        <p className="vehicle-year">{vehicle.year}</p>

        <h3 className="vehicle-title">
          {vehicle.name}
        </h3>

        <p className="vehicle-specs">
          {vehicle.mileage} - {vehicle.engine}
        </p>

        <div className="vehicle-card-footer">
          <p className="vehicle-price">
            {vehicle.price}
          </p>

          <span className="vehicle-card-btn">
            <ArrowRightIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}