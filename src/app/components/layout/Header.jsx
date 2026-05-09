import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/inventory" className="nav-link">Inventory</Link>
          <Link href="/about" className="nav-link">About</Link>
        </div>

        <Link href="/" className="logo" aria-label="K&E Auto Inc home">
          <img src="/homepage/logo.png" alt="K&E Auto Inc" className="logo-image" />
        </Link>

        <div className="nav-right">
          <Link href="/shipping" className="nav-link">Shipping</Link>
          <Link href="/sell" className="nav-link">Sell</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <a href="tel:2185050788" className="nav-link nav-cta">218-505-0788</a>
        </div>
      </div>
    </nav>
  );
}
