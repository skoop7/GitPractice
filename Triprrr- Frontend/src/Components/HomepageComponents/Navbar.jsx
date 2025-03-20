import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/Logo1.png";
import forex from "../../assets/forex.png";
import User from "../../assets/User.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Trains", to: "/trains" },
  { label: "Flights", to: "/flights" },
  { label: "Hotels", to: "/hotels" },
  { label: "Bus", to: "/bus" },
  { label: "Top Destinations", to: "/destinations" },
];

export function Navbar() {
  return (
    <nav className="px-10 py-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#FFFBE6] rounded-full p-2">
        <Link to="/" className="flex items-center gap-1 py-3 px-6 rounded-full">
          <img src={Logo1} alt="Triprrr Logo" className="w-20 h-12 ml-3" />
        </Link>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-16">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-md text-black font-bold font-Poppins hover:text-green-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-4">
              <Link
                to="/forex"
                className="p-2.5 hover:bg-white/10 rounded-full transition-colors"
              >
                <img src={forex} alt="Forex" className="w-7 h-7" />
              </Link>
              <Link
                to="/profile"
                className="p-2.5 hover:bg-white/10 rounded-full transition-colors"
              >
                <img src={User} alt="User Profile" className="w-8 h-8" />
              </Link>
            </div>
            <Link
              to="/contact"
              className="bg-green-700 font-Poppins text-white mx-1 px-11 py-2 rounded-full text-[20px] font-semibold hover:bg-green-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
