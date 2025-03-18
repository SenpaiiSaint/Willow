// app/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">RentPay</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <motion.main
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Simplify Your Rent Payments
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            A seamless platform for managing and tracking your rent payments.
          </p>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/dashboard"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="p-6 bg-white shadow rounded"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Manage Invoices
            </h3>
            <p className="text-gray-600">
              Generate and track invoices with real-time updates.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white shadow rounded"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Safe and reliable transactions with robust security.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white shadow rounded"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Instant Notifications
            </h3>
            <p className="text-gray-600">
              Get immediate updates on payment statuses and invoice settlements.
            </p>
          </motion.div>
        </section>

        {/* About Our Platform Section */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-gray-900 mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Our Platform
          </motion.h3>
          <motion.p
            className="text-gray-600 mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            RentPay is designed to make rent payments hassle-free and efficient.
            Our platform automates invoice generation, provides secure payment
            processing, and offers real-time notifications to ensure you never
            miss a due date.
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            With a user-friendly interface and robust backend, RentPay is the smart
            solution for property managers and tenants alike.
          </motion.p>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-gray-900 mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Testimonials
          </motion.h3>
          <div className="space-y-8">
            <motion.div
              className="p-6 bg-white shadow rounded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-600 italic">
                "RentPay has completely transformed the way we manage rent payments.
                The interface is intuitive and the real-time updates have made a huge
                difference in our operations."
              </p>
              <p className="mt-2 text-gray-900 font-semibold">
                - Alex Johnson
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white shadow rounded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-600 italic">
                "I love how secure and efficient the payment process is. RentPay
                offers a seamless experience for both tenants and property managers."
              </p>
              <p className="mt-2 text-gray-900 font-semibold">
                - Maria Rodriguez
              </p>
            </motion.div>
          </div>
        </section>
      </motion.main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="mt-4">
            &copy; {new Date().getFullYear()} RentPay. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed by{" "}
            <a
              href="https://www.blueskylabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              BlueSky Labs
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
