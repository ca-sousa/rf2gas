import React from "react";
import classnames from "classnames";
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import Logo from "../../assets/img/logo.png";
import "./navbar.scss";

function NavbarLand() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 850 ||
        document.body.scrollTop > 850
      ) {
        setNavbarColor("navbar-color");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      expand="lg"
      style={{width:"95vw"}}
    >
      <Container>
          <NavbarBrand
            data-placement="bottom"
            href="#landpage"
          >
            <img src={Logo} style={{width:"15vw"}} alt="rf2gas"/> 
          </NavbarBrand>
          <Nav className="nav-a">
            <NavItem>
              <NavLink href="#services">
                Serviços
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#aboutus" >
                Quem Somos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://api.whatsapp.com/send?phone=5511982619325"
                target="_blank"
                title="Faça seu orçamento conosco"
              >
                <i className="fa fa-whatsapp" />
              </NavLink>
            </NavItem>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarLand;
