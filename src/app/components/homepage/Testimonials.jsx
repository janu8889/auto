"use client";

import { useEffect, useState } from "react";

import avatarTyler from "../../homepage-assets/avatar-tyler.jpg";
import avatarJason from "../../homepage-assets/avatar-jason.jpg";
import avatarChris from "../../homepage-assets/avatar-chris.jpg";
import avatarMike from "../../homepage-assets/avatar-mike.jpg";
import avatarDaniel from "../../homepage-assets/avatar-daniel.jpg";
import avatarRobert from "../../homepage-assets/avatar-robert.jpg";

const testimonials = [
  {
    name: "Tyler Brooks",
    text: "I purchased a brand new F-350 from VQ Motors and the process was flawless from start to finish. They knew exactly what I needed for my work, helped me choose the right configuration, and had everything ready quickly. The truck showed up exactly as promised, no surprises. Solid team and real professionals.",
    image: avatarTyler,
  },
  {
    name: "Jason Miller",
    text: "We've sourced multiple new trucks through VQ Motors, including Sierra 3500HD models for our fleet. Every unit was exactly as described, and the communication throughout the process was excellent. If you're looking for heavy-duty trucks without wasting time, this is the place.",
    image: avatarJason,
  },
  {
    name: "Chris Alvarez",
    text: "Picked up a brand new GMC Sierra 3500HD and couldn't be happier. The team at VQ Motors made everything straightforward - no pressure, just clear information and fast execution. They even handled the delivery to my location without any issues. Highly recommend if you want it done right.",
    image: avatarChris,
  },
  {
    name: "Mike Thompson",
    text: "I purchased a Ford F-150 through VQ Motors and the entire experience was smooth and efficient. They helped me choose the right setup for both work and personal use, and everything was delivered exactly as promised. The truck arrived in perfect condition and ready to drive.",
    image: avatarMike,
  },
  {
    name: "Daniel Carter",
    text: "We sourced a Chevrolet Silverado 1500 through VQ Motors for our operations and were very impressed with the service. Communication was clear, pricing was transparent, and the vehicle matched all specifications. Delivery was fast and completely hassle-free.",
    image: avatarDaniel,
  },
  {
    name: "Robert Smith",
    text: "Bought a Ram 2500 through VQ Motors and the whole process was excellent. They kept me updated at every step and made sure the truck was exactly what I needed. It arrived on time and in perfect condition—couldn’t ask for better service.",
    image: avatarRobert,
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="section-header reveal revealed">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(3);

  // responsive count (IMPORTANT FIX)
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };

    updateCount();
    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  // dynamic visible items
  const visible = Array.from({ length: count }).map((_, i) => {
    return testimonials[(index + i) % testimonials.length];
  });

  return (
    <section
      className="section-dark"
    >
      <div className="container">
        <SectionHeader
          tag="Testimonials"
          title="What Our Customers Say"
          subtitle="Trusted by drivers across the nation"
        />

        <div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ alignItems: "stretch" }}
        >
          {visible.map((t) => (
            <div
              key={t.name}
              className="testimonial-card"
              style={{
                height: "100%",
              }}
            >
              <div className="testimonial-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <p className="testimonial-text">{t.text}</p>

              <div className="testimonial-author">
                <img
                  src={t.image.src}
                  alt={t.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}