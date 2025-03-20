import React from "react";
import { Hero } from "../Components/HomepageComponents/Hero";
import { Navbar } from "../Components/HomepageComponents/Navbar";
import { Footer } from "../Components/HomepageComponents/Footer";
import WhyChooseTriperrr from "../Components/HomepageComponents/WhyChooseTriperrr";
import CurrencyConverter from "../Components/HomepageComponents/CurrencyConverter";
import AboutUs from "../Components/HomepageComponents/AboutUs";
import Testimonials from "../Components/HomepageComponents/Testimonials";
// import { CitySelector } from "../Components/HomepageComponents/TopDestinations/CitySelector";
import Destination from "../Components/HomepageComponents/Destination";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <Destination />

      <div className="relative container mx-auto px-4 mb-60">
        <WhyChooseTriperrr />

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-44 w-full max-w-5xl">
          <CurrencyConverter />
        </div>
      </div>

      <Testimonials />

      <AboutUs />

      {/* <div>
        <CitySelector />
      </div> */}
    </div>
  );
}
