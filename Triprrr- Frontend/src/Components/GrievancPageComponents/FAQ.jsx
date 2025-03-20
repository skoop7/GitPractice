import React, { useState } from "react";
import {
  Bus,
  Train,
  Plane,
  Building2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

function FAQ() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showMore, setShowMore] = useState({});

  const faqData = [
    {
      icon: <Bus className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Bus",
      faqs: [
        {
          question: "How do I book a bus ticket?",
          answer:
            "Enter source and destination, select travel date, choose your preferred bus, and proceed with payment to confirm your booking.",
        },
        {
          question: "What is the luggage allowance for bus travel?",
          answer:
            "Most buses allow up to 15kg per passenger. Additional charges may apply for excess baggage.",
        },
        {
          question: "Can I cancel my bus ticket?",
          answer:
            "Yes, cancellation is allowed as per the operator's policy. Refunds depend on the time of cancellation.",
        },
        {
          question: "How will I receive my bus ticket?",
          answer:
            "After booking, your e-ticket will be sent to your registered email and phone number.",
        },
      ],
    },
    {
      icon: <Train className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Train",
      faqs: [
        {
          question: "How can I check PNR status?",
          answer:
            "Enter your 10-digit PNR number in the PNR status section to check your booking status.",
        },
        {
          question: "What are the different classes available?",
          answer:
            "Available classes include 1AC, 2AC, 3AC, Sleeper, and General compartments.",
        },
        {
          question: "How do I cancel my train ticket?",
          answer:
            "Train tickets can be canceled online through the 'Manage Booking' section. Refunds depend on the IRCTC cancellation policy.",
        },
        {
          question: "Can I change my train ticket after booking?",
          answer:
            "Modifications are allowed for date and class changes, subject to availability and applicable charges.",
        },
      ],
    },
    {
      icon: <Plane className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Flight",
      faqs: [
        {
          question: "How do I book a flight ticket?",
          answer:
            "Enter your departure and destination cities, select travel dates, choose a flight, and complete payment.",
        },
        {
          question: "Can I cancel my flight ticket?",
          answer:
            "Yes, flight tickets can be canceled as per airline policies. Refund eligibility depends on the fare type.",
        },
        {
          question: "How much baggage is allowed on flights?",
          answer:
            "Baggage allowance varies by airline. Check your ticket details for specific limits.",
        },
        {
          question: "How do I check in for my flight?",
          answer:
            "Online check-in is available 24 hours before departure. You can also check in at the airport.",
        },
      ],
    },
    {
      icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Hotel",
      faqs: [
        {
          question: "How do I book a hotel room?",
          answer:
            "Enter your destination, select check-in and check-out dates, choose a hotel, and complete payment.",
        },
        {
          question: "What is the cancellation policy for hotel bookings?",
          answer:
            "Cancellation policies vary by hotel. Some offer free cancellation, while others may charge a fee.",
        },
        {
          question: "Can I modify my hotel booking?",
          answer:
            "Yes, modifications like date changes are allowed based on hotel policies and availability.",
        },
        {
          question: "Is breakfast included in my hotel booking?",
          answer:
            "It depends on the hotel. Check the room details before booking to see if breakfast is included.",
        },
      ],
    },
  ];

  const toggleCategory = (categoryTitle) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle],
    }));
  };

  const toggleShowMore = (categoryTitle) => {
    setShowMore((prev) => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 lg:px-8">
      <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqData.map((category) => (
            <div
              key={category.title}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full flex items-center justify-between p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  {category.icon}
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {category.title}
                  </h2>
                </div>
                {expandedCategories[category.title] ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
              {expandedCategories[category.title] && (
                <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                  {category.faqs
                    .slice(0, showMore[category.title] ? undefined : 3)
                    .map((faq, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 last:border-0 pb-3"
                      >
                        <h3 className="font-medium text-base sm:text-lg mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  {category.faqs.length > 3 && (
                    <div className="flex justify-center mt-4">
                      <button
                        onClick={() => toggleShowMore(category.title)}
                        className="bg-[#347928] hover:bg-green-700 text-white px-6 sm:px-8 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200"
                      >
                        {showMore[category.title] ? "View Less" : "View More"}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
