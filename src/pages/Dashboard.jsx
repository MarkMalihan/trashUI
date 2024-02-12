import React from "react";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import UIElements from "../components/UIElements";

function Dashboard() {
  return (
    <>
      <main className="mt-5 p-5 space-y-10">
        <HeroSection />
        <UIElements />
        <Testimonial />
      </main>
    </>
  );
}

export default Dashboard;
