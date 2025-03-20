import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronDown } from "lucide-react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import destinationBG from "../../assets/destinationBG.png";

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];

const DestinationCard = ({ city, image, price, temperature }) => (
  <Link
    to={`/destination/${city.toLowerCase().replace(/\s+/g, "-")}`}
    className="block relative rounded-2xl overflow-hidden w-[220px] h-[320px] group transition-transform hover:scale-[1.02]"
  >
    <img
      src={image}
      alt={city}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    <div className="absolute bottom-0 left-0 p-4 text-white w-full">
      <h3 className="text-xl font-bold mb-2">{city}</h3>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-80">Starts from</p>
          <p className="font-semibold text-lg">INR {price}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">{temperature}°C</p>
        </div>
      </div>
    </div>
  </Link>
);

const CitySelector = ({ selectedCity, onCityChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-2xl font-Poppins font-semibold text-green-600 hover:text-green-700 transition-colors focus:outline-none"
      >
        {selectedCity}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-48 rounded-lg bg-white shadow-lg max-h-60 overflow-auto">
          <div className="py-1">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => {
                  onCityChange(city);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedCity === city
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DestinationSection = ({
  title,
  destinations,
  domestic,
  selectedCity,
}) => {
  const swiperRef = useRef();

  const handleMouseEnter = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-Poppins font-medium ml-4">
          Flights to popular {domestic ? "domestic" : "international"}{" "}
          destinations from{" "}
        </h2>
        <CitySelector
          selectedCity={selectedCity}
          onCityChange={(city) => console.log("Selected city:", city)}
        />
      </div>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView="auto"
          loop={true}
          loopedSlides={destinations.length}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          allowTouchMove={true}
          grabCursor={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {destinations.map((dest, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <DestinationCard {...dest} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const internationalDestinations = [
  {
    city: "Denmark",
    image:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "3",
  },
  {
    city: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "10",
  },
  {
    city: "Sweden",
    image:
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "6",
  },
  {
    city: "Spain",
    image:
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "8",
  },
  {
    city: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1515896769750-31548aa180ed?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "8",
  },
  {
    city: "Monaco",
    image:
      "https://images.unsplash.com/photo-1552751753-0fc84ae5b6c8?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "9",
  },
  {
    city: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1515896769750-31548aa180ed?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "8",
  },
  {
    city: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1515896769750-31548aa180ed?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "8",
  },
  {
    city: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1515896769750-31548aa180ed?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "8",
  },
];

const domesticDestinations = [
  {
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "36",
  },
  {
    city: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "28",
  },
  {
    city: "Agra",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "29",
  },
  {
    city: "Pune",
    image:
      "https://images.unsplash.com/photo-1572782252655-9c8771392601?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "8000",
    temperature: "34",
  },
  {
    city: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "30",
  },
  {
    city: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "30",
  },
  {
    city: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "30",
  },
  {
    city: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?auto=format&fit=crop&q=80&w=400&h=500",
    price: "8000",
    temperature: "30",
  },
];

function Destination() {
  const [selectedCity, setSelectedCity] = useState("Delhi");

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full max-w-[2000px] mx-auto px-0 pb-12">
        <div
          className="w-full bg-white rounded-3xl shadow-lg p-8 relative overflow-hidden"
          style={{
            backgroundImage: `url(${destinationBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <DestinationSection
            title="International Destinations"
            destinations={internationalDestinations}
            selectedCity={selectedCity}
          />

          <DestinationSection
            title="Domestic Destinations"
            destinations={domesticDestinations}
            domestic
            selectedCity={selectedCity}
          />
        </div>
      </div>
    </div>
  );
}

export default Destination;
