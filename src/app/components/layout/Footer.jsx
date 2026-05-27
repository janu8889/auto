// components/Footer.jsx

"use client";

import Link from "next/link";
import Image from "next/image";

import logoAsset from "@/app/homepage-assets/logo.png";

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

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="18"
      height="18"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="18"
      height="18"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
  
    >
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            
           

            <div className="footer-social" />
          </div>

          <div className="footer-column">
            <h4>Explore</h4>

            <ul className="footer-links">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/inventory">
                  Inventory
                </Link>
              </li>

              <li>
                <Link href="/sold">
                  Sold
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/shipping">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>

            <ul className="footer-links">
              <li>
                <Link href="/contact">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/shipping#faq">
                  Shipping FAQ
                </Link>
              </li>

              <li>
                <Link href="/privacy">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>

            <div className="footer-contact-item">
              <LocationIcon />

              <span>
                3595 Buckhead Loop NE
                <br />
                Atlanta, GA 31126
              </span>
            </div>

            <div className="footer-contact-item">
              <PhoneIcon />

              <a href="tel:+14044521218">
                (404) 452-1218
              </a>
            </div>

            <div className="footer-contact-item">
              <MailIcon />

              <a href="mailto:sales@kashautomotive.com">
                sales@kashautomotive.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link href="/privacy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>
          </div>

          <p className="footer-copyright">
            © 2026 Kash Automotive Group LLC.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}