import React from "react";
import { ItineraryBuilder } from "./ItineraryBuilder";
import HeroImage from "../../assets/Hero.png";

export function Hero() {
  return (
    <div className="relative h-[650px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-Poppins text-[#C0EBA6] mb-4">
          See the World For Less !
        </h2>
        <h1 className="text-5xl font-bold font-Lora mb-16">
          Perfectly Suited to You
        </h1>
        <ItineraryBuilder />
      </div>
    </div>
  );
}
