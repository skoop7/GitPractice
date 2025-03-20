import React from "react";
import HotelBanner from "../Components/HotelPageComponents/HotelBanner";
import { Navbar } from "../Components/HomepageComponents/Navbar";
import FAQ from "../Components/HotelPageComponents/FAQ";
import TrendingHotels from "../Components/HotelPageComponents/TrendingHotels";

export default function HotelPage() {
  return (
    <div>
      <HotelBanner />
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <TrendingHotels />

      <FAQ />
    </div>
  );
}
