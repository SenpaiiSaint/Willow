import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from './fonts';
import Footer from './components/Footer';


export const metadata: Metadata = {
  title: "Willow: Real Estate, Property Management, and More",
  description: "Streamline your property management with our modern platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <body className={`${satoshi.className} antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
