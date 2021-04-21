import React from "react";
import AboutUs from "../components/AboutUs/aboutUs";
import LandHeader from "../components/LandHeader/landHeader";
import NavBarLand from "../components/NavbarLand/navbarLand";
import Services from "../components/Services/services";


function LandingPage() {
  return (
    <>
      <NavBarLand />
      <LandHeader />
      <Services />
      <AboutUs />
    </>
  );
}

export default LandingPage;
