import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { WiStars } from "react-icons/wi";
import { FaCloud } from "react-icons/fa";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  transition: background-color 0.5s;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 0 10px;
  z-index: 10;
`;

export const HeaderNav = styled.nav``;

// No hamburgerMenu

export const NavLinksContainer = styled.div``;

// Hamburger menu

export const HamburgerMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: transparent;
  border: none;
`;

export const HamburgerMenuLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.color1};
  border-radius: 6px;
  transition: transform 0.5s;
  ${({ isOpened }) =>
    isOpened &&
    css`
      &:nth-child(1) {
        transform: translateY(8px) rotate(-45deg);
      }
      &:nth-child(2) {
        transform: translateX(calc(100% + 10px));
      }
      &:nth-child(3) {
        transform: translateY(-8px) rotate(45deg);
      }
    `}
`;

export const HamburgerMenu = styled.div`
  height: calc(100vh - 53px);
  width: 100vw;
  position: fixed;
  top: 50px;
  left: 100%;
  background-color: ${({ theme }) => theme.colors.bg}90;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  transition: left 0.5s, background-color 0.5s;
  ${({ isOpened }) =>
    isOpened &&
    css`
      left: 0;
    `}
  z-index: 10;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text1};
  text-decoration: none;
  display: flex;
  gap: 5px;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
  }
  & > div > svg {
    &:nth-child(1) {
      display: block;
    }
    &:nth-child(2) {
      display: none;
    }
  }
  &.active {
    color: ${({ theme }) => theme.colors.color1light};
  }
  &.active > div > svg {
    &:nth-child(1) {
      display: none;
    }
    &:nth-child(2) {
      display: block;
    }
  }
`;

export const ThemeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ThemeButtonDescription = styled.p``;

export const ThemeButton = styled.button`
  position: relative;
  width: 70px;
  height: 30px;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) =>
    theme.colors.mode === "light" ? "#55b4e9" : "#1e1e1e"};
  transition: background-color 0.5s;
`;

export const ButtonCircle = styled.div`
  position: absolute;
  top: 2px;
  ${({ theme }) =>
    theme.colors.mode === "light" ? "left: 2px" : "left: calc(100% - 28px)"};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.colors.mode === "light" ? "#ffd100" : "#3f3f3f"};
  transition: background-color 0.5s, left 0.5s;
  &::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    background-color: ${({ theme }) =>
      theme.colors.mode === "light" ? "#fff860" : "#5b5b5b"};
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: background-color 0.5s;
  }
`;

export const ButtonStars = styled(WiStars)`
  position: absolute;
  top: 2px;
  left: 2px;
  fill: gold;
  width: 28px;
  height: 28px;
`;
export const ButtonCloud = styled(FaCloud)`
  position: absolute;
  top: 4px;
  right: 6px;
  width: 21px;
  height: 21px;
  fill: white;
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px 10px;
  grid-gap: 20px;
  border-top: solid 2px ${({ theme }) => theme.colors.color2};
`;

export const FooterLogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.color1};
`;

export const FooterCopyrightName = styled.b`
  font-size: 1rem;
`;

export const FooterLogo = styled.img`
  width: 40px;
`;

export const FooterCopyrightInfo = styled.p`
  color: ${({ theme }) => theme.colors.color1};
  font-size: 0.9rem;
`;

export const FooterSiteInfo = styled.div``;

export const FooterSiteInfoText = styled.p`
  font-size: 0.8rem;
  text-align: center;
  & > strong,
  & > b {
    color: ${({ theme }) => theme.colors.color1};
  }
  & > span {
    z-index: -1;
    position: relative;
    & > svg {
      z-index: -1;
      position: absolute;
      top: -5px;
      left: 1px;
      width: 100%;
      height: 200%;
    }
  }
`;

export const FooterAuthorContact = styled.div``;

export const FooterAuthorContactHeading = styled.h3`
  text-align: center;
  font-size: 1rem;
  ${({ theme }) =>
    theme.colors.mode === "light"
      ? css`
          background: #33d4d6;
          background: linear-gradient(
            45deg,
            rgba(51, 212, 214, 1) 0%,
            rgba(51, 119, 214, 1) 100%
          );
        `
      : css`
          background: rgb(250, 95, 60);
          background: linear-gradient(
            45deg,
            rgba(250, 95, 60, 1) 0%,
            rgba(244, 177, 6, 1) 100%
          );
        `}
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FooterAuthorName = styled.p`
  color: ${({ theme }) => theme.colors.text1};
  text-align: center;
  font-size: 1.1rem;
  padding: 10px 0 20px;
  & > b {
    font-size: 1.15rem;
    font-weight: 500;
    position: relative;
    z-index: -1;
    & > svg {
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      z-index: -1;
    }
  }
`;

export const FooterSocialMediaContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  grid-gap: 10px;
  padding: 10px 0;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialMediaDescription = styled.p`
  color: ${({ theme }) => theme.colors.text1};
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const SocialMediaLink = styled.a`
  padding: 5px 15px;
  ${({ background }) =>
    background === "red"
      ? css`
          background: rgb(255, 46, 46);
          background: linear-gradient(
            45deg,
            rgba(255, 46, 46, 1) 15%,
            rgba(255, 87, 189, 1) 100%
          );
        `
      : background === "blue"
      ? css`
          background: rgb(108, 23, 163);
          background: linear-gradient(
            45deg,
            rgba(108, 23, 163, 1) 0%,
            rgba(0, 185, 255, 1) 80%
          );
        `
      : css`
          background: rgb(114, 234, 84);
          background: linear-gradient(
            45deg,
            rgba(114, 234, 84, 1) 0%,
            rgba(12, 192, 221, 1) 100%
          );
        `}

  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  /* color: ${({ theme }) => theme.colors.text1}; */
  color: white;
  text-decoration: none;
  & > svg {
    width: 20px;
    height: 20px;
  }
`;

export const SocialMediaText = styled.p`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 600;
`;
