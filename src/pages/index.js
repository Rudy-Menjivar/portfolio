import React, { useState } from "react";
import Footer from "../components/Footer";
import AboutCard from "../components/AboutCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Portfolios from "../components/Portfolio";
import Contact from "../components/ContactForm";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AboutCard />
      <Portfolios />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
