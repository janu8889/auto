// components/contact/ContactSection.jsx

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactSection({ subjectOptions, MailIcon, LocationIcon, ClockIcon, ArrowIcon }) {
  return (
    <section
      style={{
        padding: "var(--section-padding) 2rem",
        background: "var(--color-bg-primary)",
      }}
    >
      <div className="container">
        <div className="section-header reveal revealed">
          <span className="section-tag">Get In Touch</span>

          <h1 className="section-title">
            We&apos;d Love to Hear From You
          </h1>

          <div className="section-line" />

          <p className="section-subtitle">
            Whether you have a question about a vehicle or need
            assistance, our team is here to help
          </p>
        </div>

        <div className="contact-grid reveal revealed">
          <ContactInfo MailIcon={MailIcon} LocationIcon={LocationIcon} ClockIcon={ClockIcon}/>
          <ContactForm subjectOptions={subjectOptions} ArrowIcon={ArrowIcon} />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;