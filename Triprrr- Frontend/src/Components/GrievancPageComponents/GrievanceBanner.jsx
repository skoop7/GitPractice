import React from "react";
// import { HotelSearch } from "./HotelSearch";
import GrievanceBG from "../../assets/GrievanceBG.png";

export function GrievanceBanner() {
  return (
    <div className="relative h-[500px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${GrievanceBG})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center">
        <div className="mt-[150px]">
          <h1 className="text-5xl font-Poppins text-white mt-26">Grievance</h1>
        </div>

        {/* <div className="mt-auto mb-28 max-w-6xl w-full">
          <HotelSearch />
        </div> */}
      </div>
    </div>
  );
}

export default GrievanceBanner;
