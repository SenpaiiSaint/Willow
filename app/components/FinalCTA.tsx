import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-4">Start your free website trial today</h2>
      <p className="text-lg md:text-2xl font-light mb-8">Experience modern property management with no commitment.</p>
      <Link href="/register" className="inline-block rounded-full bg-white text-black font-bold px-10 py-4 text-lg shadow-lg hover:bg-gray-100 transition">Get Started</Link>
    </section>
  );
} 