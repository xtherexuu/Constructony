import styled, { css } from "styled-components";
import srcToImgBuilderInWork from "../../../../utils/builderInWork.png";
import srcToImgBuilderInWork2 from "../../../../utils/builderInWork2.png";
import srcToImgHouseImage from "../../../../utils/houseImage.png";
import srcToImgHouseImage2 from "../../../../utils/houseImage2.png";
import srcToImgHouseImage3 from "../../../../utils/houseImage3.png";
import srcToClientHappy from "../../../../utils/clientHappy.png";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  overflow-x: hidden;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: wheat;
  position: relative;
  z-index: 0;
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) =>
    direction === "back"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
  border: none;
  background-color: transparent;
  & > svg {
    width: 25px;
    height: 40px;
    color: ${({ theme }) => theme.colors.color1};
  }
  &:disabled > svg {
    color: lightgray;
  }
  @media (min-width: 500px) {
    & > svg {
      width: 35px;
      height: 45px;
    }
  }
  @media (min-width: 500px) {
    & > svg {
      width: 35px;
      height: 45px;
    }
  }
  @media (min-width: 800px) {
    & > svg {
      width: 40px;
      height: 45px;
    }
    @media (min-width: 1700px) {
      & > svg {
        width: 45px;
        height: 50px;
      }
    }
  }
`;

export const SliderSlidesButtonsContainer = styled.div``;

export const SliderSlidesButton = styled.button``;

export const SlidesContainer = styled.div`
  display: flex;
  height: 40vh;
  position: absolute;
  top: 0;
  left: calc(${({ scroll }) => scroll} * -100%);
  transition: left 0.5s;
  z-index: -1;
`;

export const SlideContainer = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  &:nth-child(1) {
    background-image: url(${srcToImgBuilderInWork});
  }
  &:nth-child(2) {
    background-image: url(${srcToImgBuilderInWork2});
  }
  &:nth-child(3) {
    background-image: url(${srcToImgHouseImage});
  }
  &:nth-child(4) {
    background-image: url(${srcToImgHouseImage2});
  }
  &:nth-child(5) {
    background-image: url(${srcToImgHouseImage3});
  }
  &:nth-child(6) {
    background-image: url(${srcToClientHappy});
  }
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 500px) {
    padding: 35px;
  }
  @media (min-width: 800px) {
    padding: 40px;
  }
  @media (min-width: 1000px) {
    width: calc(100svw - (0.2 * 100svw));
  }
  @media (min-width: 1300px) {
    width: calc(100svw - (0.3 * 100svw));
  }
  @media (min-width: 1700px) {
    width: calc(100svw - (0.4 * 100svw));
    padding: 45px;
  }
`;

export const SlideContent = styled.div`
  background-color: ${({ theme }) => theme.colors.bg}90;
  padding: 10px;
  border-radius: 6px;
  backdrop-filter: blur(1px);
`;

export const SlideHeading = styled.h2`
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
  text-align: center;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const SlideText = styled.p`
  color: ${({ theme }) => theme.colors.text1};
  font-size: 0.8rem;
  text-align: center;
`;

export const AwardScrollerItem = styled.li`
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
  align-items: center;
`;

export const AwardScrollerItemImage = styled.img`
  width: 40px;
`;

export const AwardScrollerItemText = styled.p`
  display: flex;
  width: max-content;
  flex-wrap: nowrap;
  font-weight: 600;
`;

export const Contact = styled.address`
  display: grid;
  grid-template-columns: auto auto;
  gap: 15px;
  margin-top: 20px;
  padding: 0 10px;
`;

export const ContactElement = styled.a`
  &:nth-child(3) {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
  }
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  background: linear-gradient(
    25deg,
    ${({ theme }) => theme.colors.gradientDark} 0%,
    ${({ theme }) => theme.colors.gradientLight} 90%
  );
  padding: 7px;
  font-size: 0.8rem;
  color: white;
  font-style: normal;
  border-radius: 6px;
  text-align: center;
  & > svg {
    width: 18px;
    height: 18px;
    justify-self: end;
  }
  & > span {
    justify-self: center;
  }
`;

export const OpinionsSlieder = styled.div`
  padding: 60px 40px 0;
  overflow: hidden;
  position: relative;
`;

export const OpinionSliderButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.color1};
  border: none;
  &:disabled {
    color: lightgray;
  }
  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 3;
  top: calc(50%);
  transform: translateY(25%);
  & > svg {
    width: 100%;
    height: 100%;
  }
  ${({ position }) =>
    position === "back"
      ? css`
          left: 0px;
        `
      : css`
          right: 0%;
        `}
  @media (min-width: 1000px) {
    height: 40px;
    width: 40px;
  }
`;

export const OpinionsContainer = styled.div`
  display: flex;
  width: calc(
    (100% * ${({ amount }) => amount}) + (40px * ${({ amount }) => amount})
  );
  gap: 50px;
  overflow-x: hidden;
  position: relative;
  top: 0;
  left: calc(
    (-100% * ${({ scroll }) => scroll}) - (44px * ${({ scroll }) => scroll})
  );
  transition: left 0.5s;
`;

export const OpinionContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "author rating" "opinion opinion";
  width: 100%;
  grid-gap: 5px 10px;
`;

export const OpinionAuthor = styled.p`
  grid-area: author;
  color: ${({ theme }) => theme.colors.color1light};
  font-weight: 600;
`;

export const OpinionRating = styled.p`
  grid-area: rating;
  text-align: right;
`;

export const OpinionContent = styled.p`
  grid-area: opinion;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text1};
`;
