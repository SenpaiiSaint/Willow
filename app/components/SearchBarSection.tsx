import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SearchBarSection() {
  const [query, setQuery] = useState('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: handle search
    alert(`Searching for: ${query}`);
  };
  return (
    <section className="w-full bg-gray-50 py-16 border-b border-gray-100">
      <div className="px-0 flex flex-col md:flex-row items-center md:items-stretch gap-12">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0 pl-6 md:pl-12 items-start">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 text-left">Find your next rental property</h2>
          <p className="text-base md:text-lg text-gray-600 font-light text-left">Search our database of modern apartments, homes, and commercial spaces. Discover the perfect property for your needs.</p>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center md:items-end pr-6 md:pr-12">
          <form
            onSubmit={handleSearch}
            className="w-full max-w-md flex gap-0 mb-4"
          >
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* Magnifying glass icon (Heroicon) */}
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by city, address, or property type"
                className="block w-full pl-10 pr-4 h-14 rounded-none border-0 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-black font-light text-lg border border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="h-14 rounded-none bg-black text-white font-bold px-8 text-lg border border-l-0 border-gray-300 hover:bg-gray-900 transition"
            >
              Search
            </button>
          </form>
          <p className="text-gray-500 text-base font-light mb-2">Browse thousands of verified listings managed by trusted landlords.</p>
          <motion.span
            whileHover="hover"
            className="inline-block border-b-2 border-black pb-1"
            initial="rest"
            animate="rest"
          >
            <Link href="#" className="text-base text-black hover:text-gray-700 font-medium">
              <span className="inline-flex items-center">
                Advanced search options
                <motion.span
                  className="ml-1 inline-block"
                  variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <svg className="h-4 w-4 text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </span>
            </Link>
          </motion.span>
        </div>
      </div>
    </section>
  );
} 