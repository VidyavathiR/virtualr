// import FeatureSection from "./components/FeatureSection"
// import Footer from "./components/Footer"
// import HeroSection from "./components/HeroSection"
// import Navbar from "./components/Navbar"
// import Price from "./components/Price"
// import Testimonials from "./components/Testimonials"
// import Workflow from "./components/Workflow"

// function App() {

//   return (
//     <>
//     <Navbar/>
//     <div className="max-w-7xl mx-auto pt-20 px-6">
//     <HeroSection/>
//     <FeatureSection/>
//     <Workflow/>
//     <Price/>
//     <Testimonials/>
//     <Footer/>

//     </div>

//     </>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-6">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/features" element={<FeatureSection />} />
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/pricing" element={<Price />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
