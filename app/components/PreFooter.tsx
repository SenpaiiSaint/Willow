import React from 'react';
import Link from 'next/link';
import { boska, nippo, array } from '../fonts';

const columns = [
  {
    heading: 'Products',
    links: [
      { name: 'Rent Collection', href: '#' },
      { name: 'Maintenance Requests', href: '#' },
      { name: 'Tenant Screening', href: '#' },
      { name: 'Lease Management', href: '#' },
      { name: 'Owner Portal', href: '#' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { name: 'For Landlords', href: '#' },
      { name: 'For Property Managers', href: '#' },
      { name: 'For Tenants', href: '#' },
      { name: 'For HOAs', href: '#' },
      { name: 'Enterprise', href: '#' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'API Docs', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Legal', href: '#' },
      { name: 'Accessibility', href: '#' },
    ],
  },
  {
    heading: 'Follow',
    links: [
      { name: 'Instagram', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'X (Twitter)', href: '#' },
    ],
  },
];

export default function PreFooter() {
  return (
    <section className="w-full bg-black text-white pt-16 pb-20 px-4 md:px-0">
      {/* Designer credit */}
      <div className="max-w-7xl mx-auto flex justify-end items-center mb-4">
        <span className="flex items-center gap-1 text-lg md:text-xl text-gray-400 font-bold drop-shadow-lg">
          Designed by:
          <span className={`${array.className} text-xl md:text-2xl text-stone-200 ml-2 font-extrabold hover:bg-gradient-to-br hover:from-red-300 hover:to-sky-500 hover:text-transparent hover:bg-clip-text transition-colors cursor-pointer`}>
            BlueSky Labs
          </span>
        </span>
      </div>
      {/* Border line */}
      <div className="w-full mx-auto border-t border-gray-800 mb-14"></div>
      {/* Main prefooter content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">
        {/* Slogan */}
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className={`${boska.className} text-4xl md:text-6xl font-extrabold tracking-light lg:text-left text-center drop-shadow-lg`}>
          Managing Homes, Simplifying Lives
          </h2>
        </div>
        {/* Columns */}
        <div className="flex-[2] w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 bg-gray-900/80 rounded-xl shadow-xl p-6">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">{col.heading}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-indigo-300 hover:underline underline-offset-4 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 