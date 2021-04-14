import React, {useState, useEffect} from "react";
import {FaBars} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavLinksB
} from "./StylesNavbar";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Rudy Menjivar</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to="home" 
                smooth={true} 
                duration={500} 
                spy={true} 
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="Portfolio" 
                smooth={true} 
                duration={500} 
                spy={true}  
                offset={-80}
              >
                Portfolio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="Contact" 
                smooth={true} 
                duration={500} 
                spy={true}  
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavLinksB 
              to="social-media" 
              smooth={true} 
              duration={500} 
              spy={true}  
              offset={-80}
            >
              Social Media
            </NavLinksB>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
