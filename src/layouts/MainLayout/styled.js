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
  padding: 0 10px;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
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
  top: 53.5px;
  left: 100%;
  background-color: ${({ theme }) => theme.colors.bg}90;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  transition: left 0.5s;
  ${({ isOpened }) =>
    isOpened &&
    css`
      left: 0;
    `}
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text1};
  text-decoration: none;
  &.active {
    color: ${({ theme }) => theme.colors.color1light};
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

export const Footer = styled.footer``;
