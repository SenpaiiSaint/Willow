export default function StatsSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our vision is a future where every rental community thrives through smart property management.</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        We believe design and technology should empower people to thrive in property management and renting. We build tools that help owners, managers, and residents succeed together.
      </p>
      <div className="flex flex-wrap justify-center gap-12">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gray-900">2020</div>
          <div className="text-gray-700 mt-2">Founded</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gray-900">120</div>
          <div className="text-gray-700 mt-2">Team Members</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gray-900">3,500+</div>
          <div className="text-gray-700 mt-2">Properties Managed</div>
        </div>
      </div>
    </section>
  );
} 