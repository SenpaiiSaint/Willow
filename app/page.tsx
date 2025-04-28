"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "Automated Rent Collection",
      description:
        "Set up recurring payments and automated reminders to ensure timely rent collection.",
      icon: "💰",
      stats: "98% on-time payments",
    },
    {
      title: "Tenant Management",
      description:
        "Easily manage tenant information, lease agreements, and communication in one place.",
      icon: "👥",
      stats: "5000+ active tenants",
    },
    {
      title: "Payment Tracking",
      description:
        "Track all payments, generate receipts, and maintain detailed financial records.",
      icon: "📊",
      stats: "100% payment visibility",
    },
    {
      title: "Automated Reminders",
      description:
        "Send automated payment reminders to tenants and receive notifications for late payments.",
      icon: "⏰",
      stats: "80% reduction in late payments",
    },
    {
      title: "Financial Reporting",
      description:
        "Generate comprehensive reports and analytics for better financial management.",
      icon: "📈",
      stats: "Real-time analytics",
    },
    {
      title: "Secure Payments",
      description:
        "Bank-level security for all transactions with multiple payment options.",
      icon: "🔒",
      stats: "100% secure transactions",
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
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled ? "bg-white/80 shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 flex items-center gap-2"
            >
              <span className="text-4xl font-bold bg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                RentPay
              </span>
            </Link>
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {["About Us", "Features", "Pricing", "Contact", "Dashboard"].map((item) => (
              <Link
                key={item}
                href={item === "Dashboard" ? "/dashboard" : item === "About Us" ? "/about-us" : `/${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            onClick={() => window.location.href = "/dashboard"}
          >
            Dashboard
          </motion.button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="absolute inset-0 bg-black/5" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Streamline Your Property Management with{" "}
                <span className="text-blue-600">Smart Automation</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Automate rent collection, manage tenants, and track payments
                with our secure platform. Built for property managers who value
                efficiency and reliability.
              </motion.p>
              <motion.div
                className="flex flex-col md:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <input
                  type="text"
                  placeholder="Enter your email to get started..."
                  className="flex-1 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Started Free
                </motion.button>
              </motion.div>
              <motion.div
                className="mt-8 flex items-center gap-4 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex -space-x-2">
                  {[
                    '/images/profiles/profile1.jpg',
                    '/images/profiles/profile2.jpg',
                    '/images/profiles/profile3.jpg',
                    '/images/profiles/profile4.jpg'
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white"
                    >
                      <Image
                        src={src}
                        alt={`Profile ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                  ))}
                </div>
                <span>Trusted by 1000+ property managers</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">
                Powerful Features for Property Managers
              </h2>
              <p className="text-gray-600">
                Everything you need to manage your properties efficiently
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer ${
                    activeFeature === index ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="text-blue-600 font-semibold">
                    {feature.stats}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">
                Simple Setup, Powerful Results
              </h2>
              <p className="text-gray-600">
                Get started in minutes and see the difference
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Sign Up",
                  description: "Create your account and add your properties",
                },
                {
                  step: "2",
                  title: "Add Tenants",
                  description:
                    "Invite tenants and set up their payment methods",
                },
                {
                  step: "3",
                  title: "Automate",
                  description: "Set up automated rent collection and reminders",
                },
                {
                  step: "4",
                  title: "Manage",
                  description:
                    "Track payments and manage your properties efficiently",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-600">
                Join thousands of satisfied property managers
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <motion.figure
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Streamline Your Property Management?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of property managers who have simplified their
                rent collection and tenant management.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-blue-600">RentPay</span>
              </h3>
              <p className="text-gray-600">
                Your trusted partner in property management and rent collection.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "Features", "Pricing", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "About Us" ? "/about-us" : `/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Email: support@rentplatform.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Business Ave, Suite 100</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} RentPlatform. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
