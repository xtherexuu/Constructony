import styled from "styled-components";

export const Wrapper = styled.article`
  padding-bottom: 50px;
`;

export const OfferSection = styled.div`
  padding: 0 10px;
  margin-top: 40px;
`;

export const SectionHeading = styled.h3`
  font-size: 1.05rem;
  text-align: center;
  margin-bottom: 10px;
`;

export const ChoiceSection = styled.div`
  margin-top: 20px;
`;

export const StepComponent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 10px;
  width: 100%;
  & > button > svg {
    width: 15px;
    height: 50px;
  }
`;

export const StepButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.color1light};
  &:disabled {
    color: gray;
  }
`;

export const StepContainer = styled.div`
  position: relative;
`;

export const StepBar = styled.div`
  width: 100%;
  background: rgb(51, 212, 214);
  background: -moz-linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.gradientDark} 0%,
    ${({ theme }) => theme.colors.gradientLight} 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.gradientDark} 0%,
    ${({ theme }) => theme.colors.gradientLight} 100%
  );
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.gradientDark} 0%,
    ${({ theme }) => theme.colors.gradientLight} 100%
  );
  border-radius: 5px;
  height: 5px;
  clip-path: xywh(0px 0px ${({ step }) => step}% 100% round 0% 5px 5px 0%);
  transition: clip-path 0.5s;
`;

export const StepInfo = styled.p`
  font-size: 0.8rem;
  text-align: center;
  position: absolute;
  top: -17px;
  left: 0;
  width: 100%;
`;
