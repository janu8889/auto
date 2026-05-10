import { testimonials } from "./homepageData";
import { StarIcon } from "./HomepageIcons";

export default function TestimonialsSection() {
  return (
    <section className="section-dark" id="shipping">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Feedback</span>
          <h2 className="section-title">Trusted Nationwide</h2>
          <div className="section-line" />
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.vehicle}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
