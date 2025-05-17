import React, { useState } from 'react';

const faqs = [
  {
    question: 'How do I get started with RentPlatform?',
    answer: 'Simply sign up for a free account, add your properties, and start managing tenants, payments, and maintenance requests from your dashboard.'
  },
  {
    question: 'Can I collect rent online?',
    answer: 'Yes! RentPlatform allows you to collect rent payments online securely and automatically, with reminders for tenants and instant notifications for you.'
  },
  {
    question: 'Is there support if I need help?',
    answer: 'Absolutely. Our support team is available 24/7 to assist you with any questions or issues you may have.'
  },
  {
    question: 'Can I manage multiple properties and tenants?',
    answer: 'Yes, you can manage as many properties and tenants as you need, all from a single dashboard.'
  },
  {
    question: 'How do I invite tenants to the platform?',
    answer: 'You can invite tenants by email directly from your dashboard. Theyll receive a secure link to join and set up their account.'
  },
  {
    question: 'Are online payments secure?',
    answer: 'Yes, all payments are processed using industry-standard encryption and security protocols.'
  },
  {
    question: 'Can I export my financial data?',
    answer: 'Yes, you can export your reports and payment history as CSV or PDF for your records or accountant.'
  },
  {
    question: 'What happens if a tenant misses a payment?',
    answer: 'Youll receive an instant notification, and the system can automatically send reminders to the tenant.'
  },
];

const supportOptions = [
  {
    title: 'Chat with us',
    description: 'Get instant answers from our support team.',
    cta: 'Start Chat',
    href: '#',
  },
  {
    title: 'Email support',
    description: 'Send us an email and well get back to you within 1 hour.',
    cta: 'Email Us',
    href: '#',
  },
  {
    title: 'Help Center',
    description: 'Browse FAQs, guides, and troubleshooting articles.',
    cta: 'Visit Help Center',
    href: '#',
  },
  {
    title: 'Call us',
    description: 'Speak directly with a support specialist.',
    cta: 'Call Now',
    href: '#',
  },
];

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-start md:items-stretch">
        {/* Title on the left */}
        <div className="flex-1 flex flex-col justify-start items-start w-full max-w-md mx-auto md:mx-0 mb-12 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 text-left">Frequently Asked Questions</h2>
        </div>
        {/* FAQ accordion on the right */}
        <div className="flex-1 w-full max-w-2xl mx-auto md:mx-0">
          <div className="divide-y divide-white/20">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={faq.question}>
                  <button
                    className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg md:text-xl font-medium text-white group-hover:text-white transition-colors">{faq.question}</span>
                    <span
                      className={`ml-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    >
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    aria-hidden={!isOpen}
                  >
                    <p className="text-gray-300 text-base font-light pb-6 pl-1 pr-8">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 24/7 Support Section */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 text-left">24/7 Support</h3>
        <p className="text-base md:text-lg text-gray-300 font-light mb-10 text-left max-w-2xl">
          Our team is always here to help. Choose the support option that works best for you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportOptions.map((option) => (
            <div key={option.title} className="bg-black text-white border border-white rounded-none p-8 flex flex-col items-start justify-between h-full">
              <h4 className="text-lg md:text-xl font-bold mb-2">{option.title}</h4>
              <p className="text-base font-light mb-6 text-left">{option.description}</p>
              <a
                href={option.href}
                className="inline-block rounded-full border border-white bg-white text-black font-bold px-6 py-2 text-base shadow hover:bg-gray-100 hover:text-black transition"
              >
                {option.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 