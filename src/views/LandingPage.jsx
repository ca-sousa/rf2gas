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
            Copyright © 2021. Todos os direitos reservados a RF2Gás.
          </p>
          <a href="https://github.com/ca-sousa" target="blank"> 
              Feito por ca-sousa
          </a>
        </div>
    </>
  );
}

export default LandingPage;
