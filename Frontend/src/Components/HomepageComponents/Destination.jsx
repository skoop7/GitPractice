import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Plane, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import destinationBG from "../../assets/destinationBG.png";
import planeLeft from "../../assets/planeLeft.png";
import planeRight from "../../assets/planeRight.png";
import DottedPlaneDecorate from "../../assets/DottedPlaneDecorate.png";

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
  <div className="relative rounded-2xl overflow-hidden w-[220px] h-[320px] group">
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
  </div>
);

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

const CitySelector = ({ selectedCity, onCityChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-2xl font-semibold text-green-600 hover:text-green-700 transition-colors focus:outline-none"
      >
        {selectedCity}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto">
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
  sectionId,
  selectedCity,
}) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-6">
      <h2 className="text-2xl font-Poppins ml-8 font-medium">
        Flights to popular {domestic ? "domestic" : "international"}{" "}
        destinations from{" "}
      </h2>
      <CitySelector
        selectedCity={selectedCity}
        onCityChange={(city) => console.log("Selected city:", city)}
      />
    </div>
    <div className="relative px-8">
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView="auto"
        navigation={{
          prevEl: `.custom-prev-${sectionId}`,
          nextEl: `.custom-next-${sectionId}`,
        }}
        allowTouchMove={false}
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <DestinationCard {...dest} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomNavigation sectionId={sectionId} />
    </div>
  </div>
);

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
      "https://images.unsplash.com/photo-1570376335180-5b8af9417744?auto=format&fit=crop&q=80&w=400&h=500",
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
];

const DecorativeImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`absolute w-32 h-32 object-contain opacity-20 ${className}`}
  />
);

function App() {
  const [selectedCity, setSelectedCity] = useState("Delhi");

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <DecorativeImage
        src={planeRight}
        alt="Decorative airplane"
        className="top-8 left-2"
      />
      <DecorativeImage
        src={DottedPlaneDecorate}
        alt="Decorative compass"
        className="top-8 right-8"
      />
      <DecorativeImage
        src={planeLeft}
        alt="Decorative map"
        className="bottom-8 right-2"
      />

      <div
        className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-8 relative"
        style={{ backgroundImage: `url(${destinationBG})` }}
      >
        <DestinationSection
          title="International Destinations"
          destinations={internationalDestinations}
          sectionId="international"
          selectedCity={selectedCity}
        />

        <div className="flex justify-center my-6">
          <button className="bg-[#347928] text-white font-Poppins px-8 py-2 rounded-full text-md hover:bg-green-700 transition-colors">
            See all locations
          </button>
        </div>

        <DestinationSection
          title="Domestic Destinations"
          destinations={domesticDestinations}
          domestic
          sectionId="domestic"
          selectedCity={selectedCity}
        />

        <div className="flex justify-center mt-6">
          <button className="bg-[#347928] text-white px-8 font-Poppins py-2 rounded-full text-md hover:bg-green-700 transition-colors">
            See all locations
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
