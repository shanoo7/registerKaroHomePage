import React, { useState } from "react";

const Faq = () => {
  const [showMore, setShowMore] = useState(false);

  const faqs = [
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
  ];

  const visibleFaqs = showMore ? faqs : faqs.slice(0, 3); // Show 3 by default

  return (
    <section className="bg-[#FAFAFA] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Frequent Ask Questions
        </h2>
        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <p className="text-gray-700 font-medium">{faq}</p>
              <button className="text-[#011B5B] text-lg font-bold">&rarr;</button>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 bg-[#011B5B] text-white font-semibold rounded-lg shadow hover:bg-[#02337B] transition"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
