'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BuildingOfficeIcon,
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const values = [
  {
    name: 'Innovation',
    description: 'We continuously evolve our platform to provide cutting-edge solutions for property management.',
    icon: BuildingOfficeIcon,
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
    name: 'Passion',
    description: 'We are passionate about helping property owners succeed in their investments.',
    icon: HeartIcon,
  },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in property management, Sarah founded our company to revolutionize how property owners manage their investments.',
    image: '/team/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Michael leads our technical team, bringing expertise in building scalable and secure property management solutions.',
    image: '/team/michael.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Customer Success',
    bio: 'Emily ensures our clients receive exceptional support and guidance in managing their properties effectively.',
    image: '/team/emily.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
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

      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
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
      </div>

      {/* Team Section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-56">
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
            </motion.div>
          ))}
        </div>
      </div>

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
