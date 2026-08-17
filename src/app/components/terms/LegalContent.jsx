// components/terms/LegalContent.jsx

import LegalBlock from "./LegalBlock";

function LegalContent({ legalSections }) {
  return (
    <section className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Terms and Conditions</h1>

          <p className="last-updated">
            Last Updated: May 3, 2026
          </p>

          {legalSections.map((section) => (
            <div
              className="legal-section"
              key={section.title}
            >
              <h2>{section.title}</h2>

              {section.blocks.map((block, index) => (
                <LegalBlock
                  block={block}
                  key={section.title + "-" + index}
                />
              ))}
            </div>
          ))}

          <div className="legal-section">
            <h2>17. Contact Information</h2>

            <p>
              For questions about these Terms,
              please contact us:
            </p>

            <div className="contact-info">
              <p>
                <strong>VQ Motors</strong>
              </p>

              <p>102 Oglethorpe Professional Blvd, Savannah, GA 31406</p>

              <p>
                Phone:{" "}
                <a href="tel:4044295639">
                  (404) 429-5639
                </a>
              </p>

              <p>
                Email:{" "}
                <a href="mailto:sales@kashautomotive.com">
                  sales@kashautomotive.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegalContent;