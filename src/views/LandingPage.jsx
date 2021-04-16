import React from "react";
import NavBarLand from "../components/NavbarLand/navbarLand";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <NavBarLand />
    </>
  );
}

export default LandingPage;
