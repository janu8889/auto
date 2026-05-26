"use client";

// components/shipping/FaqSection.jsx

import { useState } from "react";

function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      style={{
        background: "var(--color-bg-primary)",
      }}
    >
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-header reveal revealed">
          <span className="section-tag">FAQ</span>

          <h2 className="section-title">Common Questions</h2>

          <div className="section-line" />
        </div>

        <div
          className="reveal revealed"
          style={{
            background: "var(--color-white)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-sm)",
            overflow: "hidden",
          }}
        >
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={question}
                className="faq-item"
                style={{
                  borderBottom:
                    index === faqs.length - 1
                      ? undefined
                      : "1px solid var(--color-border)",
                }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: "100%",
                    padding: "1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  type="button"
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: "var(--color-navy)",
                    }}
                  >
                    {question}
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      width: 20,
                      height: 20,
                      transition: "transform 0.3s ease",
                      color: "var(--color-gold)",
                      transform: isOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className="faq-answer"
                  style={{
                    maxHeight: isOpen ? 500 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 1.5rem 1.5rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.8,
                    }}
                  >
                    {answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;