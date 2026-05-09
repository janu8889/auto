import { PageHeader } from "../components/KandeShared";

const principles = [
  ["Integrity", "Complete transparency in every vehicle, conversation, and transaction."],
  ["Expertise", "A focused understanding of premium modern vehicles and specialty performance trucks."],
  ["Excellence", "A curated standard for presentation, condition, and client care."],
];

export default function AboutPage() {
  return (
    <div className="homepage">
      <main>
        <PageHeader tag="Est. 2008" title="Our Story" subtitle="A legacy built on passion, integrity, and excellence" />

        <section>
          <div className="story-grid compact">
            <div className="story-image">
              <img src="/homepage/showroom.jpg" alt="K&E Auto Inc showroom" />
            </div>
            <div className="story-content">
              <span className="section-tag">The Beginning</span>
              <h2 className="section-title">A Passion Born of Purpose</h2>
              <div className="section-line" />
              <p className="story-quote">
                &ldquo;Every modern automobile represents innovation and excellence. Our mission is to connect you with your perfect vehicle.&rdquo;
              </p>
              <p>
                Founded in 2008, K&E Auto Inc emerged from a deep-rooted passion for automotive excellence. What began
                as a personal vision quickly evolved into a trusted destination for drivers across the nation.
              </p>
              <p>
                Today, we continue that tradition, combining decades of expertise with an unwavering commitment to quality.
                Each vehicle in our inventory is meticulously vetted.
              </p>
            </div>
          </div>
        </section>

        <section className="section-dark">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Our Philosophy</span>
              <h2 className="section-title">Guiding Principles</h2>
              <div className="section-line" />
            </div>
            <div className="feature-grid">
              {principles.map(([title, text]) => (
                <article className="feature-card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
