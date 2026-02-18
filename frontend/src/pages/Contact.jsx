import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactPage } from "../components/ContactPage";

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactPage/>
      <Footer />
    </div>
  );
};
