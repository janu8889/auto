import "./homepage.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://zmotorscars.com"),

  title: {
    default: "Z Motors | Premium Vehicles",
    template: "%s | Z Motors",
  },

  description:
    "Discover a curated selection of premium vehicles at Z Motors in Atlanta, GA.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Z Motors | Premium Vehicles",
    description:
      "Premium cars, trucks, and SUVs in Atlanta, GA.",
    url: "https://zmotorscars.com",
    siteName: "Z Motors",
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
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}