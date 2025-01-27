import React from 'react';
import About from './About';
import ServiceSection from './ServiceSection';
import WhyChooseSection from './WhyChooseSection';
import Faq from './Faq';
import LandingPage from './LandingPage';

function HeroSection() {
    return (
       

        <section className="bg-hero-pattern bg-cover py-16 px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#011B5B]">
              Your Trusted Partner <br /> For <span className="text-[#FE8B00]">Compliance</span> needs
            </h1>
            <p className="text-lg text-gray-600">
              An online business compliance platform that helps entrepreneurs and other
              individuals with various registrations, tax filings, and other legal matters.
            </p>
            <div className="flex gap-10">
              <div>
                <p className="text-[#FE8B00] text-2xl font-semibold">4.5+</p>
                <p className="text-gray-600">Customer Rating</p>
              </div>
              <div>
                <p className="text-[#FE8B00] text-2xl font-semibold">20,000+</p>
                <p className="text-gray-600">Clients</p>
              </div>
              <div>
                <p className="text-[#FE8B00] text-2xl font-semibold">99.8%</p>
                <p className="text-gray-600">Financial Stability</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="bg-[#0039CC] text-white px-6 py-3 rounded-md text-lg hover:bg-[#002b99]">
                Get Started For Free
              </button>
              <button className="flex items-center gap-2 text-[#0039CC] hover:underline">
                See how it works
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="Group.png"
              alt="Hero Illustration"
              className="w-full h-auto "
            />
            <div className="absolute top-10 right-10 ">
              <p className="text-[#011B5B] mb-3 bg-white cursor-pointer p-3 shadow-md rounded-lg">Annual Compliance</p>
              <p className="text-[#011B5B] mb-3 bg-white cursor-pointer p-3 shadow-md rounded-lg">Payroll Services</p>
              <p className="text-[#011B5B] mb-3 bg-white cursor-pointer p-3 shadow-md rounded-lg">Company Formation</p>
              <p className="text-[#011B5B] mb-3 bg-white cursor-pointer p-3 shadow-md rounded-lg">Annual Compliance</p>
            </div>
          </div>
        </div>
        <About/>
        <ServiceSection/>
        <WhyChooseSection/>
        <Faq/>
        <LandingPage/>
      </section>
     
      );
}

export default HeroSection
