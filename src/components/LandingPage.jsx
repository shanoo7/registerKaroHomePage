import React from "react";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
              Manage Your Services by your Mobile Phone
            </h1>
            <p className="mt-4 text-lg">
              Download our app to manage and track your services. Our app enables
              you to stay in touch with our experts and aids you in tracking your
              progress.
            </p>
            <div className="flex justify-center lg:justify-start mt-6 space-x-4">
              <button className="bg-white text-blue-900 font-semibold py-2 px-4 rounded-lg shadow-md">
                Get on App Store
              </button>
              <button className="bg-white text-blue-900 font-semibold py-2 px-4 rounded-lg shadow-md">
                Get on Google Play
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="Group23.png"
              alt="App Preview"
              className="w-64 lg:w-96"
            />
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="bg-white text-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-lg text-orange-600 font-bold">
            WHY REGISTER KARO
          </h2>
          <h3 className="text-3xl font-bold mt-2">Some Numbers are Important</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
            <div>
              <p className="text-4xl font-bold text-blue-900">1M+</p>
              <p className="text-lg">Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900">12+</p>
              <p className="text-lg">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900">41+</p>
              <p className="text-lg">R&D Engineers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900">78+</p>
              <p className="text-lg">Countries</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900">3287+</p>
              <p className="text-lg">Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="bg-gradient-to-r from-orange-400 to-blue-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold">
            Welcome to your new digital reality. Now.
          </h3>
          <p className="mt-4">1% OF THE INDUSTRY</p>
          <div className="flex justify-center items-center mt-6">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-l-lg outline-none"
            />
            <button className="bg-orange-600 text-white py-2 px-4 rounded-r-lg">
              Submit
            </button>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-6">
            <p className="text-sm">Instant results</p>
            <p className="text-sm">User-friendly interface</p>
            <p className="text-sm">Personalized customization</p>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          <img
            src="Company logo.png"
            alt="Coinbase"
            className="h-12"
          />
          <img
            src="Company logo (1).png"
            alt="Spotify"
            className="h-12"
          />
          <img
            src="Company logo (2).png"
            alt="Slack"
            className="h-12"
          />
          <img
            src="Company logo (3).png"
            alt="Dropbox"
            className="h-12"
          />
          <img
            src="Company logo (4).png"
            alt="Webflow"
            className="h-12"
          />
          <img
            src="Company logo (5).png"
            alt="Zoom"
            className="h-12"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
