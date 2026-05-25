import "./homepage.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: "Kash Automotive Group LLC | Premium Automobiles in Atlanta, GA",
  description:
    "Discover a curated selection of premium vehicles at Kash Automotive Group LLC in Atlanta, GA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
