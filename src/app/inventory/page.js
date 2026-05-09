import { inventoryVehicles, PageHeader, SiteFooter, SiteNav, VehicleCard } from "../components/KandeShared";

export default function InventoryPage() {
  return (
    <div className="homepage">
      <SiteNav />
      <main>
        <PageHeader
          tag="Inventory"
          title="Exceptional Vehicles"
          subtitle="A curated selection of the world's most desirable modern performance vehicles"
        />

        <section className="section-dark">
          <div className="container">
            <div className="inventory-toolbar">
              <input aria-label="Search inventory" placeholder="Search by make, model, year..." />
              <select aria-label="Make"><option>All Makes</option><option>Chevrolet</option><option>Dodge</option><option>Ford</option><option>GMC</option><option>Lexus</option></select>
              <select aria-label="Year"><option>All Years</option><option>2026</option><option>2025</option><option>2024</option><option>2023</option><option>2022</option></select>
              <select aria-label="Sort"><option>Newest First</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Year: Newest</option></select>
            </div>

            <div className="vehicles-grid">
              {inventoryVehicles.map((vehicle) => (
                <VehicleCard key={vehicle[1]} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
