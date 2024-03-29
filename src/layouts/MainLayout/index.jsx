import React, { useState } from "react";
import {
  ButtonCircle,
  ButtonCloud,
  ButtonStars,
  Footer,
  HamburgerMenu,
  HamburgerMenuButton,
  HamburgerMenuLine,
  Header,
  StyledNavLink,
  ThemeButton,
  ThemeButtonContainer,
  ThemeButtonDescription,
  Wrapper,
} from "./styled";
import { AppLogo } from "../../components/AppLogo";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../redux/themeSlice";

export const MainLayout = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header>
        <HamburgerMenu isOpened={isMenuOpened}>
          <StyledNavLink to="/" end>
            Strona główna
          </StyledNavLink>
          <StyledNavLink to="/about">O nas</StyledNavLink>
          <StyledNavLink to="/offert">Oferta</StyledNavLink>
          <StyledNavLink to="projects">Projekty</StyledNavLink>
          <StyledNavLink to="blog">Blog</StyledNavLink>
          <StyledNavLink to="/contact">Kontakt</StyledNavLink>
          <ThemeButtonContainer>
            <ThemeButtonDescription>Zmień motyw: </ThemeButtonDescription>
            <ThemeButton
              onClick={() => {
                dispatch(changeTheme());
              }}
            >
              <ButtonStars />
              <ButtonCloud />
              <ButtonCircle />
            </ThemeButton>
          </ThemeButtonContainer>
        </HamburgerMenu>
        <AppLogo />
        <HamburgerMenuButton
          onClick={() => {
            setIsMenuOpened(!isMenuOpened);
          }}
          isOpened={isMenuOpened}
        >
          <HamburgerMenuLine isOpened={isMenuOpened} />
          <HamburgerMenuLine isOpened={isMenuOpened} />
          <HamburgerMenuLine isOpened={isMenuOpened} />
        </HamburgerMenuButton>
      </Header>
      sdafasdfsf sadfsdafsadfasdfasdfsadfasd fsadfsadf asdf sadf asdf sad fasdff
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
      laudantium ex? Magnam atque eveniet asperiores? Aut sit ab ad, quo ipsa
      eaque a laudantium beatae temporibus ut sint, veritatis debitis! Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Repellat minus autem
      vel molestias est a fuga, nemo necessitatibus accusantium aliquam, enim
      dignissimos dolor deserunt in nulla mollitia nisi! Qui, quidem.
      <Footer></Footer>
    </Wrapper>
  );
};
