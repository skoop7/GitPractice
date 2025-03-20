import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Logo1 from "../../assets/Logo1.png";
import Frame1 from "../../assets/Frame 1.png";
import Frame2 from "../../assets/Frame 2.png";
import Frame3 from "../../assets/Frame 3.png";
import Frame4 from "../../assets/Frame 4.png";

export function Footer() {
  return (
    <footer className="border-t border-black pt-12 pb-5 px-0">
      <div className="max-w-full px-10 mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="max-w-xs">
          <Link to="/" className="flex flex-col items-center justify-center">
            <img src={Logo1} alt="" className="w-22 h-14" />
          </Link>
          <div className="flex flex-col items-center justify-center">
            <h3 className="mt-4 font-bold font-Poppins">
              Roam. Relax. Repeat!™
            </h3>
          </div>
          <div className="flex flex-col items-center text-justify font-Lora justify-center">
            <p className="mt-4 text-black font-Lora text-sm">
              Triprr makes travel easy and unforgettable! Find the best deals on
              flights, hotels and experiences, all in one place. Start your next
              adventure with us today!
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold font-Poppins mb-4">Quick Links</h3>
          <ul className="space-y-6 text-sm">
            <li>
              <Link
                to="/trains"
                className="text-black font-Poppins hover:text-green-600"
              >
                Trains
              </Link>
            </li>
            <li>
              <Link
                to="/flights"
                className="text-black font-Poppins hover:text-green-600"
              >
                Flights
              </Link>
            </li>
            <li>
              <Link
                to="/hotels"
                className="text-black font-Poppins hover:text-green-600"
              >
                Hotels
              </Link>
            </li>
            <li>
              <Link
                to="/bus"
                className="text-black font-Poppins hover:text-green-600"
              >
                Bus
              </Link>
            </li>
            <li>
              <Link
                to="/grievance"
                className="text-black font-Poppins hover:text-green-600"
              >
                Grievance
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold font-Poppins mb-4">Our Company</h3>
          <ul className="space-y-6 text-sm">
            <li>
              <Link
                to="/about"
                className="text-black font-Poppins hover:text-green-600"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-black font-Poppins hover:text-green-600"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-black font-Poppins hover:text-green-600"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-black font-Poppins hover:text-green-600"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/franchise"
                className="text-black font-Poppins hover:text-green-600"
              >
                Franchise
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Top Destinations</h3>
          <ul className="space-y-6 text-sm">
            <li>
              <Link
                to="/destinations/barcelona"
                className="text-black font-Poppins hover:text-green-600"
              >
                Barcelona
              </Link>
            </li>
            <li>
              <Link
                to="/destinations/dubai"
                className="text-black font-Poppins hover:text-green-600"
              >
                Dubai
              </Link>
            </li>
            <li>
              <Link
                to="/destinations/mumbai"
                className="text-black font-Poppins hover:text-green-600"
              >
                Mumbai
              </Link>
            </li>
            <li>
              <Link
                to="/destinations/california"
                className="text-black font-Poppins hover:text-green-600"
              >
                California
              </Link>
            </li>
            <li>
              <Link
                to="/destinations/paris"
                className="text-black font-Poppins hover:text-green-600"
              >
                Paris
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold font-Poppins mb-4">Contact Info</h3>
          <address className="text-sm text-black font-Poppins not-italic mb-4">
            Shop no. 19,Okay plus Big benn building
            <br />
            Swej farm,new sanganer road,
            <br />
            Opp. Palika bazar,Jaipur
          </address>
          <p className="text-sm text-black font-Poppins font-bold mt-6">
            +91 9351 937 933
          </p>
          <a
            href="mailto:support@example.com"
            className="text-sm text-black font-Poppins underline mt-6 block"
          >
            support@example.com
          </a>
          <div className="flex gap-4 mt-10">
            <img src={Frame1} alt="" className="-ml-1" />
            <img src={Frame2} alt="" />
            <img src={Frame3} alt="" />
            <img src={Frame4} alt="" />
          </div>
        </div>
      </div>

      <div className="max-w-full px-10 mx-auto mt-12 pt-2 border-t border-black flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className="mt-2 text-black">
          Copyright ©All rights reserved by Triperr
        </p>
        <p className="mt-2 text-black">Designed by Synthetico.ai</p>
      </div>
    </footer>
  );
}
