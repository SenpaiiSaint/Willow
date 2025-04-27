'use client';

import Link from 'next/link';
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1 className="text-3xl font-bold mb-6">About This Project</h1>
      <p className="mb-4">
        Welcome to the <strong>Rent Payment Platform</strong>. This is a dummy
        application demonstrating a full-stack Next.js 15+ setup, Prisma, and a
        PostgreSQL database. Use this page to learn more about the project
        goals, architecture, and features.
      </p>
      <p className="mb-4">
        The application includes a basic dashboard where tenants can view
        invoices, make payments, and reset invoices to see payment flows again.
        Additionally, we've integrated Framer Motion for smooth animations and
        transitions.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        &larr; Back to Home
      </Link>
    </motion.div>
  );
}
