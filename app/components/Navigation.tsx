"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { boska, nippo, array } from "../fonts";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    {
      name: "Features",
      href: "/features",
      megaMenu: {
        title: "Platform Features",
        description: "Everything you need to manage your properties",
        sections: [
          {
            title: "Property Management",
            items: [
              { name: "Property Listings", href: "/features/listings" },
              { name: "Tenant Screening", href: "/features/screening" },
              { name: "Maintenance Requests", href: "/features/maintenance" },
            ],
          },
          {
            title: "Financial Tools",
            items: [
              { name: "Rent Collection", href: "/features/rent-collection" },
              { name: "Expense Tracking", href: "/features/expenses" },
              { name: "Financial Reports", href: "/features/reports" },
            ],
          },
        ],
      },
    },
    {
      name: "Pricing",
      href: "/pricing",
      megaMenu: {
        title: "Choose Your Plan",
        description: "Select the perfect plan for your needs",
        sections: [
          {
            title: "Plans",
            items: [
              { name: "Starter", href: "/pricing/starter" },
              { name: "Professional", href: "/pricing/professional" },
              { name: "Enterprise", href: "/pricing/enterprise" },
            ],
          },
        ],
      },
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-8"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="-m-1.5 p-1.5"
            >
              <Link href="/" className="flex items-center gap-2">
                <span
                  className={` ${boska.className} text-4xl font-extrabold tracking-tight ${
                    isScrolled ? "text-gray-900" : "text-white"
                  } drop-shadow-md`}
                >
                  Willow
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center p-2.5 ${
                isScrolled ? "text-gray-900" : "text-white"
              } hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-opacity`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <button
                  className={`group inline-flex items-center gap-x-1 text-lg font-light leading-6 border-transparent hover:text-sky-300 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  } hover:opacity-90 transition-all`}
                  onMouseEnter={() => setActiveMegaMenu(item.name)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  {item.name}
                  {item.megaMenu && (
                    <ChevronDownIcon className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </button>

                {/* Mega Menu */}
                {item.megaMenu && (
                  <AnimatePresence>
                    {activeMegaMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 w-screen max-w-md"
                        onMouseEnter={() => setActiveMegaMenu(item.name)}
                        onMouseLeave={() => setActiveMegaMenu(null)}
                      >
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            <div className="mb-4">
                              <h3 className="text-base font-bold text-gray-900">
                                {item.megaMenu.title}
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                {item.megaMenu.description}
                              </p>
                            </div>
                            {item.megaMenu.sections.map((section) => (
                              <div key={section.title}>
                                <h4 className="text-sm font-medium text-gray-900">
                                  {section.title}
                                </h4>
                                <ul className="mt-2 space-y-2">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="block rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-8">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/register"
                className={`rounded-full px-6 py-2.5 text-base font-bold  shadow-lg  hover:text-stone-400 focus:outline-none ${isScrolled ? 'text-black' : 'text-white'}`}
              >
                Sign In 
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-black text-gray-900 tracking-tight">
                    RentPlatform
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-900 hover:opacity-75 transition-opacity"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-100">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className="-mx-3 block px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.megaMenu && (
                          <div className="mt-2 pl-4 space-y-2">
                            {item.megaMenu.sections.map((section) => (
                              <div key={section.title}>
                                <h4 className="text-sm font-medium text-gray-900">
                                  {section.title}
                                </h4>
                                <ul className="mt-2 space-y-1">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="block px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/login"
                      className="-mx-3 block px-3 py-2.5 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/register"
                      className="mt-4 block rounded-full bg-black px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
