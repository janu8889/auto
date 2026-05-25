// components/terms/Breadcrumb.jsx

import Link from "next/link";

function Breadcrumb() {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <ol>
          <li>
            <Link itemProp="item" href="/">
              <span itemProp="name">Home</span>
            </Link>
          </li>

          <li>
            <span itemProp="name">
              Terms and Conditions
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;