import Image from 'next/image';
import Breadcrumbs from '@/app/components/ui/Breadcrumbs';

export default function HeroSection() {
  return (
    <>
    <Breadcrumbs />
    <section className="relative bg-gray-100 pb-12 pt-16 flex flex-col items-center text-center overflow-hidden">
      <div className="w-full max-w-4xl mx-auto -rotate-3 overflow-hidden shadow-lg mb-8">
        <div className="relative w-full h-64 sm:h-80 md:h-96">
          <Image
            src="/about/hero.jpg"
            alt="Office Hero Placeholder"
            fill
            style={{ objectFit: 'cover' }}
            className=""
            priority
          />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Empowering Modern Property Management</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
      We&apos;re building a future where every landlord, manager, and resident thrives in a seamless, transparent rental community.
      </p>
    </section>
    </>
  );
} 