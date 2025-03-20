import React from "react";
import ContactForm from "../Components/ContactPageComponents/ContactForm";
import ContactMap from "../Components/ContactPageComponents/ContactMap";
import { Navbar } from "../Components/HomepageComponents/Navbar";
import ContactBanner from "../Components/ContactPageComponents/ContactBanner";

export default function ContactPage() {
  return (
    <div>
      <ContactBanner />
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <ContactForm />
      <ContactMap />
    </div>
  );
}
