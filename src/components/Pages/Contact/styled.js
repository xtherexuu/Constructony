import styled from "styled-components";
import srcToOurProjectsImage from "../../../../utils/ourProjects.png";

export const Wrapper = styled.div``;

export const ContactSection = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  gap: 15px;
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
`;

export const ContactDescription = styled.p`
  text-align: center;
`;

export const ContactElement = styled.a`
  padding: 15px;
  border-radius: 6px;
  color: white;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  & > svg {
    width: 25px;
    height: 25px;
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

`;

export const AddressInfo = styled.span`
  margin-top: 20px;
`;

export const Address = styled.p``;

export const AdditionalInfo = styled.p`
    text-align: center;
    margin-top: 15px;
    font-size: 0.85rem;
`;

export const ContactInfo = styled.p`
  text-align: center;
  font-size: 1.15rem;
  font-weight: 500;
  text-decoration: underline;
`;
