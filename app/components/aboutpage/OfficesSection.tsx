import Image from 'next/image';

const offices = [
  {
    city: 'New York City',
    address: '8 Clarkson St, New York, NY 10014, USA',
    image: '/about/office-ny.jpg',
  },
  {
    city: 'Tokyo',
    address: '2-7-3 Marunouchi, Chiyoda-ku, Tokyo 100-0005, Japan',
    image: '/about/office-jp.jpg',
  },
  {
    city: 'San Francisco',
    address: '123 Market St, San Francisco, CA 94103, USA',
    image: '/about/office-sf.jpg',
  },
];

export default function OfficesSection() {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-8 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">Our offices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {offices.map((office) => (
          <div key={office.city} className="flex flex-col items-center">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image src={office.image} alt={office.city} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="font-bold text-lg mb-1">{office.city}</div>
            <div className="text-gray-300 text-sm text-center">{office.address}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 