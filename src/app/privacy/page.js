/* eslint-disable @next/next/no-img-element */
import "./privacy.css";
import Link from "next/link";
import privacySections from "./privacyData";


function Breadcrumb() {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <ol >
          <li>
            <Link itemProp="item" href="/">
            <span itemProp="name">Home</span>
          </Link>
          </li>
          <li>
            <span itemProp="name">Privacy Policy</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

function LegalBlock({ block }) {
  if (block.type === "h3") return <h3>{block.text}</h3>;

  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item, index) => (
          <li key={typeof item === "string" ? item : item.strong + index}>
            {typeof item === "string" ? (
              item
            ) : (
              <>
                <strong>{item.strong}</strong> {item.text}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return <p>{block.text}</p>;
}

function LegalContent() {
  return (
    <section className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: May 3, 2026</p>

          {privacySections.map((section) => (
            <div className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.blocks.map((block, index) => (
                <LegalBlock block={block} key={section.title + "-" + index} />
              ))}
            </div>
          ))}

          <div className="legal-section">
            <h2>13. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <div className="contact-info">
              <p>
                <strong>Kash Automotive Group LLC</strong>
              </p>
              <p>3595 Buckhead Loop NE, Atlanta, GA 31126</p>
              <p>
                Phone: <a href="tel:2185050788">218-505-0788</a>
              </p>
              <p>
                Email: <a href="mailto:sales@kandeautosales.com">sales@kandeautosales.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function PrivacyPage() {
  return (
    <>
      <main role="main">
        <Breadcrumb />
        <LegalContent />
      </main>
    </>
  );
}
