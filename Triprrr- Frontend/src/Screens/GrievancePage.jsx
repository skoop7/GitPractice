import React from "react";
import GrievanceBanner from "../Components/GrievancPageComponents/GrievanceBanner";
import { Navbar } from "../Components/HomepageComponents/Navbar";
import GrievanceForm from "../Components/GrievancPageComponents/GrievanceForm";
import FAQ from "../Components/GrievancPageComponents/FAQ";

export default function GrievancePage() {
  return (
    <div>
      <GrievanceBanner />
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <GrievanceForm />
      <FAQ />
    </div>
  );
}
