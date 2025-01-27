import React from "react";

const About = () => {
  return (
    <section className="bg-[#FAFAFA] py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <p className="text-sm text-[#FFA500] uppercase font-bold tracking-wide">
            Welcome to Register Karo
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#011B5B] mt-2 mb-4">
            About Register Karo
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We have been using Intelligenz as our DevOps vendor for our field
            service applications over the last couple of years, and I’m
            extremely pleased with their performance, ability to execute, and
            willingness to adapt in our ever-changing environment. Perry is an
            outstanding leader who is fanatical about customer satisfaction. He
            has built a solid team that has consistently delivered on projects
            exceeding everyone’s expectations.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#011B5B] text-white font-semibold rounded-lg shadow hover:bg-[#02337B] transition">
            Learn More
          </button>
        </div>
        {/* Image Content */}
        <div>
          <img
            src="Group2.png"
            alt="About Register Karo"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
