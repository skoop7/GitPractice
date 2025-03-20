import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  Wifi,
  Users,
  Coffee,
  Star,
  User,
  ChevronDown,
  Plus,
  Minus,
  X,
  Hotel,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const hotelImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1000",
];

const facilities = [
  { name: "Wireless Connectivity", icon: <Wifi className="w-5 h-5" /> },
  { name: "Children's Club", icon: <Users className="w-5 h-5" /> },
  { name: "Cocktail Lounge", icon: <Coffee className="w-5 h-5" /> },
  { name: "Free Parking", icon: null },
  { name: "Accessible Facilities", icon: null },
];

const roomTypes = [
  {
    name: "Standard Room",
    price: "INR 7000",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    amenities: ["Wireless Connectivity", "Accessible Facilities"],
  },
  {
    name: "Luxury Room",
    price: "INR 9000",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000",
    amenities: ["Wireless Connectivity", "Accessible Facilities"],
  },
  {
    name: "Premium Luxury Room",
    price: "INR 17000",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000",
    amenities: ["Wireless Connectivity", "Accessible Facilities"],
  },
  {
    name: "Ocean View Suite",
    price: "INR 25000",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1000",
    amenities: ["Wireless Connectivity", "Accessible Facilities"],
  },
  {
    name: "Presidential Suite",
    price: "INR 35000",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1000",
    amenities: ["Wireless Connectivity", "Accessible Facilities"],
  },
];

const reviewImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=500",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=500",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=500",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=500",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=500",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=500",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=500",
];

const ratingData = {
  average: 4.5,
  total: 365,
  distribution: [
    { stars: 5, percentage: 77 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ],
};

function HotelCarousel() {
  const [isRoomConfigOpen, setIsRoomConfigOpen] = useState(false);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [rooms, setRooms] = useState([{ id: 1, adults: 2, children: 0 }]);
  const [selectedRoomType, setSelectedRoomType] = useState(roomTypes[0]);
  const [isRoomTypeDropdownOpen, setIsRoomTypeDropdownOpen] = useState(false);
  const [isPriceDetailsOpen, setIsPriceDetailsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("auto");

  useEffect(() => {
    const updateMaxHeight = () => {
      if (dropdownRef.current) {
        const dropdownTop = dropdownRef.current.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const maxAllowedHeight = viewportHeight - dropdownTop - 20;
        setMaxHeight(`${maxAllowedHeight}px`);
      }
    };

    if (isRoomConfigOpen) {
      updateMaxHeight();
      window.addEventListener("resize", updateMaxHeight);
    }

    return () => window.removeEventListener("resize", updateMaxHeight);
  }, [isRoomConfigOpen]);

  const addRoom = () => {
    if (rooms.length < 5) {
      setRooms([...rooms, { id: rooms.length + 1, adults: 1, children: 0 }]);
    }
  };

  const updateRoom = (roomId, field, value) => {
    setRooms(
      rooms.map((room) => {
        if (room.id === roomId) {
          const maxValue = field === "adults" ? 4 : 3;
          return {
            ...room,
            [field]: Math.min(
              Math.max(field === "adults" ? 1 : 0, value),
              maxValue
            ),
          };
        }
        return room;
      })
    );
  };

  const removeRoom = (roomId) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((room) => room.id !== roomId));
    }
  };

  const getTotalGuests = () => {
    const totalAdults = rooms.reduce((sum, room) => sum + room.adults, 0);
    const totalChildren = rooms.reduce((sum, room) => sum + room.children, 0);
    return `${rooms.length} Room${rooms.length > 1 ? "s" : ""}, ${
      totalAdults + totalChildren
    } Guest${totalAdults + totalChildren > 1 ? "s" : ""}`;
  };

  const calculateTotalPrice = () => {
    const basePrice = parseInt(selectedRoomType.price.replace(/[^0-9]/g, ""));
    const totalRooms = rooms.length;
    const subtotal = basePrice * totalRooms;
    const tax = subtotal * 0.18; // 18% tax
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const handlePromoCodeSubmit = (e) => {
    e.preventDefault();
    // Add promo code logic here
    setIsPromoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Holiday Inn Resort GOA</h1>

        {/* Carousel section */}
        <div className="mb-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            className="w-full"
          >
            {hotelImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Hotel view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex gap-8">
          {/* Main content */}
          <div className="w-2/3">
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex gap-4 mb-6">
                  <button className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium">
                    Resort
                  </button>
                  <button className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium">
                    Family Hotel
                  </button>
                  <button className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium">
                    Beach Hotel
                  </button>
                </div>

                <section>
                  <h2 className="text-lg font-semibold mb-4">
                    Information and Facilities
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {facilities.map((facility, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {facility.icon}
                        <span>{facility.name}</span>
                        {index === 2 && (
                          <span className="text-green-600 text-sm ml-2">
                            (View All)
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <section>
                  <h2 className="text-lg font-semibold mb-4">
                    General Information
                  </h2>
                  <div className="prose prose-sm max-w-none">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-gray-600 mb-2">
                        Description
                      </h3>
                      <p className="text-sm text-gray-600">
                        Welcome to Holiday Inn Resort, your
                        Mediterranean-inspired retreat located at Motor Beach,
                        Candolim, in South Goa. Enjoy direct access to the
                        stunning golden bay, offering a unique and unforgettable
                        experience.
                      </p>
                      <p className="mt-4 text-sm text-gray-600">
                        Conveniently located 39km from Dabolim International
                        Airport and 17km from Margao Railway Station, our resort
                        provides an ideal setting for a relaxing stay in Goa.
                        Our spacious rooms and suites, along with a balcony,
                        offer breathtaking views of the Arabian Sea and
                        beautifully landscaped gardens.
                      </p>
                      <p className="mt-4 text-sm text-gray-600">
                        Holiday Inn Resort features versatile indoor and outdoor
                        venues perfect for meetings, events, and destination
                        weddings. Our Ballroom, one of Goa's largest with a
                        two-banquet halls at 5,500 sq. ft, along with 1,25,000
                        sq ft of flexible lawn space, creates the perfect
                        backdrop for romantic celebrations.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <section>
                  <h2 className="text-lg font-semibold mb-4">Room Type</h2>
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={2}
                    navigation={true}
                    className="room-type-swiper"
                  >
                    {roomTypes.map((room, index) => (
                      <SwiperSlide key={index}>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                          <div className="aspect-[4/3]">
                            <img
                              src={room.image}
                              alt={room.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">
                              {room.name}
                            </h3>
                            <p className="text-gray-700 mb-3">{room.price}</p>
                            <div className="space-y-2">
                              {room.amenities.map((amenity, amenityIndex) => (
                                <div
                                  key={amenityIndex}
                                  className="text-sm text-gray-600"
                                >
                                  {amenity}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </section>
              </div>

              <h2 className="text-2xl font-semibold mb-4">
                Rating and Reviews
              </h2>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-center">
                    <div className="bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-1">
                      <span className="text-2xl font-bold">
                        {ratingData.average}
                      </span>
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold">Very Good</div>
                      <div className="text-sm text-gray-600">
                        {ratingData.total} ratings
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {ratingData.distribution.map((rating, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-3">{rating.stars}</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400 rounded-full"
                            style={{ width: `${rating.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">
                          {rating.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="space-y-8">
                  <div className="border-b pb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <User className="w-5 h-5" />
                      <span className="font-medium">User 1</span>
                      <span className="text-sm text-gray-500">
                        • 26 Dec 2024
                      </span>
                      <div className="ml-auto flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded">
                        <span className="text-sm font-medium">4.5</span>
                        <Star className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {reviewImages.slice(0, 7).map((image, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-lg overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`Review image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <User className="w-5 h-5" />
                      <span className="font-medium">User 2</span>
                      <span className="text-sm text-gray-500">
                        • 26 Dec 2024
                      </span>
                    </div>

                    <p className="text-gray-600">
                      This hotel is very good and clean This hotel is very good
                      and clean This hotel is very good and clean This hotel is
                      very good and clean This hotel is very good and clean
                    </p>

                    <div className="mt-4">
                      <img
                        src={reviewImages[0]}
                        alt="Review image"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  <button className="text-green-600 font-medium">
                    See All Reviews
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="w-1/3">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Summary</h2>

                <div className="space-y-6">
                  {/* Price Display */}
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold">
                      {selectedRoomType.price}
                    </span>
                    <span className="text-gray-400 line-through">
                      INR{" "}
                      {parseInt(selectedRoomType.price.replace(/[^0-9]/g, "")) *
                        1.3}
                    </span>
                  </div>

                  {/* Check-in/Check-out */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Check in:
                      </label>
                      <div className="text-sm font-medium">
                        Sat 8 Mar from 15:00
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Check out:
                      </label>
                      <div className="text-sm font-medium">
                        Sat 12 Mar until 12:00
                      </div>
                    </div>
                  </div>

                  {/* Room Selection */}
                  <div className="space-y-3 relative">
                    <button
                      onClick={() => setIsRoomConfigOpen(!isRoomConfigOpen)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-left hover:border-gray-300 transition-colors flex justify-between items-center"
                    >
                      <span>{getTotalGuests()}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          isRoomConfigOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Room Configuration Dropdown */}
                    {isRoomConfigOpen && (
                      <div
                        ref={dropdownRef}
                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50"
                        style={{ maxHeight, overflowY: "auto" }}
                      >
                        <h3 className="text-lg font-semibold mb-4">
                          Room Configuration
                        </h3>

                        <div className="space-y-4">
                          {rooms.map((room) => (
                            <div
                              key={room.id}
                              className="bg-gray-50 rounded-lg p-4"
                            >
                              <div className="flex justify-between items-center mb-4">
                                <h4 className="font-medium">Room {room.id}</h4>
                                {rooms.length > 1 && (
                                  <button
                                    onClick={() => removeRoom(room.id)}
                                    className="text-red-500 text-sm hover:text-red-600"
                                  >
                                    Remove
                                  </button>
                                )}
                              </div>

                              {/* Adults */}
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <span className="font-medium">Adults</span>
                                  <p className="text-sm text-gray-500">
                                    Age 16+
                                  </p>
                                </div>
                                <div className="flex items-center gap-4">
                                  <button
                                    onClick={() =>
                                      updateRoom(
                                        room.id,
                                        "adults",
                                        room.adults - 1
                                      )
                                    }
                                    className="p-1.5 rounded-full hover:bg-gray-200 disabled:opacity-50"
                                    disabled={room.adults <= 1}
                                  >
                                    <Minus className="w-4 h-4" />
                                  </button>
                                  <span className="w-6 text-center">
                                    {room.adults}
                                  </span>
                                  <button
                                    onClick={() =>
                                      updateRoom(
                                        room.id,
                                        "adults",
                                        room.adults + 1
                                      )
                                    }
                                    className="p-1.5 rounded-full hover:bg-gray-200 disabled:opacity-50"
                                    disabled={room.adults >= 4}
                                  >
                                    <Plus className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>

                              {/* Children */}
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="font-medium">Children</span>
                                  <p className="text-sm text-gray-500">
                                    Age 0-15
                                  </p>
                                </div>
                                <div className="flex items-center gap-4">
                                  <button
                                    onClick={() =>
                                      updateRoom(
                                        room.id,
                                        "children",
                                        room.children - 1
                                      )
                                    }
                                    className="p-1.5 rounded-full hover:bg-gray-200 disabled:opacity-50"
                                    disabled={room.children <= 0}
                                  >
                                    <Minus className="w-4 h-4" />
                                  </button>
                                  <span className="w-6 text-center">
                                    {room.children}
                                  </span>
                                  <button
                                    onClick={() =>
                                      updateRoom(
                                        room.id,
                                        "children",
                                        room.children + 1
                                      )
                                    }
                                    className="p-1.5 rounded-full hover:bg-gray-200 disabled:opacity-50"
                                    disabled={room.children >= 3}
                                  >
                                    <Plus className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                          <button
                            onClick={addRoom}
                            disabled={rooms.length >= 5}
                            className="text-green-600 font-medium px-4 py-2 rounded-lg hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Add Room {rooms.length >= 5 && "(Max 5)"}
                          </button>
                          <button
                            onClick={() => setIsRoomConfigOpen(false)}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700"
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Room Type Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() =>
                          setIsRoomTypeDropdownOpen(!isRoomTypeDropdownOpen)
                        }
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-left hover:border-gray-300 transition-colors flex justify-between items-center"
                      >
                        <span>{selectedRoomType.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            isRoomTypeDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isRoomTypeDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                          {roomTypes.map((room, index) => (
                            <button
                              key={index}
                              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex justify-between items-center"
                              onClick={() => {
                                setSelectedRoomType(room);
                                setIsRoomTypeDropdownOpen(false);
                              }}
                            >
                              <span>{room.name}</span>
                              <span className="text-gray-600">
                                {room.price}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div>
                    <button
                      onClick={() => setIsPromoModalOpen(true)}
                      className="text-green-600 font-medium text-sm hover:text-green-700"
                    >
                      Do you have any promo code?
                    </button>
                  </div>

                  {/* Total Price */}
                  <div>
                    <button
                      onClick={() => setIsPriceDetailsOpen(!isPriceDetailsOpen)}
                      className="w-full flex items-center justify-between py-2 border-t border-gray-100"
                    >
                      <span className="font-medium">Total Price</span>
                      <div className="flex items-center gap-2">
                        <span>
                          INR {calculateTotalPrice().total.toFixed(2)}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            isPriceDetailsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>
                    {isPriceDetailsOpen && (
                      <div className="mt-2 space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>
                            INR {calculateTotalPrice().subtotal.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax (18%)</span>
                          <span>
                            INR {calculateTotalPrice().tax.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between font-medium text-black pt-2 border-t">
                          <span>Total</span>
                          <span>
                            INR {calculateTotalPrice().total.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Book Now Button */}
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Code Modal */}
      {isPromoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Enter Promo Code</h3>
              <button
                onClick={() => setIsPromoModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handlePromoCodeSubmit}>
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter your promo code"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg mb-4"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsPromoModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelCarousel;
