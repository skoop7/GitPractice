import React from "react";
import { ChevronDown } from "lucide-react";

export function ItineraryBuilder() {
  return (
    <div className="bg-white rounded-full p-4 flex items-center gap-4 max-w-6xl w-full mx-4 shadow-lg">
      <div className="flex-1 flex flex-col border-r border-gray-200 pr-4">
        <label className="text-green-600 text-sm font-Poppins font-medium px-4 pt-1">
          From
        </label>
        <div className="relative flex items-center px-4 pb-1">
          <select className="w-full text-black bg-transparent font-Poppins focus:outline-none text-sm appearance-none cursor-pointer">
            <option>Select Starting Point</option>
          </select>
          <div className="pointer-events-none absolute right-4">
            <ChevronDown className="h-4 w-4 text-black" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col border-r border-gray-200 pr-4">
        <label className="text-green-600 text-sm font-Poppins font-medium px-4 pt-1">
          To
        </label>
        <div className="relative flex items-center px-4 pb-1">
          <select className="w-full text-black font-Poppins bg-transparent focus:outline-none text-sm appearance-none cursor-pointer">
            <option>Select Your Destination</option>
          </select>
          <div className="pointer-events-none absolute right-4">
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col border-r border-gray-200 pr-4">
        <label className="text-green-600 text-sm font-Poppins font-medium px-4 pt-1">
          Duration
        </label>
        <div className="relative flex items-center px-4 pb-1">
          <select className="w-full text-black font-Poppins bg-transparent focus:outline-none text-sm appearance-none cursor-pointer">
            <option>Select Date</option>
          </select>
          <div className="pointer-events-none absolute right-4">
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col border-r border-gray-200 pr-4">
        <label className="text-green-600 text-sm font-Poppins font-medium px-4 pt-1">
          Passengers
        </label>
        <div className="relative flex items-center px-4 pb-1">
          <select className="w-full text-black font-Poppins bg-transparent focus:outline-none text-sm appearance-none cursor-pointer">
            <option>Select Passengers</option>
          </select>
          <div className="pointer-events-none absolute right-4">
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors text-sm font-medium whitespace-nowrap">
        Build Itinerary
      </button>
    </div>
  );
}
