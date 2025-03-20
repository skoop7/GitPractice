import React from "react";
import HotelBG from "../../assets/HotelBG.png";

export function HotelListingBanner() {
  return (
    <div className="relative h-[550px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HotelBG})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center">
        <div className="mt-[160px]">
          <h1 className="text-5xl font-Poppins text-white mt-26">Hotels</h1>
        </div>
      </div>
    </div>
  );
}

export default HotelListingBanner;
