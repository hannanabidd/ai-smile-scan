import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    // Handle signup when API is ready
    console.log("Signup form data:", formData);
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container flex flex-col items-center justify-between px-4 sm:px-6 py-8 sm:py-12 md:py-20 max-w-6xl mx-auto gap-4 sm:gap-6">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6 uppercase">
          Create Account
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 py-8 sm:py-12 md:py-10 bg-white max-w-6xl mx-auto gap-6 sm:gap-8 w-full">
        <div className="w-full lg:w-1/2 text-center lg:text-left pl-0 lg:pl-12 mt-8 sm:mt-10 md:mt-14 flex flex-col gap-4 sm:gap-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 sm:mb-8 md:mb-10 leading-tight">
            Join the AI SmileScan community and take control of your dental
            health.
          </h2>
          <p className="text-black italic mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Create your account to access your AI-powered results and receive
            personalized dental care recommendations — all in one place.
          </p>
          <p className="text-black text-lg sm:text-xl md:text-2xl">
            Your information is safe and secure with us.
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
              <label
                htmlFor="password"
                className="text-sm font-bold text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 w-full px-4 h-12 sm:h-16 md:h-[67px] rounded-[40px] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-sm font-bold text-black"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-2 w-full px-4 h-12 sm:h-16 md:h-[67px] rounded-[40px] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-fit px-6 py-2 sm:py-3 bg-secondary text-white rounded-full self-center transition font-bold mt-6 sm:!mt-10 text-sm sm:text-base"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
        <p className="text-black font-normal text-base sm:text-lg md:text-xl italic">
          If you already have an account then login{" "}
        </p>
        <button
          type="submit"
          className="w-full sm:w-fit px-6 h-10 sm:h-[35px] bg-secondary text-white rounded-full self-center transition font-bold text-sm sm:text-base"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
