'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';
import Breadcrumbs from '@/app/components/ui/Breadcrumbs';
const contactMethods = [
  {
    name: 'Email',
    description: 'For owner and resident support',
    icon: EnvelopeIcon,
    details: 'support@rentplatform.com',
    link: 'mailto:support@rentplatform.com',
  },
  {
    name: 'Phone',
    description: 'Speak with a property management specialist',
    icon: PhoneIcon,
    details: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    name: 'Office',
    description: 'Visit our headquarters for in-person assistance',
    icon: BuildingOfficeIcon,
    details: '123 Business Ave, Suite 100, San Francisco, CA 94105',
    link: 'https://maps.google.com',
  },
  {
    name: 'Request a Demo',
    description: 'See our platform in action',
    icon: ChatBubbleLeftRightIcon,
    details: 'Book a live demo with our team',
    link: '/demo',
  },
];

const supportHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM PST' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      userType: '',
      subject: '',
      message: '',
    });
  };

  return (
    <main className="bg-white min-h-screen text-gray-900">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-50 to-white py-16 px-4 sm:px-8 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Our Property Management Experts</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          Whether you're a landlord, property manager, or resident, our team is here to help you with all your rental and management needs.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-8 md:px-16 bg-white border-b">
        <h2 className="text-2xl font-semibold mb-8 text-center">How can we help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.link}
              className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition group"
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <method.icon className="h-8 w-8 text-sky-600 mb-2 group-hover:text-sky-800" />
              <div className="font-bold text-lg mb-1">{method.name}</div>
              <div className="text-gray-600 text-sm mb-1 text-center">{method.description}</div>
              <div className="text-gray-900 text-sm text-center font-mono">{method.details}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-12 px-4 sm:px-8 md:px-16 bg-sky-50 border-b">
        <h2 className="text-2xl font-semibold mb-6 text-center">Support Hours</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {supportHours.map((item) => (
            <div key={item.day} className="text-center">
              <div className="font-bold text-lg text-sky-700">{item.day}</div>
              <div className="text-gray-700">{item.hours}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-8 md:px-16 bg-white border-b">
        <h2 className="text-2xl font-semibold mb-6 text-center">Send us a message about your property needs</h2>
        {submitted && (
          <div className="mb-6 text-green-600 text-center font-semibold">Thank you! Your message has been sent.</div>
        )}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-sky-500 focus:ring-sky-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-sky-500 focus:ring-sky-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-sky-500 focus:ring-sky-500"
            />
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-sky-500 focus:ring-sky-500"
            >
              <option value="">I am a...</option>
              <option value="owner">Property Owner</option>
              <option value="manager">Property Manager</option>
              <option value="resident">Resident</option>
              <option value="vendor">Vendor</option>
              <option value="other">Other</option>
            </select>
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="rounded-md border border-gray-300 px-4 py-2 focus:border-sky-500 focus:ring-sky-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            required
            rows={5}
            className="rounded-md border border-gray-300 px-4 py-2 focus:border-sky-500 focus:ring-sky-500"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-8 md:px-16 bg-sky-50">
        <h2 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <div className="font-bold text-gray-900 mb-1">How do I submit a maintenance request?</div>
            <div className="text-gray-700 text-sm">Log in to your resident portal and use the maintenance request feature, or contact our support team by email or phone.</div>
          </div>
          <div>
            <div className="font-bold text-gray-900 mb-1">Can I schedule a property tour?</div>
            <div className="text-gray-700 text-sm">Yes! Use our Request a Demo option or contact us to schedule a tour with our team.</div>
          </div>
          <div>
            <div className="font-bold text-gray-900 mb-1">What payment methods do you accept?</div>
            <div className="text-gray-700 text-sm">We accept online payments, ACH, credit/debit cards, and checks. See your resident portal for details.</div>
          </div>
          <div>
            <div className="font-bold text-gray-900 mb-1">How do I become a property owner or manager with your platform?</div>
            <div className="text-gray-700 text-sm">Contact our sales team or request a demo to learn more about onboarding your properties.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
