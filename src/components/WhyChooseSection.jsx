import React from 'react'

function WhyChooseSection() {

  const blogs = [
    { id: 1, title: "Small Business & Startup", tags: ["Tax & Audit", "Management"], description: "Be the boss in the process of transforming a 2-4 team into a Super Unit working Dynamically.", date: "1 Jan 2023", author: "John Doe", image: "img2.png" },
    { id: 2, title: "Scale-Up Company Offer", tags: ["Tax & Audit", "Management"], description: "Be the boss in the process of transforming a 2-4 team into a Super Unit working Dynamically.", date: "1 Jan 2023", author: "Jane Smith", image: "img6.png" },
    { id: 3, title: "Growing Business Package", tags: ["Tax & Audit", "Management"], description: "Be the boss in the process of transforming a 2-4 team into a Super Unit working Dynamically.", date: "1 Jan 2023", author: "Sarah Lee", image: "img2.png" },
    { id: 4, title: "Small Business & Startup", tags: ["Tax & Audit", "Management"], description: "Be the boss in the process of transforming a 2-4 team into a Super Unit working Dynamically.", date: "1 Jan 2023", author: "John Doe", image: "Img3.png" },
    { id: 5, title: "Scale-Up Company Offer", tags: ["Tax & Audit", "Management"], description: "Be the boss in the process of transforming a 2-4 team into a Super Unit working Dynamically.", date: "1 Jan 2023", author: "Jane Smith", image: "img4.png" },
    { id: 6, title: "Growing Business Package", tags: ["Tax & Audit", "Management"], description: "Be the boss in the process of transforming a 2-4 team into a Super Unit working Dynamically.", date: "1 Jan 2023", author: "Sarah Lee", image: "img5.png" },
  ];

  const features = [
    { title: "Confidential & Safe", description: "All your private information is safe with us.", icon: "🔒" },
    { title: "No Hidden Fee", description: "Everything is upfront; no hidden charges.", icon: "💰" },
    { title: "Guaranteed Satisfaction", description: "We ensure that you stay 100% satisfied.", icon: "✅" },
    { title: "Expert CA/CS Assistance", description: "Prompt support from our expert professionals.", icon: "👨‍💼" },
  ];

  const testimonialsData = [
    { name: "Chris", star: "★★★", role: "President and CEO, USA", rating: 5, feedback: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ", img: "img1.png" },
    { name: "Chris", star: "★★★★", role: "President and CEO, USA", rating: 5, feedback: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ", img: "img1.png" },
    { name: "Alex", star: "★★", role: "CFO, UK", rating: 4, feedback: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ", img: "img1.png" },
  ];

  return (
    <div>
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Why Choose Register Karo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border bg-green-200 rounded-lg shadow-sm hover:shadow-md"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-[12px] font-semibold mb-2">{blog.date}</h2>
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600">{blog.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1C4670] text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">What People Say About Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((items, index) => (
              <div
                key={index}
                className="p-2 border bg-white rounded-lg shadow-sm hover:shadow-md"
              >
                <div className="p-4 flex justify-end items-center">
                  <span className="text-yellow-500 text-xl">{items.star}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{items.feedback}</p>
                <div className="flex items-center">
                  <img
                    src={items.img}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg text-black font-semibold">{items.name}</h4>
                    <p className="text-sm text-gray-500">{items.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyChooseSection;
