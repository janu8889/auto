import { ArrowIcon } from "./HomepageIcons";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <span className="hero-tag">Premium Automobiles</span>
        <h1 className="hero-title">K&E Auto Inc</h1>
        <p className="hero-description">
          Discover a curated selection of modern performance trucks and premium vehicles in Hermantown, MN.
        </p>
        <div className="hero-buttons">
          <a href="#inventory" className="btn btn-primary btn-lg">
            View Inventory <ArrowIcon />
          </a>
          <a href="#contact" className="btn btn-outline-light btn-lg">
            Contact Us
          </a>
        </div>
      </div>
      <a href="#inventory" className="scroll-indicator">
        <span>Scroll</span>
        <span className="scroll-indicator-icon" />
      </a>
    </section>
  );
}
