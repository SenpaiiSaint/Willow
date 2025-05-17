import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const showcases = [
  {
    title: 'Modern Apartments',
    image: '/showcase1-placeholder.jpg',
  },
  {
    title: 'Luxury Villas',
    image: '/showcase2-placeholder.jpg',
  },
  {
    title: 'Cozy Studios',
    image: '/showcase3-placeholder.jpg',
  },
  {
    title: 'Commercial Spaces',
    image: '/showcase4-placeholder.jpg',
  },
];

const links = [
  { label: 'See all properties', href: '#' },
  { label: 'Contact us', href: '#' },
  { label: 'Book a tour', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'Pricing', href: '#' },
];

export default function ShowcaseGrid() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    renderMode: 'performance',
    drag: true,
  });

  // Autoplay effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (instanceRef.current) {
      interval = setInterval(() => {
        instanceRef.current.next();
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center lg:items-stretch">
        {/* Text and links on the left */}
        <div className="flex-1 flex flex-col justify-center items-start w-full max-w-xl mx-auto lg:mx-0">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-left">Explore Our Property Types</h2>
          <p className="text-base md:text-lg text-gray-600 font-light mb-8 text-left max-w-2xl">
            From modern apartments to commercial spaces, find the perfect property for your needs.
          </p>
          <div className="flex flex-col gap-4 w-full">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group text-base text-black underline underline-offset-4 decoration-2 hover:text-gray-700 font-medium flex items-center gap-2 w-fit"
              >
                {link.label}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <svg className="h-4 w-4 text-black group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Carousel on the right */}
        <div className="w-full max-w-lg mx-auto lg:mx-0 flex-shrink-0">
          <div className="relative">
            <div ref={sliderRef} className="keen-slider rounded-none">
              {showcases.map((item) => (
                <div key={item.title} className="keen-slider__slide relative group overflow-hidden cursor-pointer h-[320px] md:h-[400px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ borderRadius: 0 }}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-black/0">
                    <span className="text-white text-2xl md:text-3xl font-black drop-shadow-lg text-left block">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Arrows */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow transition"
              onClick={() => instanceRef.current?.prev()}
              aria-label="Previous"
              style={{ outline: 'none' }}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow transition"
              onClick={() => instanceRef.current?.next()}
              aria-label="Next"
              style={{ outline: 'none' }}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 