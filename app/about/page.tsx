'use client';

import HeroSection from '@/app/components/aboutpage/HeroSection';
import StatsSection from '@/app/components/aboutpage/StatsSection';
import ValuesSection from '@/app/components/aboutpage/ValuesSection';
import OfficesSection from '@/app/components/aboutpage/OfficesSection';


export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <HeroSection />
      <StatsSection />
      <ValuesSection />
      <OfficesSection />
    </main>
  );
}
