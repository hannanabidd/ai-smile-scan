import React, { useState } from "react";

const LogIn = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
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
    // Handle login when API is ready
    console.log("Login form data:", formData);
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container flex flex-col items-center justify-between px-4 sm:px-6 py-8 sm:py-12 md:py-20 max-w-6xl mx-auto gap-4 sm:gap-6">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl">
          Welcome back
        </p>
        <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">
          <span className="uppercase font-serif font-bold">Login</span> to
          continue using AI SmileScan
        </h1>
      </div>

      <div className="flex flex-col items-center justify-between px-4 sm:px-6 py-8 sm:py-12 md:py-10 bg-white max-w-6xl mx-auto gap-6 sm:gap-8 w-full">
        <div className="w-full max-w-md md:w-[548px] bg-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-md">
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
            <button
              type="submit"
              className="w-full sm:w-fit px-6 h-10 sm:h-[35px] bg-secondary text-white rounded-full self-center transition font-bold mt-6 sm:!mt-10 text-sm sm:text-base"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
        <p className="text-black font-normal text-base sm:text-lg md:text-xl italic">
          If you do not have an account then signup{" "}
        </p>
        <button
          type="submit"
          className="w-full sm:w-fit px-6 h-10 sm:h-[35px] bg-secondary text-white rounded-full self-center transition font-bold text-sm sm:text-base"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LogIn;
