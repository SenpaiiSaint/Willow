const values = [
  {
    number: '01',
    title: 'Owners & Residents First',
    desc: "We listen to landlords, managers, and residents to build solutions that truly help everyone in the rental journey."
  },
  {
    number: '02',
    title: 'Transparency in Every Transaction',
    desc: "Clear communication, honest pricing, and open processes are at the heart of our platform."
  },
  {
    number: '03',
    title: 'Modernize the Rental Experience',
    desc: "We use technology to make renting, paying, and managing properties effortless and secure."
  },
  {
    number: '04',
    title: 'Support Community Growth',
    desc: "We foster strong, connected rental communities where everyone can thrive."
  },
  {
    number: '05',
    title: 'Protect What Matters',
    desc: "Security, privacy, and trust are at the core of everything we do for property professionals and residents."
  },
  {
    number: '06',
    title: 'Simplify Property Management',
    desc: "We turn complex tasks into simple, intuitive workflows for owners and managers alike."
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-8 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">Our values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {values.map((value) => (
          <div key={value.number} className="flex flex-col gap-2">
            <div className="text-3xl font-extrabold text-gray-400 mb-2">{value.number}</div>
            <div className="font-bold text-lg mb-1">{value.title}</div>
            <div className="text-gray-300 text-sm">{value.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 