import { PageHeader } from "../components/KandeShared";

export default function PrivacyPage() {
  return (
    <div className="homepage">
      <main>
        <PageHeader tag="Home / Privacy Policy" title="Privacy Policy" subtitle="Last Updated: May 3, 2026" />
        <section>
          <div className="container narrow legal-content">
            <h2>1. Introduction</h2>
            <p>K&E Auto Inc respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, contact us, or use our services.</p>
            <h2>2. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide when you fill out inquiry forms, request information about a vehicle, subscribe to communications, or contact us by phone, email, or in person.</p>
            <h2>3. How We Use Information</h2>
            <p>Your information may be used to respond to inquiries, process vehicle purchase requests, coordinate shipping, improve our website, and provide customer support.</p>
            <h2>4. Sharing and Disclosure</h2>
            <p>We may share information with service providers, shipping partners, payment processors, or legal authorities when necessary to complete requested services or comply with applicable law.</p>
            <h2>5. Data Security</h2>
            <p>We use reasonable administrative, technical, and physical safeguards designed to protect your personal information.</p>
            <h2>6. Contact Us</h2>
            <p>Questions about this policy can be sent to sales@kandeautosales.com or by calling 218-505-0788.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
