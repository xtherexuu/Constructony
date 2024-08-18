import React, { useState } from "react";
import {
  ButtonCircle,
  ButtonCloud,
  ButtonStars,
  Footer,
  FooterAuthorContact,
  FooterAuthorContactHeading,
  FooterAuthorName,
  FooterCopyrightInfo,
  FooterCopyrightName,
  FooterLogo,
  FooterLogoSection,
  FooterSiteInfo,
  FooterSiteInfoText,
  FooterSocialMediaContainer,
  HamburgerMenu,
  HamburgerMenuButton,
  HamburgerMenuLine,
  Header,
  SocialMedia,
  SocialMediaDescription,
  SocialMediaLink,
  SocialMediaText,
  StyledNavLink,
  ThemeButton,
  ThemeButtonContainer,
  ThemeButtonDescription,
  Wrapper,
} from "./styled";
import { AppLogo } from "../../components/AppLogo";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../redux/themeSlice";
import { useTheme } from "../../../redux/useTheme";
import srcToNameLogoLight from "../../../utils/myFullNameLettersLogoLight.png";
import srcToNameLogoDark from "../../../utils/myFullNameLettersLogoDark.png";
import { FaInstagram } from "react-icons/fa";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import {
  MdOutlineWeb,
  MdOutlineMailOutline,
  MdInfoOutline,
  MdInfo,
  MdOutlineLocalOffer,
  MdLocalOffer,
  MdOutlineContactPhone,
  MdContactPhone,
} from "react-icons/md";
import {
  PiProjectorScreenChart,
  PiProjectorScreenChartFill,
} from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Wrapper>
      <Header>
        <h1 style={{ margin: 0 }}>
          <Link style={{ display: "flex", alignItems: "center" }} to="/">
            <AppLogo />
          </Link>
        </h1>
        <HamburgerMenuButton
          aria-label={`${isMenuOpened ? "Zamknij" : "Otwórz"} menu z nawigacją`}
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
      <>
        <HamburgerMenu isOpened={isMenuOpened}>
          <StyledNavLink
            to="/"
            end
            onClick={() => {
              setIsMenuOpened(false);
            }}
          >
            <div>
              <IoHomeOutline />
              <IoHome />
            </div>
            <span>Strona główna</span>
          </StyledNavLink>
          <StyledNavLink
            to="/aboutus"
            onClick={() => {
              setIsMenuOpened(false);
            }}
          >
            <div>
              <MdInfoOutline />
              <MdInfo />
            </div>
            <span>O nas</span>
          </StyledNavLink>
          <StyledNavLink
            to="/offer"
            onClick={() => {
              setIsMenuOpened(false);
            }}
          >
            <div>
              <MdOutlineLocalOffer />
              <MdLocalOffer />
            </div>
            <span>Oferta</span>
          </StyledNavLink>
          <StyledNavLink
            to="/projects"
            onClick={() => {
              setIsMenuOpened(false);
            }}
          >
            <div>
              <PiProjectorScreenChart />
              <PiProjectorScreenChartFill />
            </div>
            <span>Projekty</span>
          </StyledNavLink>
          <StyledNavLink
            to="/contact"
            onClick={() => {
              setIsMenuOpened(false);
            }}
          >
            <div>
              <MdOutlineContactPhone />
              <MdContactPhone />
            </div>
            <span>Kontakt</span>
          </StyledNavLink>
          <ThemeButtonContainer>
            <ThemeButtonDescription>Zmień motyw: </ThemeButtonDescription>
            <ThemeButton
              aria-label={`Przełącz motyw strony na ${
                theme.colors.mode === "light" ? "ciemny" : "jasny"
              }`}
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
        <Outlet />
      </>
      <Footer>
        <FooterSiteInfo>
          <FooterSiteInfoText>
            <strong>This is important information!</strong>
            <br />
            <br />
            <b>This site is merely a template. </b>
            This site was created only for portfolio purposes. There is no
            actual company named Constructony, and you cannot order any services
            here.
            <br />
            <br />
            If you would like your company to have a similar website, you can
            <span>
              {" "}
              contact
              <svg
                width="100"
                height="24"
                viewBox="0 0 100 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.7124 18.474C40.7119 18.3816 19.4691 19.043 12.7419 17.8647C6.01479 16.6864 0.550273 13.1311 1.35753 10.7052C2.16479 8.27935 8.57924 3.38335 18.0645 1.87008C27.5498 0.356812 52.2599 0.311748 63.8979 0.727608C75.5358 1.14347 89.5512 2.34789 94.7984 4.61202C100.046 6.87614 99.997 13.207 98.4946 15.6559C96.9922 18.1049 93.9517 19.6962 84.8925 20.759C75.8333 21.8217 48.8093 22.3396 38.7634 22.6631C28.7176 22.9865 21.7056 22.8569 18.6559 22.8916"
                  stroke="url(#paint0_linear_29_16)"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_29_16"
                    x1="90.7786"
                    y1="19.48"
                    x2="41.4118"
                    y2="-22.9666"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      stopColor={`${
                        theme.colors.mode === "light" ? "#0C92F9" : "#fa5f3c"
                      }`}
                    />
                    <stop
                      offset="1"
                      stopColor={`${
                        theme.colors.mode === "light" ? "#1FFFCE" : "#f8a718"
                      }`}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            the author to make arrangements.
          </FooterSiteInfoText>
        </FooterSiteInfo>
        <FooterAuthorContact>
          <FooterAuthorContactHeading>Contact me!</FooterAuthorContactHeading>
          <FooterAuthorName>
            My name is{" "}
            <b>
              Bartosz Załęski
              <svg
                width="112"
                height="8"
                viewBox="0 0 112 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.92294 1.5968C9.72611 2.34352 30.6341 5.74107 48.7419 6.07709C66.8498 6.41311 100.265 4.02363 110.57 3.61293"
                  stroke="url(#paint0_linear_49_20)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_49_20"
                    x1="1.92294"
                    y1="1.5968"
                    x2="110.57"
                    y2="1.5968"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      stopColor={`${
                        theme.colors.mode === "light" ? "#33D4D6" : "#f8a718"
                      }`}
                    />
                    <stop
                      offset="1"
                      stopColor={`${
                        theme.colors.mode === "light" ? "#3377D6" : "#fa5f3c"
                      }`}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </b>
          </FooterAuthorName>
          <FooterSocialMediaContainer>
            <SocialMedia>
              <SocialMediaDescription>Send me an email!</SocialMediaDescription>
              <SocialMediaLink
                background="green"
                href="mailto:contact@bartoszzaleski.com"
              >
                <MdOutlineMailOutline />
                <SocialMediaText>contact@bartoszzaleski.com</SocialMediaText>
              </SocialMediaLink>
            </SocialMedia>
            <SocialMedia>
              <SocialMediaDescription>
                Text me on Instagram!
              </SocialMediaDescription>
              <SocialMediaLink
                background="red"
                href="https://www.instagram.com/im_zaleski/"
                target="_blank"
                rel="noopener"
              >
                <FaInstagram />
                <SocialMediaText>@im_zaleski</SocialMediaText>
              </SocialMediaLink>
            </SocialMedia>
            {/* <SocialMedia>
              <SocialMediaDescription>Visit my website!</SocialMediaDescription>
              <SocialMediaLink
                background="blue"
                href="https://bartoszzaleski.com"
                target="_blank"
                rel="noopener"
              >
                <MdOutlineWeb />
                <SocialMediaText>bartoszzaleski.com</SocialMediaText>
              </SocialMediaLink>
            </SocialMedia> */}
          </FooterSocialMediaContainer>
        </FooterAuthorContact>
        <FooterLogoSection>
          <FooterLogo
            src={
              theme.colors.mode === "light"
                ? srcToNameLogoLight
                : srcToNameLogoDark
            }
            alt="This picture contains 'BZ' letters - the trademark of the creator of this site. (Bartosz Załęski)"
          />
          <FooterCopyrightName>&copy; 2024 Bartosz Załęski</FooterCopyrightName>
          <FooterCopyrightInfo>All rights reserved</FooterCopyrightInfo>
        </FooterLogoSection>
      </Footer>
    </Wrapper>
  );
};
