import { PageHeader, SiteFooter, SiteNav } from "../components/KandeShared";

export default function TermsPage() {
  return (
    <div className="homepage">
      <SiteNav />
      <main>
        <PageHeader tag="Home / Terms and Conditions" title="Terms and Conditions" subtitle="Last Updated: May 3, 2026" />
        <section>
          <div className="container narrow legal-content">
            <h2>1. Agreement to Terms</h2>
            <p>Welcome to K&E Auto Inc. These Terms and Conditions govern your access to and use of our website, services, and related communications. By using our website or services, you agree to these Terms.</p>
            <h2>2. Description of Services</h2>
            <p>K&E Auto Inc operates as a premium automobile dealership. Services may include vehicle sales, consignment, sourcing, acquisition assistance, nationwide shipping coordination, and financing assistance through third-party providers.</p>
            <h2>3. Website Use</h2>
            <p>You must be at least 18 years old to use our services. You agree not to misuse the website, submit false information, or interfere with normal operation.</p>
            <h2>4. Vehicle Information</h2>
            <p>We make reasonable efforts to present accurate vehicle details, pricing, condition, and availability. Information may change without notice and should be confirmed directly with our team.</p>
            <h2>5. Purchases and Payments</h2>
            <p>Vehicle purchases are subject to final confirmation, executed documents, payment verification, and any applicable taxes, fees, or shipping arrangements.</p>
            <h2>6. Contact</h2>
            <p>For questions about these Terms, contact K&E Auto Inc at sales@kandeautosales.com or 218-505-0788.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
