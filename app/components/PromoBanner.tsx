import React from 'react';
import Link from 'next/link';

export default function PromoBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-2xl md:text-3xl font-black text-white">Summer Sale: 30% Off Your First 3 Months!</h3>
        <Link href="/pricing" className="rounded-full bg-white text-black font-bold px-8 py-3 text-base shadow hover:bg-gray-100 transition mt-2 md:mt-0">See Pricing</Link>
      </div>
    </section>
  );
} 