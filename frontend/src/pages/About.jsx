import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AboutPage } from "../components/AboutPage";

export const About = () => {
  return (
    <div>
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  );
};
