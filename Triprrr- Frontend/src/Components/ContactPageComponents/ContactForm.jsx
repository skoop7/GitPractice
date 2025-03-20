import React, { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import ContactUs1 from "../../assets/ContactUs1.png";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    "Franchise",
    "Bus Booking",
    "Train Booking",
    "Flight Booking",
    "Hotel Booking",
  ];

  const validateForm = () => {
    let newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name should contain only alphabets and spaces.";
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number should be exactly 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      service,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`${BASE_URL}/dashboard/add-query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setErrors({});
      }, 3000);
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="mt-10 sm:mt-10 bg-white">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <div className="w-full">
              <img
                src={ContactUs1}
                alt="Person writing in notebook"
                className="w-full h-[300px] sm:h-[640px] object-cover rounded-[1.5rem] sm:rounded-[2.5rem]"
              />
            </div>

            <div className="w-full">
              <h2 className="text-4xl sm:text-6xl font-semibold font-Poppins text-center text-[#347928] mb-4">
                Get in Touch
              </h2>
              <p className="text-black font-Poppins text-center font-medium text-lg sm:text-lg mb-6 sm:mb-8 px-2 sm:px-0">
                Feel free to contact us for any kind of travel booking. We will
                get back to you at the earliest with the support.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full p-3 border border-gray-300 font-Poppins rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full p-3 border font-Poppins border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="w-full p-3 border font-Poppins border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full p-3 border font-Poppins border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-left flex items-center justify-between"
                  >
                    <span
                      className={
                        formData.service ? "text-black" : "text-gray-500"
                      }
                    >
                      {formData.service || "Select type of query"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceSelect(service)}
                          className="w-full text-left px-4 py-2 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 font-Poppins"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={4}
                    className="w-full p-3 font-Poppins border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-1/2 bg-[#347928] text-white font-Poppins py-3 px-2 mt-2 text-lg sm:text-xl border-2 rounded-xl hover:bg-[#0d1757] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full mx-4 transform transition-all duration-500 scale-100 opacity-100">
            <div className="text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. We will get back to you
                soon.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
