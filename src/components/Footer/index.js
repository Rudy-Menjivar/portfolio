import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";
import {
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTitle, 
  FooterLink, 
  SocialMedia, 
  SocialMediaWrap, 
  SocialLogo, 
  WebsiteRights, 
  SocialIcons, 
  SocialIconLink,
  ScrollLinks
} from "./StylesFooter";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Me</FooterLinkTitle>
              <FooterLink to="/">Resumé</FooterLink>
              <ScrollLinks 
                to="Contact" 
                smooth={true} 
                duration={500} 
                spy={true} 
                offset={-80}
              >
                Contact
              </ScrollLinks>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle id="social-media">Social Media</FooterLinkTitle>
              <FooterLink 
                to="https://github.com/Rudy-Menjivar" 
                target="_blank" rel="noreferrer"
              >
                GitHub
              </FooterLink>
              <FooterLink 
                to="https://www.linkedin.com/in/rudy-menjivar" 
                target="_blank" rel="noreferrer"
              >
                LinkedIn
              </FooterLink>
              <FooterLink 
                to="https://icons8.com/icon/qJHOvbNBOFwt/p" 
                target="_blank" rel="noreferrer"
              >
                P icon by Icons8
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Rudy Menjivar
            </SocialLogo>
            <WebsiteRights>
              Rudy Menjivar © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://github.com/Rudy-Menjivar" target="_blank" rel="noreferrer" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/in/rudy-menjivar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
