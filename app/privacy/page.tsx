'use client';

import Link from 'next/link';
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose">
        <p className="mb-4">
          At RentPlatform, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
        </p>
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information you provide directly to us, including name, email, phone number, and payment information. We also collect usage data and cookies.
        </p>
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use your information to provide and improve our services, process payments, communicate with you, and ensure the security of our platform.
        </p>
        <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
        </p>
      </div>
      <Link href="/" className="text-blue-600 hover:underline mt-6 inline-block">
        &larr; Back to Home
      </Link>
    </motion.div>
  );
} 