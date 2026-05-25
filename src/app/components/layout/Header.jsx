// components/Header.jsx

"use client";

import Link from "next/link";
import Image from "next/image";

import logoAsset from "@/app/homepage-assets/logo.png";

const navLeft = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "About", href: "/about" },
];

const navRight = [
  { label: "Shipping", href: "/shipping" },
  { label: "Contact", href: "/contact" },
];

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="18"
      height="18"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export default function Header() {
  return (
    <>
      <nav
        id="navbar"
        className="navbar"
      >
        <div className="nav-container">
          <div className="nav-left">
            {navLeft.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  item.active
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/" className="logo">
            <Image
              src={logoAsset}
              alt="Kash Automotive Group LLC"
              className="logo-image"
              priority
              style={{
                "--desktop-logo-height": "100px",
                "--mobile-logo-height": "90px",
                height: "var(--desktop-logo-height)",
                width: "auto",
              }}
            />
          </Link>

          <div className="nav-right">
            {navRight.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="tel:2185050788"
              className="nav-cta"
              aria-label="Call 218-505-0788"
            >
              <PhoneIcon />
              218-505-0788
            </a>
          </div>

          <button
            className="mobile-menu-btn sf-hidden"
            id="mobileMenuBtn"
            aria-label="Toggle menu"
            type="button"
          />
        </div>
      </nav>

      <div
        className="mobile-nav sf-hidden"
        id="mobileNav"
        role="navigation"
        aria-label="Mobile navigation"
      />
    </>
  );
}