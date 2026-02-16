import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { HomeCourses } from "../components/HomeCourses";
import { Navbar } from "../components/Navbar";
import { Testimonial } from "../components/Testimonial";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <HomeCourses />
      <Testimonial />
      <Footer />
    </div>
  );
};
