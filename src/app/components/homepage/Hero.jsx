// components/Hero.jsx

"use client";

import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="20"
      height="20"
    >
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
      />

      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="hero"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <div className="hero-bg" />

      <div className="hero-content">
        <span className="hero-tag">
          Premium Inventory
        </span>

        <h1
          className="hero-title"
          itemProp="headline"
        >
          Drive Your Passion Beyond Limits
        </h1>

        <p className="hero-description">
          Discover a curated selection of modern
          performance trucks and premium vehicles
          in Savannah, GA.
        </p>

        <div className="hero-buttons">
          <Link
            href="/inventory"
            className="btn btn-primary btn-lg"
          >
            Browse Inventory

            <ArrowIcon />
          </Link>

          <Link
            href="/contact"
            className="btn btn-outline-light btn-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <a
        href="#featured"
        className="scroll-indicator"
      >
        <span>Scroll</span>

        <div className="scroll-indicator-icon" />
      </a>
    </section>
  );
}