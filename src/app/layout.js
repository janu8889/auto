import "./homepage.css";

export const metadata = {
  title: "K&E Auto Inc | Premium Automobiles in Hermantown, MN",
  description:
    "Discover a curated selection of premium vehicles at K&E Auto Inc in Hermantown, MN.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
