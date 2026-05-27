export default function VehicleCard({
  vehicle,
  ArrowRightIcon,
}) {

  console.log(vehicle)
  const image = vehicle.imgs[0];


//   vehicle-card - vehicle-card-remvove

  return (
    <span className="vehicle-card-remvove">
      <div className="vehicle-card-image">
        <span className="vehicle-sold-badge">SOLD</span>
        <img src={image} alt={vehicle._id} />
      </div>

      <div className="vehicle-card-body">
        <p className="vehicle-year">{vehicle.year}</p>

        <h3 className="vehicle-title">
          {vehicle.name}
        </h3>

        <div className="vehicle-card-footer">
          <p className="vehicle-price">
            $ {Number(vehicle.price).toLocaleString()}
          </p>
        </div>
      </div>
    </span>
  );
}