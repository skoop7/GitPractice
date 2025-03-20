import React from "react";
import { Globe, Sparkles, ThumbsUp } from "lucide-react";
import WhyChooseUs from "../../assets/WhyChooseUs.png";

export default function WhyChooseTriperrr() {
  const renderStatCard = (
    image,
    imageAlt,
    count,
    description,
    bgColor = "bg-white"
  ) => (
    <div className={`${bgColor} rounded-2xl p-3`}>
      <div className="h-32 overflow-hidden rounded-xl mb-3">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-2">
        <h3 className="text-lg font-bold">{count}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );

  const renderFeatureCard = (Icon, title, description) => (
    <div className="bg-white rounded-xl p-3 flex items-center gap-3">
      <Icon className="w-5 h-5 text-gray-600" />
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center w-full">
      <div className="w-6xl px-4">
        <div
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 pb-32 relative w-full"
          style={{ backgroundImage: `url(${WhyChooseUs})` }}
        >
          {/* Decorative Images */}
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=200"
            alt="Decorative"
            className="absolute -top-6 -left-36 w-24 h-24 object-cover rounded-full border-4 border-white/30 shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=200"
            alt="Decorative"
            className="absolute -bottom-6 -right-36 w-24 h-24 object-cover rounded-full border-4 border-white/30 shadow-lg"
          />

          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Triperrr
          </h1>

          <div className="grid grid-cols-3 gap-6">
            {renderStatCard(
              "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80",
              "Rio de Janeiro",
              "1500+",
              "Attractions Worldwide",
              "bg-[#D1F2D0]"
            )}

            {renderStatCard(
              "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80",
              "Traveler",
              "7.5 M+",
              "Travelers Exploring"
            )}

            <div className="space-y-3">
              {renderFeatureCard(
                Globe,
                "Know More !",
                "Our extensive guides help you more."
              )}
              {renderFeatureCard(
                Sparkles,
                "Experience More",
                "Best spots and activities."
              )}
              {renderFeatureCard(
                ThumbsUp,
                "Always Easy",
                "One pass for all attractions."
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
