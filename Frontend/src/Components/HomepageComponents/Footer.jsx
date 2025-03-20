import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-12 pb-5 px-0">
      <div className="max-w-full px-10 mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo and Description */}
        <div className="max-w-xs">
          <h2 className="text-2xl font-bold text-green-600">triprrr</h2>
          <h3 className="font-semibold mt-4">Roam. Relax. Repeat!™</h3>
          <p className="mt-4 text-black text-sm">
            Triprr makes travel easy and unforgettable! Find the best deals on
            flights, hotels and experiences, all in one place. Start your next
            adventure with us today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold font-Poppins mb-4">Quick Links</h3>
          <ul className="space-y-6 text-sm">
            <li>
              <a
                href="#"
                className="text-black font-Poppins hover:text-green-600"
              >
                Trains
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-Poppins hover:text-green-600"
              >
                Flights
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-Poppins hover:text-green-600"
              >
                Hotels
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-Poppins hover:text-green-600"
              >
                Bus
              </a>
            </li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="font-bold font-Poppins mb-4">Our Company</h3>
          <ul className="space-y-6 text-sm">
            <li>
              <a
                href="#"
                className="text-black font-Poppins hover:text-green-600"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-Poppins hover:text-green-600"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-Poppins hover:text-green-600"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black font-Poppins hover:text-green-600"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Top Destinations */}
        <div>
          <h3 className="font-bold mb-4">Top Destinations</h3>
          <ul className="space-y-6 text-sm">
            <li>
              <a href="#" className="text-black hover:text-green-600">
                Barcelona
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-green-600">
                Dubai
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-green-600">
                Mumbai
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-green-600">
                California
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-4">Contact Info</h3>
          <address className="text-sm text-gray-600 not-italic">
            2972 Westheimer Rd
            <br />
            Santa Ana, Illinois 82486
          </address>
          <p className="text-sm text-gray-600 mt-4">+1834 123 456 789</p>
          <a
            href="mailto:support@example.com"
            className="text-sm text-gray-600 underline mt-4 block"
          >
            support@example.com
          </a>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-full px-10 mx-auto mt-12 pt-2 border-t border-black flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className="mt-2">Copyright ©All rights reserved by Triperr</p>
        <p className="mt-2">Designed by Synthetico.ai</p>
      </div>
    </footer>
  );
}
