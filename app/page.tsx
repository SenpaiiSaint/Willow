"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { HomeIcon, BuildingOfficeIcon, UserGroupIcon, DocumentTextIcon, CreditCardIcon, ArrowRightIcon, ChartBarIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline'
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SearchBarSection from './components/SearchBarSection';
import FeaturesCarousel from './components/FeaturesCarousel';
import ShowcaseGrid from './components/ShowcaseGrid';
import PromoBanner from './components/PromoBanner';
import ToolsResources from './components/ToolsResources';
import FAQAccordion from './components/FAQAccordion';
import FinalCTA from './components/FinalCTA';
import PreFooter from "./components/PreFooter";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  const stats = [
    { 
      id: 1, 
      name: 'Properties Managed', 
      value: '10,000+',
      icon: ChartBarIcon,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700',
      progress: 85,
      description: 'Active properties under management'
    },
    { 
      id: 2, 
      name: 'Active Tenants', 
      value: '50,000+',
      icon: UserGroupIcon,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'from-purple-600 to-purple-700',
      progress: 92,
      description: 'Happy tenants using our platform'
    },
    { 
      id: 3, 
      name: 'Cities Covered', 
      value: '100+',
      icon: GlobeAltIcon,
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
      progress: 78,
      description: 'Cities where we operate'
    },
    { 
      id: 4, 
      name: 'Customer Satisfaction', 
      value: '98%',
      icon: HeartIcon,
      color: 'from-red-500 to-red-600',
      hoverColor: 'from-red-600 to-red-700',
      progress: 98,
      description: 'Satisfied property managers'
    },
  ];

  const features = [
    {
      name: 'Property Management',
      description: 'Easily manage your properties, track maintenance requests, and handle tenant communications all in one place.',
      icon: BuildingOfficeIcon,
      stats: '98% satisfaction rate',
    },
    {
      name: 'Tenant Portal',
      description: 'Provide your tenants with a secure portal to pay rent, submit maintenance requests, and communicate with property managers.',
      icon: UserGroupIcon,
      stats: '5000+ active tenants',
    },
    {
      name: 'Lease Management',
      description: 'Create, track, and manage leases digitally. Store all lease documents securely and access them anytime.',
      icon: DocumentTextIcon,
      stats: '100% digital process',
    },
    {
      name: 'Payment Processing',
      description: 'Accept rent payments online, track payment history, and automate late fee calculations.',
      icon: CreditCardIcon,
      stats: '80% reduction in late payments',
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
      <Navigation />
      <main>
        <HeroSection />
        <SearchBarSection />
        <FeaturesCarousel />
        <ShowcaseGrid />
        <PromoBanner />
        <ToolsResources />
        <FAQAccordion />
        <FinalCTA />
        <PreFooter />
      </main>
    </>
  );
}
