"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 


export default function Footer() {
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
      <div className="mx-auto px-3 border-t border-gray-800 pt-2 pb-4  flex flex-col md:flex-row items-center justify-between gap-y-2">
        {/* Left: Language Selector */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-gray-400 font-bold hover:text-white focus:outline-none bg-transparent px-0 py-0"
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
          <Link href="/terms" className="hover:underline hover:text-white">Terms</Link>
          <span className="mx-1"></span>
          <Link href="/privacy" className="hover:underline hover:text-white">Privacy</Link>
          <span className="mx-1"></span>
          <Link href="/securitymeasures" className="hover:underline hover:text-white">Securtiy Measures</Link>
          <span className="mx-1"></span>
          <Link href="/sitemap" className="hover:underline hover:text-white">Sitemap</Link>
          <span className="mx-1"></span>
          <span className="whitespace-nowrap text-gray-300 font-bold">&copy; {new Date().getFullYear()} Willow. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
} 