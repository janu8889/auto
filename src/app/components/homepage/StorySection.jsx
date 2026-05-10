export default function StorySection() {
  return (
    <section className="story-section" id="story">
      <div className="story-grid">
        <div className="story-image">
          <img src="/homepage/showroom.jpg" alt="K&E Auto Inc showroom" />
        </div>
        <div className="story-content">
          <span className="section-tag">Excellence</span>
          <h2 className="section-title">Modern Luxury Defined</h2>
          <div className="section-line" />
          <p className="story-quote">&ldquo;Uniting performance with prestige.&rdquo;</p>
          <p>
            For over 18 years, K&E Auto Inc has been the premier destination for drivers seeking the pinnacle of
            automotive engineering. Our inventory features hand-selected modern vehicles that represent the ultimate
            in performance, technology, and design.
          </p>
          <p>
            Every vehicle tells a story. Our commitment is to preserve these stories while connecting passionate
            enthusiasts with the cars and trucks of their dreams.
          </p>
          <div className="story-features">
            <span>Verified History</span>
            <span>Nationwide Shipping</span>
            <span>Premium Selection</span>
            <span>Personal Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
