import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-20 md:py-32">
      <img
        src="/hero-bg.jpg"
        alt="Modern property management"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white py-24 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">Assets. Renters.
          <br />
          Revenue. Upkeep
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 drop-shadow-md">Modern property management, made simple. Manage, rent, and grow—all in one place.</p>
        <Link href="/register" className="inline-block rounded-xl bg-white text-black font-bold px-8 py-3 text-xl shadow-xl hover:bg-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Get Started</Link>
      </div>
    </section>
  );
} 