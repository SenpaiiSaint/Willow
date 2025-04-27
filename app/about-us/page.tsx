'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  BuildingOfficeIcon,
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  HeartIcon,
  GlobeAltIcon,
  TrophyIcon,
  LightBulbIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const values = [
  {
    name: 'Innovation',
    description: 'We continuously evolve our platform to provide cutting-edge solutions for property management.',
    icon: LightBulbIcon,
  },
  {
    name: 'Transparency',
    description: 'We believe in clear communication and honest business practices with our clients.',
    icon: ChartBarIcon,
  },
  {
    name: 'Efficiency',
    description: 'Our solutions are designed to save time and streamline operations for property owners.',
    icon: ClockIcon,
  },
  {
    name: 'Security',
    description: 'We prioritize the security of your data and financial transactions.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Community',
    description: 'We foster a community of property owners who share knowledge and best practices.',
    icon: UserGroupIcon,
  },
  {
    name: 'Excellence',
    description: 'We strive for excellence in every aspect of our service and platform.',
    icon: TrophyIcon,
  },
];

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'RentPlatform was established with a vision to revolutionize property management.',
  },
  {
    year: '2021',
    title: 'Platform Launch',
    description: 'Launched our first version with core property management features.',
  },
  {
    year: '2022',
    title: 'Growth Phase',
    description: 'Expanded to serve over 1,000 property owners across the country.',
  },
  {
    year: '2023',
    title: 'Innovation Milestone',
    description: 'Introduced AI-powered insights and automated maintenance scheduling.',
  },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in property management, Sarah founded our company to revolutionize how property owners manage their investments.',
    image: '/team/sarah.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Michael leads our technical team, bringing expertise in building scalable and secure property management solutions.',
    image: '/team/michael.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Customer Success',
    bio: 'Emily ensures our clients receive exceptional support and guidance in managing their properties effectively.',
    image: '/team/emily.jpg',
    linkedin: '#',
    twitter: '#',
  },
];

const stats = [
  {
    value: '10,000+',
    label: 'Properties Managed',
    icon: BuildingOfficeIcon,
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    icon: HeartIcon,
  },
  {
    value: '50+',
    label: 'Cities Served',
    icon: GlobeAltIcon,
  },
  {
    value: '24/7',
    label: 'Support Available',
    icon: SparklesIcon,
  },
];

const sections = [
  { id: 'mission', label: 'Mission' },
  { id: 'stats', label: 'Stats' },
  { id: 'journey', label: 'Journey' },
  { id: 'values', label: 'Values' },
  { id: 'team', label: 'Team' },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('mission');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]') as NodeListOf<HTMLElement>;
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'contact-methods');
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
            </div>
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
                About RentPlatform
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We're on a mission to transform property management through innovative technology and exceptional service. Our platform helps property owners maximize their returns while minimizing the hassle of property management.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section id="stats" className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <stat.icon className="h-12 w-12 text-indigo-600" aria-hidden="true" />
                <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900">{stat.value}</p>
                <p className="mt-2 text-base leading-7 text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We believe that property management should be simple, efficient, and profitable. Our mission is to empower property owners with the tools and insights they need to succeed in today's competitive real estate market.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="journey" className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Journey
          </motion.h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-2xl font-bold text-indigo-600">{milestone.year}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{milestone.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            These core values guide everything we do at RentPlatform.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <value.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="mx-auto mt-32 max-w-7xl sm:mt-56">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Our team brings together expertise in property management, technology, and customer service to deliver exceptional value to our clients.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="flex items-center gap-x-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-16 w-16 rounded-full bg-gray-50"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{member.bio}</p>
              <div className="mt-6 flex gap-x-4">
                <a href={member.linkedin} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href={member.twitter} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
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
            Join Our Growing Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
          >
            Become part of a community of successful property owners who are transforming their property management experience.
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
