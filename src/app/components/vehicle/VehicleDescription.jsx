"use client";

export default function VehicleDescription({ name, description }) {
  return (
    <div className="vehicle-content">
      <div className="tab-content active" id="tab-overview">
        <div className="vehicle-description">
          <h2>About This {name}</h2>

          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}