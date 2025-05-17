import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Automated Rent Collection',
    description: 'Collect rent online, on time, every month. Tenants pay with ease, and you get paid faster.',
  },
  {
    title: 'Tenant Screening',
    description: 'Screen tenants with background and credit checks. Make informed decisions with confidence.',
  },
  {
    title: 'Maintenance Requests',
    description: 'Track and manage maintenance with ease. Tenants submit requests, you stay organized.',
  },
  {
    title: 'Financial Reports',
    description: 'Get detailed financial insights and reports. Stay on top of your property finances.',
  },
];

export default function FeaturesCarousel() {
  return (
    <section className="py-20 bg-[#f7f6f3]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">
        {/* Image on the left */}
        <div className="flex-1 flex items-center justify-center w-full lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="/features-visual.jpg"
            alt="Platform features visual"
            className="w-full max-w-lg h-auto object-cover rounded-none shadow-lg"
            style={{ aspectRatio: '4/3' }}
          />
        </div>
        {/* Features List on the right */}
        <div className="flex-1 flex flex-col justify-center lg:justify-end w-full lg:w-1/2">
          <div className="flex flex-col gap-10 w-full md:w-2/3 lg:w-full">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="group cursor-pointer"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative">
                    <span className="text-xl md:text-2xl font-bold text-gray-900 pr-6">
                      {feature.title}
                    </span>
                    {/* Animated underline */}
                    <motion.span
                      className="absolute left-0 -bottom-1 h-0.5 bg-black"
                      variants={{ rest: { width: 0 }, hover: { width: '100%' } }}
                      transition={{ duration: 0.3 }}
                      style={{ display: 'block' }}
                    />
                  </span>
                  {/* Animated arrow */}
                  <motion.span
                    className="ml-2 text-2xl text-black"
                    variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    &rarr;
                  </motion.span>
                </div>
                <p className="text-gray-600 text-base font-light text-left mt-2">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 