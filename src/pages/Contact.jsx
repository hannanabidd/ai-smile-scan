import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission when API is ready
    console.log("Contact form data:", formData);
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container flex flex-col items-center justify-between px-4 sm:px-6 py-8 sm:py-12 md:py-20 max-w-6xl mx-auto gap-4 sm:gap-6">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6 uppercase">
          Contact Us
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 py-8 sm:py-12 md:py-10 bg-white max-w-6xl mx-auto gap-6 sm:gap-8 w-full">
        <div className="w-full lg:w-1/2 text-center lg:text-left pl-0 lg:pl-12 mt-8 sm:mt-10 md:mt-14 flex flex-col gap-4 sm:gap-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4 leading-tight">
            We're here to support your dental journey!
          </h2>
          <p className="text-black italic mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Whether you have a question about your diagnosis, want to suggest a
            new feature, or just need help using <strong>AI SmileScan</strong> —
            we're happy to hear from you.
          </p>
          <p className="text-black text-lg sm:text-xl md:text-2xl">
            Your smile is our priority!
          </p>
        </div>

        <div className="w-full lg:w-1/2 bg-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-md">
          <form
            className="flex flex-col space-y-4 sm:space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="fullName"
                className="text-sm font-bold text-black"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-2 w-full px-4 h-12 sm:h-16 md:h-[67px] rounded-[40px] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-bold text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full px-4 h-12 sm:h-16 md:h-[67px] rounded-[40px] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-bold text-black">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 sm:py-3 rounded-[30px] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-fit px-6 py-2 sm:py-3 bg-secondary text-white rounded-full self-center transition font-bold mt-6 sm:!mt-10 text-sm sm:text-base"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
