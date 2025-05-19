import React from 'react';
import { motion } from 'framer-motion';
import {  nippo } from '../fonts';


const features = [
  {
    title: 'Automated Rent Collection',
    description: 'Collect rent online, on time, every month. Tenants pay with ease, and you get paid faster.',
    image: '/gif/gif1.gif', 
  },
  {
    title: 'Tenant Screening',
    description: 'Screen tenants with background and credit checks. Make informed decisions with confidence.',
    image: '/gif/gif2.gif',
  },
  {
    title: 'Maintenance Requests',
    description: 'Track and manage maintenance with ease. Tenants submit requests, you stay organized.',
    image: '/gif/gif3.gif',
  },
  {
    title: 'Financial Reports',
    description: 'Get detailed financial insights and reports. Stay on top of your property finances.',
    image: '/gif/gif4.gif',
  },
];

export default function FeaturesCarousel() {
  return (
    <section className="py-24 md:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className={`${nippo.className} text-3xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center`}>Powerful Features for Owners & Tenants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg p-8 transition-transform border border-gray-100 flex flex-col items-start h-full relative overflow-hidden"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {/* Feature Image */}
              <div className="w-full flex items-center justify-center mb-4">
                <img
                  src={feature.image || '/gif/placeholder.gif'}
                  alt={feature.title}
                  className="w-40 h-40 object-contain"
                  loading="lazy"
                />
              </div>
              {/* Title with animated underline */}
              <span className="relative mb-2">
                <span className="text-xl md:text-2xl font-bold text-gray-900 pr-6">
                  {feature.title}
                </span>
                <motion.span
                  className="absolute left-0 -bottom-1 h-0.5 bg-indigo-600"
                  variants={{ rest: { width: 0 }, hover: { width: '100%' } }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'block' }}
                />
              </span>
              {/* Animated arrow */}
              <motion.span
                className="ml-2 text-2xl text-indigo-600 group-hover:text-indigo-800 transition-colors absolute top-8 right-8"
                variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                &rarr;
              </motion.span>
              <p className="text-gray-600 text-base font-semibold text-left mt-4">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 