"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Templates', href: '/templates' },
      { name: 'Enterprise', href: '/enterprise' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
    ],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Guides', href: '/guides' },
      { name: 'API', href: '/api' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Cookies', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    )},
    { name: 'LinkedIn', href: '#', icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )},
    { name: 'Facebook', href: '#', icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    )},
  ];

  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'pt', label: 'Português' },
    { code: 'ja', label: '日本語' },
    { code: 'zh', label: '中文' },
    { code: 'ru', label: 'Русский' },
    { code: 'ar', label: 'العربية' },
    { code: 'it', label: 'Italiano' },
    { code: 'ko', label: '한국어' },
  ];
  const currentLang = languages[0];

  return (
    <footer className="bg-black text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 py-3 flex flex-col md:flex-row items-center justify-between gap-y-2">
        {/* Left: Language Selector */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-gray-400 hover:text-white focus:outline-none bg-transparent px-0 py-0"
              id="language-menu-button"
              aria-expanded={langMenuOpen}
              aria-haspopup="true"
              onClick={() => setLangMenuOpen((open) => !open)}
            >
              {/* Globe Icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 12h20M12 2c2.5 2.5 2.5 17 0 20M12 2c-2.5 2.5-2.5 17 0 20" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              {currentLang.label}
              {/* Chevron Icon */}
              <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20">
                <path d="M6 8l4 4 4-4" />
              </svg>
            </button>
            {/* Dropdown menu */}
            {langMenuOpen && (
              <div className="absolute left-0 bottom-full mb-2 w-36 origin-bottom-left rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-800 z-10">
                <div className="py-1">
                  {languages.map((lang, idx) => (
                    <button
                      key={lang.code}
                      className={`block w-full px-4 py-2 text-xs text-white text-left transition-colors duration-150 hover:bg-gray-800 focus:bg-gray-800 ${idx === 0 ? 'rounded-t-md' : ''} ${idx === languages.length - 1 ? 'rounded-b-md' : ''}`}
                      onClick={() => setLangMenuOpen(false)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Right: Policy Links + Copyright */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 justify-center md:justify-end">
          <Link href="/privacy" className="hover:underline hover:text-white">Privacy Policy</Link>
          <span className="mx-1">·</span>
          <Link href="/terms" className="hover:underline hover:text-white">Terms</Link>
          <span className="mx-1">·</span>
          <Link href="/accessibility" className="hover:underline hover:text-white">Accessibility</Link>
          <span className="mx-1">·</span>
          <Link href="/sitemap" className="hover:underline hover:text-white">Sitemap</Link>
          <span className="mx-1">·</span>
          <span className="whitespace-nowrap">&copy; {new Date().getFullYear()} RentPlatform. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
} 