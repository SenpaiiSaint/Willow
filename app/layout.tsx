import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { satoshi } from './fonts';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RentPlatform - Modern Property Management",
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
