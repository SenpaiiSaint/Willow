'use client';

import Link from 'next/link';
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose">
        <p className="mb-4">
          Welcome to RentPlatform. By accessing or using our service, you agree to be bound by these terms.
        </p>
        <h2 className="text-xl font-semibold mb-2">1. Service Description</h2>
        <p className="mb-4">
          RentPlatform provides property management and rent collection services. We are not responsible for the content or accuracy of information provided by users.
        </p>
        <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
        <p className="mb-4">
          Users are responsible for maintaining the accuracy of their information and complying with all applicable laws and regulations.
        </p>
        <h2 className="text-xl font-semibold mb-2">3. Payment Processing</h2>
        <p className="mb-4">
          We use secure payment processing services. Users are responsible for ensuring they have sufficient funds and proper authorization for transactions.
        </p>
      </div>
      <Link href="/" className="text-blue-600 hover:underline mt-6 inline-block">
        &larr; Back to Home
      </Link>
    </motion.div>
  );
} 