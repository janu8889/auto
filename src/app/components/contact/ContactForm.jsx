// components/contact/ContactForm.jsx

import Link from "next/link";

function ContactForm({ subjectOptions, ArrowIcon }) {
  return (
    <div className="contact-form">
      <h3>Send Us a Message</h3>

      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>

          <input
            type="text"
            name="fullName"
            id="fullName"
            required
            autoComplete="name"
            placeholder="Full name"
            minLength={1}
            maxLength={100}
            title="Enter at least 1 character"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>

            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>

            <input
              type="tel"
              name="phone"
              id="phone"
              required
              autoComplete="tel"
              placeholder="(555) 123-4567"
              minLength={10}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>

          <select
            name="subject"
            id="subject"
            defaultValue="General Inquiry"
          >
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message *</label>

          <textarea
            name="message"
            id="message"
            rows={5}
            required
            placeholder="How can we help you?"
          />
        </div>

        <div className="consent-group">
          <label>
            <input
              type="checkbox"
              name="consent"
              required
              defaultChecked
              value="on"
            />

            <span>
              I consent to Kash Automotive Group LLC contacting me regarding my inquiry.{" "}
              <small>
                <Link href="/privacy">Privacy Policy</Link>
              </small>
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block btn-lg"
        >
          Send Message
          <ArrowIcon />
        </button>

        <p className="form-note">
          We aim to respond within 24 hours
        </p>
      </form>
    </div>
  );
}

export default ContactForm;