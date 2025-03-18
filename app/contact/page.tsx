'use client';

import Link from 'next/link';
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="mb-4">
        Want to learn more or collaborate on future projects? Feel free to reach
        out via email:
        <br />
        <strong>rentpay@demo.com</strong>
      </p>
      <p className="mb-4">
        You can also find us on social media (Twitter, LinkedIn) for updates on
        improvements to this dummy project. We’re always open to feedback and
        contributions!
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        &larr; Back to Home
      </Link>
    </motion.div>
  );
}
