/* eslint-disable @next/next/no-img-element */
import "../purchase.css";

import vehicleAsset from "../assets/vehicle.jpg";
import PurchaseForm from "../../components/purchase/PurchaseForm";
import VehicleSummary from "../../components/purchase/VehicleSummary";

export default function PurchasePage() {
  return (
    <>
      <main role="main">
        <section className="purchase-section">
          <div className="container">
            <div className="purchase-container">
              <VehicleSummary vehicleAsset={vehicleAsset}/>
              <PurchaseForm />
              <div className="purchase-success" id="purchaseSuccess" style={{ display: "none" }} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
