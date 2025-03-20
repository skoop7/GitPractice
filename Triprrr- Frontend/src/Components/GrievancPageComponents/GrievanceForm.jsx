import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import BASE_URL from "../../utils/Constants.js";
import Grievance from "../../assets/Grievance.JPG";

function GrievanceForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const departmentOptions = [
    { value: "bus", label: "Bus" },
    { value: "train", label: "Train" },
    { value: "flight", label: "Flight" },
    { value: "hotel", label: "Hotel" },
  ];

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const transformedData = {
        name: data.name,
        bookingId: data.bookingId,
        contact: data.contactNo,
        department: data.department,
        description: data.query,
      };

      const response = await fetch(`http://localhost:5000/grievance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      const responseData = await response.json();

      if (!responseData.success) {
        throw new Error(responseData.message || "Something went wrong");
      }

      setSuccess(responseData.message || "Grievance submitted successfully!");
      reset();
    } catch (err) {
      setError(err.message || "Failed to submit grievance");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side - Image and Text */}
        <div className="w-full lg:w-1/2 space-y-10">
          <img
            src={Grievance}
            alt="Customer Support"
            className="w-full h-[630px] object-cover"
          />
        </div>

        {/* Right side - Form Card */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Have a Complaint? We're Here to Listen!
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className={`w-full px-4 py-2.5  border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters long",
                      },
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name should only contain letters and spaces",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Booking ID"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                      errors.bookingId ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("bookingId", {
                      required: "Booking ID is required",
                      pattern: {
                        value: /^[A-Z0-9]{6,}$/,
                        message:
                          "Please enter a valid booking ID (minimum 6 characters, uppercase letters and numbers only)",
                      },
                    })}
                  />
                  {errors.bookingId && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.bookingId.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Contact No."
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                      errors.contactNo ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("contactNo", {
                      required: "Contact number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit contact number",
                      },
                    })}
                  />
                  {errors.contactNo && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.contactNo.message}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <select
                    className={`w-full px-4 py-2.5 border rounded-lg appearance-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500 transition-all ${
                      errors.department ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("department", {
                      required: "Please select a department",
                    })}
                  >
                    <option value="">
                      Select your Ameneties or Transportation
                    </option>
                    {departmentOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none h-5 w-5" />
                  {errors.department && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.department.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Write your query"
                    className={`w-full px-4 py-2.5 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                      errors.query ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("query", {
                      required: "Please describe your query",
                      minLength: {
                        value: 20,
                        message:
                          "Please provide more details (minimum 20 characters)",
                      },
                      maxLength: {
                        value: 500,
                        message: "Query cannot exceed 500 characters",
                      },
                    })}
                  />
                  {errors.query && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.query.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#347928] text-white font-medium rounded-lg hover:bg-green-800 transition-colors disabled:bg-green-500 disabled:cursor-not-allowed transform hover:scale-105 duration-200 shadow-md"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit Complaint"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrievanceForm;
