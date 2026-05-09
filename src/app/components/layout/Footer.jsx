import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img src="/homepage/footer-logo.png" alt="K&E Auto Inc" className="footer-logo-image" />
            </Link>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/inventory">Inventory</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/shipping">Shipping</Link></li>
              <li><Link href="/sell">Sell Your Car</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/shipping#faq">Shipping FAQ</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <div className="footer-contact-item">Norway Pines Pl<br />Hermantown, MN 55811</div>
            <div className="footer-contact-item"><a href="tel:2185050788">218-505-0788</a></div>
            <div className="footer-contact-item"><a href="mailto:sales@kandeautosales.com">sales@kandeautosales.com</a></div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <p className="footer-copyright">© 2026 K&E Auto Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
