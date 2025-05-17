import React from 'react';

const tools = [
  {
    title: 'Schedule a Demo',
    description: 'Book a live walkthrough with our team and see the platform in action.',
    cta: 'Get Started',
    href: '#',
    image: '/tool1-placeholder.jpg',
    imageFirst: true,
  },
  {
    title: 'Download Guide',
    description: 'Get our free guide to property management best practices.',
    cta: 'Download',
    href: '#',
    image: '/tool2-placeholder.jpg',
    imageFirst: false,
  },
];

export default function ToolsResources() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-left max-w-2xl">Tools to help you get more done</h2>
        <div className="flex flex-col gap-16">
          {tools.map((tool, idx) => (
            <div
              key={tool.title}
              className={`flex flex-col ${tool.imageFirst ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-64 md:h-80 object-cover"
                  style={{ borderRadius: 0 }}
                />
              </div>
              {/* Tool Content */}
              <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">{tool.title}</h3>
                <p className="text-base md:text-lg text-gray-600 font-light mb-6 text-left max-w-lg">{tool.description}</p>
                <a
                  href={tool.href}
                  className="inline-block rounded-full bg-black text-white font-bold px-8 py-3 text-base shadow hover:bg-gray-900 transition"
                >
                  {tool.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 