import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const hotels = [
  {
    city: "Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Delhi",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    city: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1626198226928-617fc6c6203e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1565018054866-968e244671af?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Chennai",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1441911645956-df6e9bbc5496?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Udaipur",
    image:
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HotelCard = ({ city, image }) => (
  <button
    onClick={() => alert(`Clicked ${city} hotel!`)}
    className="relative w-[200px] h-[320px] rounded-2xl overflow-hidden mb-5 group cursor-pointer"
  >
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
  </button>
);

const TrendingHotels = () => {
  return (
    <div className="p-8 bg-white max-w-7xl mx-auto my-10 shadow-2xl rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl ml-12 font-Poppins font-semibold">
          Hotels from Trending destinations
        </h2>
      </div>

      <div className="relative">
        <div className="px-8 overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView="auto"
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {hotels.map((hotel, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <HotelCard city={hotel.city} image={hotel.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TrendingHotels;
