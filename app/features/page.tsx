'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  BuildingOfficeIcon,
  DocumentTextIcon,
  CreditCardIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  DocumentCheckIcon,
  CalendarIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    id: 'property-management',
    title: 'Property Management',
    description: 'Efficiently manage all your properties in one place with our comprehensive dashboard.',
    benefits: [
      'Centralized property information',
      'Automated rent collection',
      'Maintenance tracking',
      'Document storage',
    ],
    image: '/images/tulum.jpg',
  },
  {
    id: 'lease-management',
    title: 'Lease Management',
    description: 'Streamline your lease agreements with digital signing and automated renewals.',
    icon: DocumentTextIcon,
    benefits: [
      'Digital lease agreements',
      'Automated renewals',
      'Customizable templates',
      'Electronic signatures',
    ],
    image: '/features/lease-management.jpg',
  },
  {
    id: 'payment-processing',
    title: 'Payment Processing',
    description: 'Secure and automated payment processing with multiple payment options.',
    icon: CreditCardIcon,
    benefits: [
      'Multiple payment methods',
      'Automated rent collection',
      'Payment tracking',
      'Late fee management',
    ],
    image: '/features/payment-processing.jpg',
  },
  {
    id: 'maintenance-tracking',
    title: 'Maintenance Tracking',
    description: 'Efficiently handle maintenance requests and track work orders.',
    icon: WrenchScrewdriverIcon,
    benefits: [
      'Online maintenance requests',
      'Work order tracking',
      'Vendor management',
      'Cost tracking',
    ],
    image: '/features/maintenance-tracking.jpg',
  },
  {
    id: 'tenant-communication',
    title: 'Tenant Communication',
    description: 'Streamline communication with tenants through our integrated messaging system.',
    icon: ChatBubbleLeftRightIcon,
    benefits: [
      'In-app messaging',
      'Announcement system',
      'Document sharing',
      'Automated notifications',
    ],
    image: '/features/tenant-communication.jpg',
  },
  {
    id: 'automated-notifications',
    title: 'Automated Notifications',
    description: 'Stay informed with automated notifications for important events and updates.',
    icon: BellIcon,
    benefits: [
      'Rent reminders',
      'Maintenance updates',
      'Lease expiration alerts',
      'Payment confirmations',
    ],
    image: '/features/automated-notifications.jpg',
  },
];

const additionalFeatures = [
  {
    title: 'Financial Reporting',
    description: 'Comprehensive financial reports and analytics for better decision making.',
    icon: ChartBarIcon,
  },
  {
    title: 'Tenant Screening',
    description: 'Thorough tenant screening process with credit and background checks.',
    icon: UserGroupIcon,
  },
  {
    title: 'Security',
    description: 'Bank-level security for all your data and transactions.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Time Management',
    description: 'Save time with automated processes and streamlined workflows.',
    icon: ClockIcon,
  },
  {
    title: 'Document Management',
    description: 'Secure storage and easy access to all your property documents.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Scheduling',
    description: 'Efficient scheduling for property showings and maintenance.',
    icon: CalendarIcon,
  },
];

const sections = [
  { id: 'main-features', label: 'Main Features' },
  { id: 'additional-features', label: 'Additional Features' },
];

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [activeSection, setActiveSection] = useState('main-features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]') as NodeListOf<HTMLElement>;
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'main-features');
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
                  RentPay
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
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
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
                onClick={() => {
                  scrollToSection(section.id);
                  setMobileMenuOpen(false);
                }}
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
                Powerful Features for Property Management
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover how our comprehensive suite of tools can help you manage your properties more efficiently and effectively.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <section id="main-features" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Feature Navigation */}
          <div className="space-y-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl p-6 cursor-pointer transition-all ${
                  activeFeature.id === feature.id
                    ? 'bg-indigo-50 ring-2 ring-indigo-600'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setActiveFeature(feature)}
              >
                <div className="flex items-center gap-x-4">
                  {feature.icon && (
                    <feature.icon className="h-12 w-12 text-indigo-600" aria-hidden="true" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Details */}
          <div className="relative">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="sticky top-8"
            >
              <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    width={800}
                    height={450}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{activeFeature.title}</h3>
                <p className="mt-4 text-gray-600">{activeFeature.description}</p>
                <ul className="mt-6 space-y-4">
                  {activeFeature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-x-3">
                      <div className="h-5 w-5 flex-none rounded-full bg-indigo-50">
                        <svg
                          className="h-5 w-5 text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section id="additional-features" className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            More Features to Help You Succeed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Our platform includes additional tools and features to support your property management needs.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
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
            Ready to Transform Your Property Management?
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
              Get started
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
              Contact us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 