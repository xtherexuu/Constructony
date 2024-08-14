import React from "react";
import {
  AdditionalInfo,
  Address,
  AddressInfo,
  ContactAddress,
  ContactDescription,
  ContactElement,
  ContactInfo,
  ContactSection,
  ContactWrapper,
  Wrapper,
} from "./styled";
import PageHeader from "../PageHeader";
import srcToContactImage from "../../../../utils/contact.png";
import TextComponent from "../../TextComponent";
import { MdCall, MdMailOutline } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <Wrapper>
      <PageHeader text="KONTAKT" imageUrl={srcToContactImage} />
      <ContactSection>
        <TextComponent align="center">
          Witamy na naszej stronie kontaktowej! Jeśli masz pytania, chciałbyś
          uzyskać więcej informacji na temat naszych usług lub dokonać
          zamówienia, jesteśmy tutaj, aby Ci pomóc. Skontaktuj się z nami
          korzystając z jednej z poniższych metod:
        </TextComponent>
        <ContactWrapper>
          <ContactDescription>
            Zadzwoń do nas!
            <br />
            (9:00-16:00)
          </ContactDescription>
          <ContactElement href="tel:123-456-789">
            <MdCall />
            <ContactInfo>123 456 789</ContactInfo>
          </ContactElement>
        </ContactWrapper>
        <ContactWrapper>
          <ContactDescription>Napisz do nas maila!</ContactDescription>
          <ContactElement href="mailto:contact@constructony.pl">
            <MdMailOutline />
            <ContactInfo>contact@constructony.pl</ContactInfo>
          </ContactElement>
        </ContactWrapper>
        <ContactWrapper>
          <ContactDescription>Napisz do nas na instagramie!</ContactDescription>
          <ContactElement href="https://instagram.com">
            <FaInstagram />
            <ContactInfo>@constructonypl</ContactInfo>
          </ContactElement>
        </ContactWrapper>
        <ContactWrapper>
          <ContactDescription>Napisz do nas na lindedinie!</ContactDescription>
          <ContactElement href="https://pl.linkedin.com/">
            <FaLinkedin />
            <ContactInfo>@Constructony</ContactInfo>
          </ContactElement>
        </ContactWrapper>
        <ContactWrapper>
          <ContactDescription>
            Odwiedź nas w naszej siedzibie!
          </ContactDescription>
          <ContactAddress>
            <FaLocationDot />
            <AddressInfo>
              <Address>Constructony</Address>
              <Address>ul. Budowlana 40</Address>
              <Address>00-221 Warszawa</Address>
            </AddressInfo>
            <AdditionalInfo>
              <b>Uwaga</b>
              <br />
              Przed przyjściem należy umówić się na spotkanie.{" "}
            </AdditionalInfo>
          </ContactAddress>
        </ContactWrapper>
      </ContactSection>
    </Wrapper>
  );
}
