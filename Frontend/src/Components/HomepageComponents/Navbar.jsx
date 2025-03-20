import React from "react";
import { Plane, CircleUserRound, HandCoins } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Trains", href: "#" },
  { label: "Flights", href: "#" },
  { label: "Hotels", href: "#" },
  { label: "Bus", href: "#" },
  { label: "Top Destinations", href: "#" },
];

export function Navbar() {
  return (
    <nav className="px-10 py-10 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#FFFBE6] rounded-full p-2">
        <div className="flex items-center gap-1  py-3 px-6 rounded-full">
          <Plane className="text-green-700" size={24} />
          <span className="text-green-700 font-bold text-2xl">triprrr</span>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-16">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-md text-black font-semibold font-Poppins hover:text-green-400"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-4">
              <button className="p-2.5 hover:bg-white/10 rounded-full transition-colors">
                <HandCoins className="text-black" size={24} />
              </button>
              <button className="p-2.5 hover:bg-white/10 rounded-full transition-colors">
                <CircleUserRound className="text-black" size={24} />
              </button>
            </div>
            <button className="bg-green-700 font-Poppins text-white mx-1 px-11 py-2 rounded-full text-[20px] font-bold hover:bg-green-800 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
