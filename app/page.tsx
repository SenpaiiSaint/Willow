"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon, BuildingOfficeIcon, UserGroupIcon, DocumentTextIcon, CreditCardIcon } from '@heroicons/react/24/outline'
import Navigation from './components/Navigation';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      name: 'Property Management',
      description: 'Easily manage your properties, track maintenance requests, and handle tenant communications all in one place.',
      icon: BuildingOfficeIcon,
      stats: '98% satisfaction rate',
    },
    {
      name: 'Tenant Portal',
      description: 'Provide your tenants with a secure portal to pay rent, submit maintenance requests, and communicate with property managers.',
      icon: UserGroupIcon,
      stats: '5000+ active tenants',
    },
    {
      name: 'Lease Management',
      description: 'Create, track, and manage leases digitally. Store all lease documents securely and access them anytime.',
      icon: DocumentTextIcon,
      stats: '100% digital process',
    },
    {
      name: 'Payment Processing',
      description: 'Accept rent payments online, track payment history, and automate late fee calculations.',
      icon: CreditCardIcon,
      stats: '80% reduction in late payments',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Property Manager",
      image: "/testimonial-1.jpg",
      text: "RentPlatform has transformed how we manage our properties. The automated rent collection and reminders have reduced late payments by 80%.",
      rating: 5,
      company: "Johnson Properties",
    },
    {
      id: 2,
      name: "Marlene Thomas",
      role: "Real Estate Investor",
      image: "/testimonial-2.jpg",
      text: "The reporting features are incredible. I can track all my properties' performance in real-time and make data-driven decisions.",
      rating: 5,
      company: "Aura Investments",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Property Owner",
      image: "/testimonial-3.jpg",
      text: "Managing multiple properties used to be a headache. Now everything is automated and organized in one place.",
      rating: 5,
      company: "Rodriguez Estates",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
          <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
            <div className="px-6 lg:px-0 lg:pt-4">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                  >
                    Modern Property Management
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-lg leading-8 text-gray-600"
                  >
                    Streamline your property management with our comprehensive platform. Handle properties, tenants, leases, and payments all in one place.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 flex items-center gap-x-6"
                  >
                    <Link
                      href="/register"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </Link>
                    <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                      Sign in <span aria-hidden="true">→</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Property Management
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform provides all the tools you need to manage your properties efficiently and effectively.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`flex flex-col p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all ${
                    activeFeature === index ? "ring-2 ring-indigo-500" : ""
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-4 text-sm font-semibold text-indigo-600">{feature.stats}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Property Managers
            </p>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
              >
                <div className="flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="mt-6 text-gray-900">
                  <p>{testimonial.text}</p>
                </blockquote>
                <div className="mt-4 flex items-center gap-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
          >
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start managing your properties today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of property managers who trust our platform to handle their rental properties.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/register"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link href="/login" className="text-sm font-semibold leading-6 text-white">
                Sign in <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-32">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/privacy" className="text-gray-400 hover:text-gray-500">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-500">
              Terms
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-gray-500">
              Contact
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} RentPlatform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
