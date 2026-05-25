/* eslint-disable @next/next/no-img-element */
import "./shipping.css";
import Hero from "../components/shipping/Hero";
import ServicesSection from "../components/shipping/ServicesSection";
import ProcessSection from "../components/shipping/ProcessSection";
import FaqSection from "../components/shipping/FaqSection";
// import QuoteSection from "../components/shipping/QuoteSection";

const services = [
  {
    title: "Enclosed Transport",
    subtitle: "Premium protection for your vehicle",
    price: "Starting at $1.00/mile",
    buttonClass: "btn btn-primary btn-block",
    icon: "enclosed",
    features: ["Full weather protection", "$500K+ insurance coverage", "GPS tracking included", "Soft-tie down system"],
  },
  {
    title: "Open Transport",
    subtitle: "Economical nationwide delivery",
    price: "Starting at $0.85/mile",
    buttonClass: "btn btn-outline btn-block",
    icon: "open",
    features: ["Cost-effective option", "Full insurance coverage", "Flexible scheduling", "Professional handlers"],
  },
  {
    title: "Door-to-Door",
    subtitle: "Maximum convenience",
    price: "Custom Quote",
    buttonClass: "btn btn-outline btn-block",
    icon: "home",
    features: ["Pickup at any location", "Delivery to your home", "Inspection on arrival", "Enclosed or open option"],
  },
];

const processSteps = [
  ["1", "Request Quote", "Tell us your pickup and delivery locations"],
  ["2", "Schedule", "Choose your pickup date and transport type"],
  ["3", "Track", "Monitor your vehicle throughout transit"],
  ["4", "Receive", "Inspect and accept your vehicle at delivery"],
];

const faqs = [
  [
    "How long does shipping take?",
    "Transit times vary by distance. East Coast to West Coast typically takes 7-10 days. Regional transport (under 500 miles) usually takes 2-4 days. We'll provide an accurate estimate with your quote.",
  ],
  [
    "Is my vehicle insured during transport?",
    "Yes, all vehicles are fully insured during transport. Our enclosed carriers provide up to $500,000 in coverage. We can arrange additional coverage for high-value vehicles upon request.",
  ],
  [
    "Can I track my vehicle?",
    "Absolutely. Our enclosed transporters are equipped with GPS tracking. You'll receive regular updates and can request real-time location information at any time.",
  ],
  [
    "What if my car doesn't run?",
    "No problem. Our carriers are equipped with winches and ramps to safely load non-running vehicles. Please let us know in advance so we can accommodate your needs.",
  ],
];


function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={{ width: 18, height: 18, flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ServiceIcon({ type }) {
  const style = { width: 28, height: 28 };

  if (type === "open") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
        <path d="M14 18V6a2 2 0 00-2-2H4a2 2 0 00-2 2v11a1 1 0 001 1h2" />
        <path d="M14 18h6a1 1 0 001-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0016.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    );
  }

  if (type === "home") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={style}>
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function QuoteSection() {
  return (
    <section id="quote" style={{ padding: "var(--section-padding) 2rem", background: "var(--color-white)" }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <div className="section-header reveal revealed">
          <span className="section-tag">Free Quote</span>
          <h2 className="section-title">Get Your Shipping Estimate</h2>
          <div className="section-line" />
        </div>

        <div className="contact-form reveal revealed" style={{ boxShadow: "var(--shadow-lg)" }}>
          <form id="shippingQuoteForm" action="/api/contact.php" method="POST">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" name="fullName" id="fullName" required placeholder="Full name" minLength={1} maxLength={100} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" id="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input type="tel" name="phone" id="phone" required placeholder="(555) 123-4567" minLength={10} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pickupZip">Pickup ZIP Code *</label>
                <input type="text" name="pickupZip" id="pickupZip" required placeholder="10001" />
              </div>
              <div className="form-group">
                <label htmlFor="deliveryZip">Delivery ZIP Code *</label>
                <input type="text" name="deliveryZip" id="deliveryZip" required placeholder="90210" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="vehicleInfo">Vehicle Information</label>
              <input type="text" name="vehicleInfo" id="vehicleInfo" placeholder="Year, Make, Model (e.g., 1967 Ford Mustang)" />
            </div>

            <div className="form-group">
              <label htmlFor="transportType">Transport Type</label>
              <select name="transportType" id="transportType" defaultValue="Enclosed">
                <option value="Enclosed">Enclosed (Recommended)</option>
                <option value="Open">Open</option>
                <option value="Not Sure">Not Sure - Please Advise</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Notes</label>
              <textarea name="message" id="message" rows={3} placeholder="Any special requirements or questions?" />
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Request Quote
              <ArrowIcon />
            </button>

            <p className="form-note">We typically respond with quotes within 24 hours</p>
          </form>
        </div>
      </div>
    </section>
  );
}


export default function ShippingPage() {
  return (
    <>
      <main role="main">
        <Hero />
        <ServicesSection services={services} ServiceIcon={ServiceIcon} CheckIcon={CheckIcon}/>
        <ProcessSection processSteps={processSteps} />
        <FaqSection faqs={faqs} />
        <QuoteSection />
      </main>
    </>
  );
}
