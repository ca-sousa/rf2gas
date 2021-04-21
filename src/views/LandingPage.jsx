import React from "react";
import LandHeader from "../components/LandHeader/landHeader";
import NavBarLand from "../components/NavbarLand/navbarLand";
import Services from "../components/Services/services";


function LandingPage() {
  return (
    <>
      <NavBarLand />
      <LandHeader />
      <Services />
    </>
  );
}

export default LandingPage;
