import "./homepage.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Script from "next/script";

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

        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1638192400599872');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1638192400599872&ev=PageView&noscript=1"
          />
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}