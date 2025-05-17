import React from 'react';
import Link from 'next/link';

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
    <section className="w-full bg-black text-white pt-12 pb-16 px-4 md:px-0">
      {/* Designer credit */}
      <div className="max-w-7xl mx-auto flex justify-end">
        <span className="text-xs text-gray-400 font-medium mb-2">Designed By <span className="text-white">BlueSky Labs</span></span>
      </div>
      {/* Border line */}
      <div className="w-[75%] mx-auto border-t border-gray-800 mb-12"></div>
      {/* Main prefooter content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        {/* Slogan */}
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight lg:text-left text-center">
            A website makes it real
          </h2>
        </div>
        {/* Columns */}
        <div className="flex-[2] w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">{col.heading}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
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