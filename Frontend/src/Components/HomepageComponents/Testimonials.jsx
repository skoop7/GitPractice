import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  const testimonials = [
    {
      text: "I recently used Triperr to book tickets for a concert, and I must say, the experience was excellent! The website is user-friendly, and I had no trouble finding and purchasing my tickets instantly. The customer support team was also very responsive when I had a query. Highly recommend this platform for hassle-free ticket bookings!",
      author: "Abhay Sharma",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    },
    {
      text: "I recently used Triperr to book tickets for a concert, and I must say, the experience was excellent! The website is user-friendly, and I had no trouble finding and purchasing my tickets instantly. The customer support team was also very responsive when I had a query. Highly recommend this platform for hassle-free ticket bookings!",
      author: "Catherine Langford",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
    },
    {
      text: "I recently used Triperr to book tickets for a concert, and I must say, the experience was excellent! The website is user-friendly, and I had no trouble finding and purchasing my tickets instantly. The customer support team was also very responsive when I had a query. Highly recommend this platform for hassle-free ticket bookings!",
      author: "Abhijit K",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    },
    {
      text: "I recently used Triperr to book tickets for a concert, and I must say, the experience was excellent! The website is user-friendly, and I had no trouble finding and purchasing my tickets instantly. The customer support team was also very responsive when I had a query. Highly recommend this platform for hassle-free ticket bookings!",
      author: "Abhijit K",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    },
  ];

  return (
    <div
      className="relative w-full min-h-[500px] bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Testimonials
        </h2>

        <div className="relative testimonials-slider">
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg">
                  {/* Speech bubble pointer */}
                  <div className="absolute -bottom-4 left-16 w-8 h-8 bg-white transform rotate-45"></div>

                  <div className="flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>

                {/* Author info below the speech bubble */}
                <div className="mt-8 flex items-center gap-3 pl-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <span className="font-semibold text-white">
                    {testimonial.author}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
