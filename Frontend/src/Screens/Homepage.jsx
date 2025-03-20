import React, { useState } from "react";
import { Hero } from "../Components/HomepageComponents/Hero";
import { Navbar } from "../Components/HomepageComponents/Navbar";
import { Footer } from "../Components/HomepageComponents/Footer";
import Aboutus from "../Components/HomepageComponents/Aboutus";
import WhyChooseTriperrr from "../Components/HomepageComponents/WhyChooseTriperrr";
import CurrencyConverter from "../Components/HomepageComponents/CurrencyConverter";
import Testimonials from "../Components/HomepageComponents/Testimonials";
import Destination from "../Components/HomepageComponents/Destination";
import FAQ from "../Components/HotelPageComponents/FAQ";

export default function Homepage() {
  const [amount, setAmount] = useState("1,000");
  const [convertedAmount, setConvertedAmount] = useState("87,060");
  return (
    <div>
      <Hero />
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <Aboutus />
      <div className="relative max-w-6xl w-full mx-auto px-4 mb-40">
        <WhyChooseTriperrr />
        <CurrencyConverter
          amount={1000}
          setAmount={setAmount}
          convertedAmount={convertedAmount}
          setConvertedAmount={setConvertedAmount}
        />
      </div>
      <Testimonials />
      <Destination />
      <FAQ />

      <Footer />
    </div>
  );
}
