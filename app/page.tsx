"use client";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeaturesCarousel from "./components/FeaturesCarousel";
import FAQAccordion from "./components/FAQAccordion";
import PreFooter from "./components/PreFooter";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-white min-h-screen flex flex-col gap-0">
        {/* Hero Section */}
        <section className="w-full">
          <HeroSection />
        </section>
        {/* Features Carousel */}
        <section className="w-full">
          <FeaturesCarousel />
        </section>
        {/* FAQ Accordion */}
        <section className="w-full">
          <FAQAccordion />
        </section>
        {/* PreFooter */}
        <section className="w-full bg-gray-900">
          <PreFooter />
        </section>
      </main>
    </>
  );
}
