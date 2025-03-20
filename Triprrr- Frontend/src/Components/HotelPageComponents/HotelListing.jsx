import React, { useState } from "react";
import { Star, Wifi, Car, Menu, X } from "lucide-react";

const filterSections = [
  {
    title: "Price Per Night",
    options: [
      { label: "0 - 3000", count: 455 },
      { label: "3000 - 6000", count: 123 },
      { label: "6000 - 9000", count: 89 },
      { label: "9000 - 12000", count: 45 },
      { label: "12000 - 15000", count: 23 },
      { label: "15000+", count: 12 },
    ],
  },
  {
    title: "Star Category",
    options: [
      { label: "5 Star", count: 234 },
      { label: "4 Star", count: 87 },
      { label: "3 Star", count: 45 },
    ],
  },
  {
    title: "Property Type",
    options: [
      { label: "Villa", count: 289 },
      { label: "Apartment", count: 145 },
      { label: "Hotel", count: 67 },
    ],
  },
  {
    title: "Based on Locality",
    options: [
      { label: "South Goa", count: 178 },
      { label: "Panjim", count: 145 },
      { label: "Calangute", count: 89 },
      { label: "Baga", count: 67 },
    ],
  },
];

const hotelListings = [
  {
    name: "The Grand Resort & Spa",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    price: 12500,
    stars: 5,
    userRating: 4.8,
    amenities: ["Free Wifi", "Free Parking", "Pool", "Spa"],
    checkIn: "2 PM",
    checkOut: "12 Noon",
  },
  {
    name: "The Grand Resort & Spa",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    price: 12500,
    stars: 5,
    userRating: 4.8,
    amenities: ["Free Wifi", "Free Parking", "Pool", "Spa"],
    checkIn: "2 PM",
    checkOut: "12 Noon",
  },
  {
    name: "The Grand Resort & Spa",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    price: 12500,
    stars: 5,
    userRating: 4.8,
    amenities: ["Free Wifi", "Free Parking", "Pool", "Spa"],
    checkIn: "2 PM",
    checkOut: "12 Noon",
  },
  {
    name: "The Grand Resort & Spa",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    price: 12500,
    stars: 5,
    userRating: 4.8,
    amenities: ["Free Wifi", "Free Parking", "Pool", "Spa"],
    checkIn: "2 PM",
    checkOut: "12 Noon",
  },
  {
    name: "The Grand Resort & Spa",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    price: 12500,
    stars: 5,
    userRating: 4.8,
    amenities: ["Free Wifi", "Free Parking", "Pool", "Spa"],
    checkIn: "2 PM",
    checkOut: "12 Noon",
  },
  {
    name: "The Grand Resort & Spa",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    price: 12500,
    stars: 5,
    userRating: 4.8,
    amenities: ["Free Wifi", "Free Parking", "Pool", "Spa"],
    checkIn: "2 PM",
    checkOut: "12 Noon",
  },
  {
    name: "The Grand Resort & Spa",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    price: 12500,
    stars: 5,
    userRating: 4.8,
    amenities: ["Free Wifi", "Free Parking", "Pool", "Spa"],
    checkIn: "2 PM",
    checkOut: "12 Noon",
  },
  {
    name: "The Grand Resort & Spa",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    price: 12500,
    stars: 5,
    userRating: 4.8,
    amenities: ["Free Wifi", "Free Parking", "Pool", "Spa"],
    checkIn: "2 PM",
    checkOut: "12 Noon",
  },
];

const StarRating = (props) => {
  const { stars, userRating } = props;
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-1">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
        <span className="ml-1 text-sm font-medium">{stars} Star Hotel</span>
      </div>
      <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-sm">
        {userRating} User Rating
      </div>
    </div>
  );
};

function HotelListing() {
  const [budget, setBudget] = useState("");
  const [activeSort, setActiveSort] = useState("popular");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 bg-white rounded-lg shadow px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {isFilterOpen ? <X size={20} /> : <Menu size={20} />}
            {isFilterOpen ? "Close Filters" : "Show Filters"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div
            className={`w-full lg:w-64 lg:flex-shrink-0 ${
              isFilterOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="space-y-4 lg:sticky lg:top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
              {/* Budget Card */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-lg mb-3">Your Budget</h3>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full border rounded-l px-3 py-2 text-sm focus:outline-none font-Poppins focus:ring-1 focus:ring-green-500 focus:border-green-500"
                    placeholder="₹ Enter amount"
                  />
                  <button className="bg-green-600 text-white px-4 py-2 text-sm font-medium rounded-r hover:bg-green-700 transition-colors">
                    Go
                  </button>
                </div>
              </div>

              {/* Filter Section Cards */}
              {filterSections.map((section) => (
                <div
                  key={section.title}
                  className="bg-white rounded-lg shadow p-4"
                >
                  <h3 className="font-semibold font-Poppins text-lg mb-3">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.options.map((option) => (
                      <label
                        key={option.label}
                        className="flex items-center gap-2 py-1 hover:bg-gray-50 rounded px-1 transition-colors cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-gray-300  text-green-600 focus:ring-green-500"
                        />
                        <span className="text-sm flex-1 font-Poppins">
                          {option.label}
                        </span>
                        <span className="text-gray-500 text-sm bg-gray-100 px-2 py-0.5 rounded-full">
                          {option.count}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hotel Listings */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <button
                    className={`px-3 py-1.5 rounded ${
                      activeSort === "popular"
                        ? "bg-green-100 text-black font-Poppins font-medium"
                        : "text-black font-Poppins"
                    }`}
                    onClick={() => setActiveSort("popular")}
                  >
                    Popular
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded ${
                      activeSort === "low-to-high"
                        ? "bg-green-100 text-black font-Poppins font-medium"
                        : "text-black font-Poppins"
                    }`}
                    onClick={() => setActiveSort("low-to-high")}
                  >
                    Price (Lowest first)
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded ${
                      activeSort === "high-to-low"
                        ? "bg-green-100 text-black font-Poppins font-medium"
                        : "text-black font-Poppins"
                    }`}
                    onClick={() => setActiveSort("high-to-low")}
                  >
                    Price (Highest first)
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded ${
                      activeSort === "rating-high-to-low"
                        ? "bg-green-100 text-black font-Poppins font-medium"
                        : "text-black font-Poppins"
                    }`}
                    onClick={() => setActiveSort("rating-high-to-low")}
                  >
                    User Rating (Highest first)
                  </button>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search Locality or Hotel"
                    className="w-full border rounded px-3 py-1.5 font-Poppins text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {hotelListings.map((hotel, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full sm:w-48 h-48 sm:h-40 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                        <div>
                          <h3 className="text-xl font-semibold">
                            {hotel.name}
                          </h3>
                          <div className="mt-1">
                            <StarRating
                              stars={hotel.stars}
                              userRating={hotel.userRating}
                            />
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-sm text-gray-500">
                            Starting from
                          </div>
                          <div className="text-2xl font-bold">
                            ₹{hotel.price}
                          </div>
                          <div className="text-sm text-gray-500">per night</div>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-4">
                        <div className="text-sm">
                          <div className="font-semibold">Check In</div>
                          <div>{hotel.checkIn}</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-semibold">Check Out</div>
                          <div>{hotel.checkOut}</div>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        {hotel.amenities.map((amenity, i) => (
                          <div key={i} className="flex items-center gap-1">
                            {amenity === "Free Wifi" && <Wifi size={16} />}
                            {amenity === "Free Parking" && <Car size={16} />}
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="w-full sm:w-auto border-green-600 border-2  text-green-600 px-6 py-2 rounded hover:bg-blue-700">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelListing;
