import React, { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "How do I book a hotel on your website?",
      answer:
        "To book a hotel, simply enter your destination, check-in and check-out dates, and the number of guests. Browse available hotels, select a room, and proceed with payment to confirm your booking.",
    },
    {
      question: "Can I modify or cancel my booking?",
      answer:
        "Yes, you can modify or cancel your booking based on the hotel's cancellation policy. Some bookings are non-refundable, while others allow free cancellation before a certain date. Check the specific hotel's policy before confirming your reservation.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit/debit cards, net banking, UPI, and digital wallets. Some hotels may also allow payment at check-in.",
    },
    {
      question: "Do you offer any loyalty programs or rewards?",
      answer:
        "Yes, we offer a rewards program where you can earn points for each booking. These points can be redeemed for discounts on future stays or exclusive perks.",
    },
    {
      question: "Is there a minimum stay requirement?",
      answer:
        "Minimum stay requirements vary by hotel and season. Some properties may require a minimum stay during peak periods or special events.",
    },
    {
      question: "What is your pet policy?",
      answer:
        "Pet policies vary by hotel. Some hotels are pet-friendly and may charge additional fees, while others do not allow pets. Please check the specific hotel's policy before booking.",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <div className="max-w-7xl shadow-lg my-5 mx-auto rounded-2xl px-16 py-8">
      <h1 className="text-2xl font-semibold mb-10">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="space-y-6">
        {displayedFaqs.map((faq, index) => (
          <div key={index} className="pb-6">
            <div className="mb-2">
              <h3 className="font-medium font-Poppins">Q: {faq.question}</h3>
            </div>
            <div>
              <p className="text-black font-Lora">
                <span className="font-Poppins text-black font-medium">A:</span>{" "}
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {faqs.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#347928] hover:bg-green-700 text-white px-8 py-2 mt-5 font-Poppins rounded-full text-md"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}

export default FAQ;
