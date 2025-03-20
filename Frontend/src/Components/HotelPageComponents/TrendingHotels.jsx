import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const hotels = [
  {
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    city: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    city: "Agra",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    city: "Agra",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    city: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    city: "Agra",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    city: "Agra",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=400&h=500",
  },
];

const CustomNavigation = ({ sectionId }) => (
  <>
    <button
      className={`custom-prev-${sectionId} absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <ChevronLeft className="w-6 h-6 text-gray-600" />
    </button>
    <button
      className={`custom-next-${sectionId} absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <ChevronRight className="w-6 h-6 text-gray-600" />
    </button>
  </>
);

const HotelCard = ({ city, image }) => (
  <div className="relative w-[200px] h-[320px] rounded-2xl overflow-hidden group">
    <img
      src={image}
      alt={`${city} hotel`}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    <div className="absolute inset-0 flex items-center justify-center">
      <h3 className="text-2xl font-semibold text-white text-center px-4">
        {city}
      </h3>
    </div>
  </div>
);

const TrendingHotels = () => {
  return (
    <div className="p-8 bg-white max-w-7xl mx-auto shadow-lg rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl ml-8 font-Poppins font-semibold">
          Hotels from Trending destinations
        </h2>
      </div>

      <div className="relative">
        <div className="px-8 overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={32}
            slidesPerView="auto"
            navigation={{
              prevEl: ".custom-prev-trending",
              nextEl: ".custom-next-trending",
            }}
          >
            {hotels.map((hotel, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <HotelCard city={hotel.city} image={hotel.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <CustomNavigation sectionId="trending" />
      </div>
    </div>
  );
};

export default TrendingHotels;
