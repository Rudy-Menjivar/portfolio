import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const FooterContainer = styled.footer`
  background-color: #34495B;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: rgb(250, 250, 250);

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: rgb(250, 250, 250);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #ebcc42;
    transition: 0.3s ease out;
  }
`;

export const ScrollLinks = styled(LinkScroll)`
  color: rgb(250, 250, 250);
  font-size: 14px;
  display: flex;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ebcc42;
  }
  `;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: rgb(250, 250, 250);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ebcc42;
  }
`;

export const WebsiteRights = styled.small`
  color: rgb(250, 250, 250);
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75px;
  padding-bottom: 18px;
`;

export const SocialIconLink = styled.a`
  color: rgb(250, 250, 250);
  font-size: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ebcc42;
  }
`;
