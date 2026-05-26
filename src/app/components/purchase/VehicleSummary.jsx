"use client";

/* eslint-disable @next/next/no-img-element */

export default function VehicleSummary({ vehicleAsset }) {
  return (
    <div className="purchase-vehicle-summary">
      <div className="purchase-vehicle-image">
        <img
          src={vehicleAsset.src}
          alt="2023 Ford F-150 Raptor Hennessey VelociRaptor 600"
        />
      </div>

      <div className="purchase-vehicle-info">
        <p className="purchase-vehicle-year">2023</p>
        <h2 className="purchase-vehicle-title">
          Ford F-150 Raptor Hennessey VelociRaptor 600
        </h2>
        <p className="purchase-vehicle-price">$65,000</p>
      </div>
    </div>
  );
}