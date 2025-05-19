'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CheckIcon,
  XMarkIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon,
  Bars3Icon,
  XMarkIcon as XMarkIconOutline,
} from '@heroicons/react/24/outline';

type TierId = 'tier-starter' | 'tier-professional' | 'tier-enterprise';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter' as TierId,
    price: { monthly: '$49', annually: '$39' },
    description: 'Perfect for individual property owners with up to 5 properties.',
    features: [
      'Up to 5 properties',
      'Basic property management',
      'Tenant communication',
      'Payment processing',
      'Maintenance tracking',
      'Document storage',
      'Email support',
    ],
    mostPopular: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional' as TierId,
    price: { monthly: '$99', annually: '$79' },
    description: 'Ideal for growing property portfolios with up to 20 properties.',
    features: [
      'Up to 20 properties',
      'Advanced property management',
      'Tenant screening',
      'Automated rent collection',
      'Financial reporting',
      'Maintenance scheduling',
      'Priority support',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise' as TierId,
    price: { monthly: '$199', annually: '$159' },
    description: 'For large property portfolios with unlimited properties.',
    features: [
      'Unlimited properties',
      'Custom integrations',
      'Dedicated account manager',
      'API access',
      'Advanced analytics',
      'Custom reporting',
      '24/7 support',
    ],
    mostPopular: false,
  },
];

const features = [
  {
    name: 'Property Management',
    tiers: {
      'tier-starter': true,
      'tier-professional': true,
      'tier-enterprise': true,
    },
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Financial Reporting',
    tiers: {
      'tier-starter': true,
      'tier-professional': true,
      'tier-enterprise': true,
    },
    icon: ChartBarIcon,
  },
  {
    name: 'Security',
    tiers: {
      'tier-starter': true,
      'tier-professional': true,
      'tier-enterprise': true,
    },
    icon: ShieldCheckIcon,
  },
  {
    name: 'Time Management',
    tiers: {
      'tier-starter': true,
      'tier-professional': true,
      'tier-enterprise': true,
    },
    icon: ClockIcon,
  },
];

const sections = [
  { id: 'pricing-tiers', label: 'Pricing' },
  { id: 'feature-comparison', label: 'Features' },
  { id: 'faq', label: 'FAQ' },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [activeSection, setActiveSection] = useState('pricing-tiers');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.getBoundingClientRect().height;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'pricing-tiers');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="text-2xl font-bold text-indigo-600">
                  RentPlatform
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      activeSection === section.id
                        ? 'border-b-2 border-indigo-500 text-gray-900'
                        : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <Link
                href="/dashboard"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
              {/* Mobile menu button */}
              <div className="flex sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {mobileMenuOpen ? (
                    <XMarkIconOutline className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="space-y-1 pb-3 pt-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full px-3 py-2 text-left text-base font-medium ${
                  activeSection === section.id
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Choose the plan that best fits your property management needs. All plans include our core features.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative mt-2 flex rounded-lg bg-gray-100 p-0.5">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`relative rounded-md px-3 py-2 text-sm font-semibold ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annually')}
              className={`relative rounded-md px-3 py-2 text-sm font-semibold ${
                billingCycle === 'annually'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Annual billing
              <span className="ml-2 text-xs text-indigo-600">Save 20%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <section id="pricing-tiers" className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 ${
                tier.mostPopular ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              {tier.mostPopular && (
                <p className="text-center text-sm font-semibold text-indigo-600">
                  Most popular
                </p>
              )}
              <h3 className="mt-4 text-center text-lg font-semibold leading-8 text-gray-900">
                {tier.name}
              </h3>
              <p className="mt-4 text-center text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-center justify-center gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price[billingCycle]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /month
                </span>
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/dashboard"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 focus-visible:outline-indigo-600'
                }`}
              >
                Get started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="feature-comparison" className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Compare Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            All plans include our core features, with additional capabilities available in higher tiers.
          </motion.p>
        </div>
        <div className="mt-16">
          <div className="overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Feature
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.id}
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature) => (
                  <tr key={feature.name}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      <div className="flex items-center gap-x-3">
                        <feature.icon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                        {feature.name}
                      </div>
                    </td>
                    {tiers.map((tier) => (
                      <td
                        key={tier.id}
                        className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500"
                      >
                        {feature.tiers[tier.id] ? (
                          <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                        ) : (
                          <XMarkIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {[
              {
                question: 'Can I change my plan later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers.',
              },
              {
                question: 'Do you offer refunds?',
                answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our service.',
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{faq.answer}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-56">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
          >
            Join thousands of property owners who have simplified their management process with our platform.
          </motion.p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/dashboard"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start free trial
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
              Contact sales <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 