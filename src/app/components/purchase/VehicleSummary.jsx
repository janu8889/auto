"use client";

/* eslint-disable @next/next/no-img-element */

export default function VehicleSummary({ vehicle }) {
  return (

    <div className="purchase-vehicle-summary">
      <div className="purchase-vehicle-image">
        <img
          src={vehicle.imgs[0]}
          alt="2023 Ford F-150 Raptor Hennessey VelociRaptor 600"
        />
      </div>

      <div className="purchase-vehicle-info">
        <p className="purchase-vehicle-year">{vehicle.year}</p>
        <h2 className="purchase-vehicle-title">
          {vehicle.name}
        </h2>
        <p className="purchase-vehicle-price">$ {vehicle.discountPrice}</p>
      </div>
    </div>
  );
}