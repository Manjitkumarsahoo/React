import React from "react";
import Services from "./components/Services";
import Testimonials from "./components/Testimonial";
import Contact from "./components/Contact";
import OurServices from "./components/Ourservices";
import Main from "./components/Main";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Main />
      <Aboutus />
      <OurServices />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
