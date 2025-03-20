import { useState } from "react";
import HomePage from "./Screens/Homepage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogspage from "./Screens/Blogspage.jsx";
import { BlogDetails } from "./Components/BlogsPageComponents/BlogDetails.jsx";
import { Footer } from "./Components/HomepageComponents/Footer.jsx";
import ScrollTop from "./utils/ScrollTop.js";
import ContactPage from "./Screens/ContactPage.jsx";
import GrievancePage from "./Screens/GrievancePage.jsx";
import HotelPage from "./Screens/HotelPage.jsx";
import HotelListingPage from "./Screens/HotelListingPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blogspage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/grievance" element={<GrievancePage />} />
          <Route path="/hotels" element={<HotelPage />} />
          <Route path="/hotels/hotelsList" element={<HotelListingPage />} />
        </Routes>
        <ScrollTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
