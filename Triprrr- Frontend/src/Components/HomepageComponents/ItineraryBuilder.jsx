import React from "react";
import { ChevronDown } from "lucide-react";

export function ItineraryBuilder() {
  return (
    <div className="bg-white rounded-l-full rounded-r-full p-0 flex items-stretch max-w-6xl w-full mx-4 shadow-lg overflow-hidden">
      <div className="flex-1 flex flex-col border-r border-gray-200 py-4 pl-4">
        <label className="text-green-600 text-sm font-Poppins font-medium px-4 pt-1">
          From
        </label>
        <div className="relative flex items-center px-4 pb-1">
          <select className="w-full text-black bg-transparent font-Poppins focus:outline-none text-md font-medium appearance-none cursor-pointer">
            <option>Select Starting Point</option>
          </select>
          <div className="pointer-events-none absolute right-4">
            <ChevronDown className="h-4 w-4 text-black" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col border-r border-gray-200 py-4 px-0">
        <label className="text-green-600 text-sm font-Poppins font-medium px-4 pt-1">
          To
        </label>
        <div className="relative flex items-center px-4 pb-1">
          <select className="w-full text-black font-Poppins bg-transparent focus:outline-none text-md font-medium appearance-none cursor-pointer">
            <option>Select Your Destination</option>
          </select>
          <div className="pointer-events-none absolute right-4">
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col border-r border-gray-200 py-4 px-0">
        <label className="text-green-600 text-sm font-Poppins font-medium px-4 pt-1">
          Duration
        </label>
        <div className="relative flex items-center px-4 pb-1">
          <select className="w-full text-black font-Poppins bg-transparent focus:outline-none text-md font-medium appearance-none cursor-pointer">
            <option>Select Date</option>
          </select>
          <div className="pointer-events-none absolute right-4">
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col border-r border-gray-200 py-4 px-0">
        <label className="text-green-600 text-sm font-Poppins font-medium px-4 pt-1">
          Passengers
        </label>
        <div className="relative flex items-center px-4 pb-1">
          <select className="w-full text-black font-Poppins bg-transparent focus:outline-none text-md font-medium appearance-none cursor-pointer">
            <option>Select Passengers</option>
          </select>
          <div className="pointer-events-none absolute right-4">
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="bg-[#347928] font-Poppins flex items-center text-md font-semibold px-12  justify-center">
        {/* <button className="bg-[#347928] text-white px-12 w-full rounded-r-3xl  hover:bg-green-700 transition-colors text-lg font-medium flex items-center"> */}
        Build Itinerary
        {/* </button> */}
      </div>
    </div>
  );
}
