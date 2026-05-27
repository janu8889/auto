"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

export default function VehicleGallery({ images = [] }) {

  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images.length) return null;

  const prevImage = () => {
    setActive((a) => (a === 0 ? images.length - 1 : a - 1));
  };

  const nextImage = () => {
    setActive((a) => (a === images.length - 1 ? 0 : a + 1));
  };

  return (
    <>
      <div className="vehicle-gallery">
        <div className="gallery-main">
          <img
            src={images[active]}
            alt=""
            onClick={() => setLightboxOpen(true)}
            style={{ cursor: "zoom-in" }}
          />

          <button onClick={prevImage}>
            <ChevronLeftIcon />
          </button>

          <button onClick={nextImage}>
            <ChevronRightIcon />
          </button>
        </div>

        <div className="gallery-thumbnails">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)}>
              <img src={img} alt="" />
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="gallery-lightbox"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="gallery-lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
          >
            ✕
          </button>

          <button
            className="gallery-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeftIcon />
          </button>

          <img
            className="gallery-lightbox-image"
            src={images[active]}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="gallery-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </>
  );
}
