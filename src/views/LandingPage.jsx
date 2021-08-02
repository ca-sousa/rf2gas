import React from "react";
import AboutUs from "../components/AboutUs/aboutUs";
import LandHeader from "../components/LandHeader/landHeader";
import NavBarLand from "../components/NavbarLand/navbarLand";
import Services from "../components/Services/services";

import './landPage.scss'

function LandingPage() {
  return (
    <>
      <NavBarLand />
      <LandHeader />
      <Services />
      <AboutUs />
        <div className="how-made">
          <p>
            {new Date().getFullYear()} © RF2Gás. Todos os direitos reservados.
          </p>
        </div>
    </>
  );
}

export default LandingPage;
