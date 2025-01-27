import React from "react";

const services = [
  {
    icon: "📂",
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    link: "#",
  },
  {
    icon: "📊",
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals.",
    link: "#",
  },
  {
    icon: "🏢",
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market.",
    link: "#",
  },
  {
    icon: "✅",
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
    link: "#",
  },
  {
    icon: "💵",
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    link: "#",
  },
  {
    icon: "📚",
    title: "Bookkeeping Services",
    description: "Steering user behaviors with creative design, data insights & technology.",
    link: "#",
  },
];

function ServiceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-xl font-medium text-blue-500 mb-2">WELCOME TO REGISTERKARO.IN</h2>
        <h1 className="text-4xl font-bold mb-8">Explore Our Services</h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="text-4xl text-orange-500 mb-4">{service.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              {/* Description */}
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* Learn More Link */}
              <a
                href={service.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Learn more &#x2192;
              </a>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
