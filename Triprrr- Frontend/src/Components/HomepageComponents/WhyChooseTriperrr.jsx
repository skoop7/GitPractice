import React from "react";
import { DollarSign, Sparkles, ThumbsUp } from "lucide-react";
import WhyChooseUs from "../../assets/WhyChooseUs.png";
import DottedPlaneDecorate from "../../assets/DottedPlaneDecorate.png";
import GirlDecorate from "../../assets/GirlDecorate.png";

const DecorativeImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`absolute w-32 h-32 object-contain opacity-20 ${className}`}
  />
);

export default function WhyChooseTriperrr() {
  const renderStatCard = (count, description, image, bgColor = "bg-white") => (
    <div
      className={`${bgColor} rounded-3xl pl-6 relative h-[335px] w-full max-w-[270px] mx-auto overflow-hidden`}
    >
      <div className="h-2/5 flex flex-col justify-center space-y-2 pt-8">
        <h3 className="text-2xl font-medium font-Poppins">{count}</h3>
        <p className="text-black font-Poppins text-base">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[60%]">
        <img
          src={image}
          alt={description}
          className="w-full h-full object-cover rounded-b-3xl"
        />
      </div>
    </div>
  );

  const renderFeatureCard = (Icon, title, description) => (
    <div className="bg-white rounded-2xl p-4 flex items-start gap-3 w-full max-w-[400px] mx-auto">
      <div className="mt-0.5 bg-gray-100 p-2 rounded-full">
        <Icon className="w-5 h-5 text-black" />
      </div>
      <div>
        <h4 className="font-semibold text-sm font-Poppins mb-1">{title}</h4>
        <p className="text-sm text-black font-Lora">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Images */}
      <img
        src={DottedPlaneDecorate}
        alt="Decorative plane"
        className="absolute top-10 left-5 -translate-x-1/4 -translate-y-1/4 w-28 h-28 object-contain"
      />
      <img
        src={GirlDecorate}
        alt="Decorative compass"
        className="absolute bottom-12 right-5 translate-x-1/4 translate-y-1/4 w-24 h-24 object-contain rounded-full"
      />

      <div
        className="max-w-7xl mx-auto rounded-[2.5rem] py-12 pb-60 px-8 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${WhyChooseUs})` }}
      >
        <h1 className="text-4xl font-medium font-Poppins text-white text-center mb-12">
          Why Choose Triperrr
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-10">
          {renderStatCard(
            "1500+",
            "Attractions Worldwide",
            "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80",
            "bg-[#D1F2D0]"
          )}

          {renderStatCard(
            "7.5 M+",
            "Travelers Exploring",
            "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80",
            "bg-white"
          )}

          <div className="space-y-6 pl-5 pr-8">
            {renderFeatureCard(
              DollarSign,
              "Save More !",
              "Our attraction passes save you more than buying individual tickets."
            )}
            {renderFeatureCard(
              Sparkles,
              "Experience More",
              "Our local experts have handpicked the best tours and activities."
            )}
            {renderFeatureCard(
              ThumbsUp,
              "Always Easy",
              "One price. One pass. All the top attractions, all in your phone."
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
