import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Upload Image", path: "/upload-image" },
  { name: "Recommendations", path: "/recommendations" },
  { name: "Chatbot", path: "/chatbot" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md py-4 px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-dark-purple"
        >
          <img src="/images/ai-logo.svg" alt="SmileScan Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-lg font-medium">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`cursor-pointer transition-colors ${
                  isActive
                    ? "text-dark-purple font-bold"
                    : "text-gray-500 hover:text-dark-purple"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex gap-4">
          <Link to="/login">
            <button className="h-[48px] px-6 rounded-full border-4 border-dark-purple bg-light-purple text-dark-purple font-semibold opacity-100 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="h-[48px] px-6 rounded-full border-4 border-dark-purple bg-dark-purple text-white font-semibold opacity-100 transition">
              Signup
            </button>
          </Link>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-dark-purple hover:text-gray-600 transition-colors"
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4">
          <ul className="space-y-4 px-4">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`block py-2 text-lg font-medium transition-colors ${
                      isActive
                        ? "text-dark-purple font-bold"
                        : "text-gray-500 hover:text-dark-purple"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-3 px-4 pt-4 border-t border-gray-200">
            <Link to="/login" onClick={closeMenu}>
              <button className="w-full h-[48px] px-6 rounded-full border-4 border-dark-purple bg-light-purple text-dark-purple font-semibold transition">
                Login
              </button>
            </Link>
            <Link to="/signup" onClick={closeMenu}>
              <button className="w-full h-[48px] px-6 rounded-full border-4 border-dark-purple bg-dark-purple text-white font-semibold transition">
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
