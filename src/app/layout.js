import "./homepage.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata = {
  metadataBase: new URL("https://kashautomotive.com"),

  title: {
    default: "Kash Automotive Group LLC | Premium Vehicles",
    template: "%s | Kash Automotive Group LLC",
  },

  description:
    "Discover a curated selection of premium vehicles at Kash Automotive Group LLC in Atlanta, GA.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Kash Automotive Group LLC | Premium Vehicles",
    description:
      "Premium cars, trucks, and SUVs in Atlanta, GA.",
    url: "https://kashautomotive.com",
    siteName: "Kash Automotive Group LLC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", type: "image/png" },
      { rel: "icon", url: "/favicon-16x16.png", type: "image/png" },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
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
