import React from "react";
import BlogBanner from "../Components/BlogsPageComponents/BlogBanner";
import { BlogSection } from "../Components/BlogsPageComponents/BlogSection";
import { Navbar } from "../Components/HomepageComponents/Navbar";

export default function Blogspage() {
  return (
    <div>
      <BlogBanner />
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <BlogSection />
    </div>
  );
}
