import React from "react";
import Banner from "../components/Home/Banner";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import HowItWorks from "../components/Home/HowItWorks";

const Home = () => (
  <div className="bg-light-blue">
    <Banner />
    <HowItWorks />
    <WhyChooseUs />
  </div>
);

export default Home;
