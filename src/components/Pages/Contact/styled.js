import styled from "styled-components";
import srcToOurProjectsImage from "../../../../utils/ourProjects.png";

export const Wrapper = styled.div``;

export const ContactSection = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  gap: 15px;
  font-style: normal;
  margin-top: 40px;
  @media (min-width: 1700px) {
    margin: 50px;
  }
  @media (min-width: 2100px) {
    margin-top: 60px;
    gap: 35px;
  }
  @media (min-width: 3000px) {
    margin: 70px;
    gap: 45px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 5px;
  &:nth-of-type(1) a {
    background: -moz-linear-gradient(
      45deg,
      rgba(31, 228, 231, 1) 0%,
      rgba(137, 41, 196, 1) 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      rgba(31, 228, 231, 1) 0%,
      rgba(137, 41, 196, 1) 100%
    );
    background: linear-gradient(
      45deg,
      rgba(31, 228, 231, 1) 0%,
      rgba(137, 41, 196, 1) 100%
    );
  }
  &:nth-of-type(2) a {
    background: -moz-linear-gradient(
      45deg,
      rgba(31, 231, 192, 1) 0%,
      rgba(91, 249, 128, 1) 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      rgba(31, 231, 192, 1) 0%,
      rgba(91, 249, 128, 1) 100%
    );
    background: linear-gradient(
      45deg,
      rgba(31, 231, 192, 1) 0%,
      rgba(91, 249, 128, 1) 100%
    );
  }
  &:nth-of-type(3) a {
    background: -moz-linear-gradient(
      45deg,
      rgba(231, 31, 65, 1) 0%,
      rgba(249, 133, 164, 1) 51%,
      rgba(242, 91, 249, 1) 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      rgba(231, 31, 65, 1) 0%,
      rgba(249, 133, 164, 1) 51%,
      rgba(242, 91, 249, 1) 100%
    );
    background: linear-gradient(
      45deg,
      rgba(231, 31, 65, 1) 0%,
      rgba(249, 133, 164, 1) 51%,
      rgba(242, 91, 249, 1) 100%
    );
  }
  &:nth-of-type(4) a {
    background: -moz-linear-gradient(
      45deg,
      rgba(37, 250, 255, 1) 0%,
      rgba(66, 114, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      rgba(37, 250, 255, 1) 0%,
      rgba(66, 114, 255, 1) 100%
    );
    background: linear-gradient(
      45deg,
      rgba(37, 250, 255, 1) 0%,
      rgba(66, 114, 255, 1) 100%
    );
  }
  @media (min-width: 1700px) {
    gap: 10px;
  }
  @media (min-width: 2100px) {
    gap: 15px;
  }
  @media (min-width: 3000px) {
    gap: 20px;
  }
`;

export const ContactDescription = styled.p`
  text-align: center;
`;

export const ContactElement = styled.a`
  padding: 10px;
  border-radius: 6px;
  color: white;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  & > svg {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 800px) {
    padding: 10px 15px;
  }
  @media (min-width: 1000px) {
    padding: 12px 20px;
  }
  @media (min-width: 1700px) {
    border-radius: 12px;
    padding: 17px 30px;
    & > svg {
      width: 25px;
      height: 25px;
    }
  }
  @media (min-width: 2100px) {
    border-radius: 15px;
    & > svg {
      width: 35px;
      height: 35px;
    }
  }
  @media (min-width: 3000px) {
    padding: 21px 50px;
    gap: 20px;
    border-radius: 25px;
    & > svg {
      width: 55px;
      height: 55px;
    }
  }
`;

export const ContactAddress = styled.div`
  padding: 15px 15px 25px;
  border-radius: 6px;
  background: #00000090 url(${srcToOurProjectsImage});
  background-blend-mode: darken;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  position: relative;
  & > svg {
    position: absolute;
    top: 15px;
    left: 15px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1700px) {
    border-radius: 12px;
  }
  @media (min-width: 2100px) {
    border-radius: 15px;
    padding: 25px 25px 40px;
    & > svg {
      position: absolute;
      top: 25px;
      left: 25px;
    }
  }
  @media (min-width: 3000px) {
    border-radius: 25px;
    padding: 35px 35px 60px;
    & > svg {
      position: absolute;
      top: 35px;
      left: 35px;
    }
  }
`;

export const AddressInfo = styled.span`
  margin-top: 20px;
  @media (min-width: 2100px) {
    margin-top: 30px;
  }
  @media (min-width: 3000px) {
    margin-top: 40px;
  }
`;

export const Address = styled.p``;

export const AdditionalInfo = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 0.85rem;
  @media (min-width: 2100px) {
    margin-top: 30px;
  }
  @media (min-width: 3000px) {
    margin-top: 40px;
  }
`;

export const ContactInfo = styled.p`
  text-align: center;
  font-size: 1.15rem;
  font-weight: 500;
  text-decoration: underline;
`;
