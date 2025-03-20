import React from "react";
import { Navbar } from "../Components/HomepageComponents/Navbar";
import HotelListing from "../Components/HotelPageComponents/HotelListing";
import HotelListingBanner from "../Components/HotelPageComponents/HotelListingBanner";

export default function HotelListingPage() {
  return (
    <div>
      <HotelListingBanner />
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <HotelListing />
    </div>
  );
}
