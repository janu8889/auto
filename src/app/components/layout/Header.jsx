"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logoAsset from "@/app/homepage-assets/logo.png";

const navLeft = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "About", href: "/about" },
];

const navRight = [
  { label: "Sold", href: "/sold" },
  { label: "Shipping", href: "/shipping" },
  { label: "Contact", href: "/contact" },

];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav id="navbar" className="navbar">
        <div className="nav-container">

          {/* LEFT */}
          <div className="nav-left">
            {navLeft.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          {/* LOGO */}
          <Link href="/" className="logo">
            <Image
              src={logoAsset}
              alt="logo"
              className="logo-image"
              priority
              style={{
                height: "100px",
                width: "auto",
              }}
            />
          </Link>

          {/* RIGHT */}
          <div className="nav-right">
            {navRight.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}

            <a href="tel:+14044521218" className="nav-cta">
              <PhoneIcon />
              (404) 452-1218
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <span style={{ width: 20, height: 2, background: "#000" }} />
            <span style={{ width: 20, height: 2, background: "#000" }} />
            <span style={{ width: 20, height: 2, background: "#000" }} />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="mobile-nav">
          
          {/* PHONE TOP */}
          <a
            href="tel:+14044521218"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 30,
              color: "#fff",
            }}
          >
            <PhoneIcon />
            (404) 452-1218
          </a>

          {/* LINKS */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[...navLeft, ...navRight].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ fontSize: 20, color: "#fff" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}