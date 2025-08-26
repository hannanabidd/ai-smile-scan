import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useScrollToTop } from "../hooks";

const MainLayout = ({ children }) => {
  useScrollToTop();
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1 w-full mx-auto pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
