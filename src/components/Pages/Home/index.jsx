import React, { useState } from "react";
import {
  SlideContainer,
  SliderContainer,
  SlideHeading,
  SlidesContainer,
  Wrapper,
  SlideText,
  SlideContent,
  SliderButton,
  AwardScrollerItem,
  AwardScrollerItemImage,
  AwardScrollerItemText,
  Contact,
  ContactElement,
} from "./styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Scroller from "../../Scroller";
import srcToPrize2020 from "../../../../utils/prize2020.png";
import srcToPrize2021 from "../../../../utils/prize2021.png";
import srcToPrize2022 from "../../../../utils/prize2022.png";
import srcToPrize2023 from "../../../../utils/prize2023.png";
import srcToPrize2020dark from "../../../../utils/prize2020dark.png";
import srcToPrize2021dark from "../../../../utils/prize2021dark.png";
import srcToPrize2022dark from "../../../../utils/prize2022dark.png";
import srcToPrize2023dark from "../../../../utils/prize2023dark.png";
import srcToAboutUsImage from "../../../../utils/aboutUsHomePageImage.png";
import srcToOurOffertImage from "../../../../utils/ourOffert.png";
import srcToOurProjectsImage from "../../../../utils/ourProjects.png";
import srcToContactImage from "../../../../utils/contact.png";

import { useTheme } from "../../../../redux/useTheme";
import Section from "./Section";
import { MdCall, MdOutlineMailOutline } from "react-icons/md";
import TextImportant from "../../TextImportant";
import TextHighlight from "../../TextHighlight";
import TextLink from "../../TextLink";
import TextComponent from "../../TextComponent";

export const HomePage = () => {
  const [sliderScroll, setSliderScroll] = useState(0);
  const theme = useTheme();
  return (
    <Wrapper>
      <SliderContainer>
        <SliderButton
          direction="back"
          onClick={() => {
            setSliderScroll(sliderScroll - 1);
          }}
          disabled={sliderScroll <= 0}
        >
          <IoIosArrowBack />
        </SliderButton>
        <SliderButton
          direction="forward"
          disabled={sliderScroll >= 5}
          onClick={() => {
            setSliderScroll(sliderScroll + 1);
          }}
        >
          <IoIosArrowForward />
        </SliderButton>
        <SlidesContainer scroll={sliderScroll}>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Wysoka Jakość Materiałów</SlideHeading>
              <SlideText>
                Stawiamy na najwyższą jakość materiałów. Nasze budynki są
                solidne, trwałe i odporne na wszelkie warunki atmosferyczne.
                Przykład? Nasze ściany zewnętrzne są wykonane z betonu o
                wyjątkowej wytrzymałości.
              </SlideText>
            </SlideContent>
          </SlideContainer>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Pionierzy w Wykończeniach</SlideHeading>
              <SlideText>
                Nasze wykończenia są perfekcyjne. Każdy detal jest dopracowany,
                a efekt końcowy zachwyca. Przykład? Nasze drewniane podłogi są
                ręcznie szlifowane i lakierowane.
              </SlideText>
            </SlideContent>
          </SlideContainer>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Zielone Technologie</SlideHeading>
              <SlideText>
                Dbamy o środowisko naturalne. W naszych projektach stosujemy
                energooszczędne rozwiązania, takie jak panele słoneczne czy
                systemy odzyskiwania wody deszczowej.
              </SlideText>
            </SlideContent>
          </SlideContainer>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Szybka Realizacja</SlideHeading>
              <SlideText>
                Nasza firma działa sprawnie. Od koncepcji do gotowego budynku –
                wszystko w krótkim czasie. Przykład? Nasza ostatnia budowa
                budynku zajęła zaledwie 6 miesięcy.
              </SlideText>
            </SlideContent>
          </SlideContainer>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Bezpieczeństwo na Pierwszym Miejscu</SlideHeading>
              <SlideText>
                Nasze budynki spełniają najwyższe standardy bezpieczeństwa. A
                dodatkowo do każdego projektu budowy nieruchomości dołączamy
                gratisową instalację czujników bezpieczeństwa.
              </SlideText>
            </SlideContent>
          </SlideContainer>
          <SlideContainer>
            <SlideContent>
              <SlideHeading>Zaufanie Klientów</SlideHeading>
              <SlideText>
                Nasze referencje mówią same za siebie. Klienci polecają nas
                swoim znajomym. Ostatnie remonty mieszkan zdobyły same pozytywne
                opinie.
              </SlideText>
            </SlideContent>
          </SlideContainer>
        </SlidesContainer>
      </SliderContainer>
      <Scroller>
        <AwardScrollerItem>
          <AwardScrollerItemText>
            Od 4 lat na podium w plebiscycie Mistrzowie Budownictwa!
          </AwardScrollerItemText>
        </AwardScrollerItem>
        <AwardScrollerItem>
          <AwardScrollerItemImage
            src={
              theme.colors.mode === "dark" ? srcToPrize2023dark : srcToPrize2023
            }
            alt="This is image representation of prize which our company won in 2023 - Secound place in 'Mistrzowie Budownictwa' plebiscite."
          />
          <AwardScrollerItemText>#2 2023</AwardScrollerItemText>
        </AwardScrollerItem>
        <AwardScrollerItem>
          <AwardScrollerItemImage
            src={
              theme.colors.mode === "dark" ? srcToPrize2022dark : srcToPrize2022
            }
            alt="This is image representation of prize which our company won in 2022 - First place in 'Mistrzowie Budownictwa' plebiscite."
          />
          <AwardScrollerItemText>#1 2022</AwardScrollerItemText>
        </AwardScrollerItem>
        <AwardScrollerItem>
          <AwardScrollerItemImage
            src={
              theme.colors.mode === "dark" ? srcToPrize2021dark : srcToPrize2021
            }
            alt="This is image representation of prize which our company won in 2021 - First place in 'Mistrzowie Budownictwa' plebiscite."
          />
          <AwardScrollerItemText>#1 2021</AwardScrollerItemText>
        </AwardScrollerItem>
        <AwardScrollerItem>
          <AwardScrollerItemImage
            src={
              theme.colors.mode === "dark" ? srcToPrize2020dark : srcToPrize2020
            }
            alt="This is image representation of prize which our company won in 2020 - Third place in 'Mistrzowie Budownictwa' plebiscite."
          />
          <AwardScrollerItemText>#3 2020</AwardScrollerItemText>
        </AwardScrollerItem>
      </Scroller>
      <Section
        sectionHeading="Krótko o nas!"
        headerImageSrc={srcToAboutUsImage}
        imageAlt="On the image are our team that works at heights."
      >
        <TextComponent>
          Jesteśmy firmą budowlaną z{" "}
          <TextImportant>wieloletnim doświadczeniem</TextImportant>, pasją do
          tworzenia i nieustannym dążeniem do doskonałości. Nasza historia
          zaczyna się od marzenia o budowaniu nie tylko budynków, ale także
          społeczności. Przez lata, nasza ekipa zdobyła doświadczenie w każdym
          aspekcie budownictwa, od projektowania po realizację. W{" "}
          <TextHighlight>Constructony</TextHighlight> wierzymy, że każdy projekt
          jest szansą na wprowadzenie innowacji i doskonałości. Chcesz wiedzieć
          więcej? <br /> Zapraszamy do odwiedzenia strony{" "}
          <TextLink to="/aboutus">"O nas"</TextLink>, oraz naszego{" "}
          <TextLink to="/blog">bloga</TextLink>, gdzie znajdziesz więcej
          informacji.
        </TextComponent>
      </Section>
      <Section
        sectionHeading="Nasza oferta!"
        headerImageSrc={srcToOurOffertImage}
        imageAlt="On the image are two people from our building team. They are talking with eachoter."
      >
        <TextComponent>
          Witajcie w naszej ofercie!{" "}
          <TextImportant>Dzielimy się na segmenty</TextImportant>:{" "}
          <TextHighlight>budowlany</TextHighlight> i{" "}
          <TextHighlight>remontowy</TextHighlight> dla{" "}
          <TextHighlight>klientów indywidualnych</TextHighlight> oraz{" "}
          <TextHighlight>komercyjny</TextHighlight> dla dużych projektów, takich
          jak budowa wieżowców czy zaawansowane remonty. Już teraz możemy
          spełnić Wasze marzenia! <br /> Zapraszamy do odwiedzenia{" "}
          <TextLink to="/offer">strony z naszą ofertą</TextLink>!
        </TextComponent>
      </Section>
      <Section
        sectionHeading="Nasze projekty!"
        headerImageSrc={srcToOurProjectsImage}
        imageAlt="On the image is object what we built."
      >
        <TextComponent>
          Dzięki za zainteresowanie! <br /> W Constructony{" "}
          <TextImportant>jesteśmy dumni</TextImportant> z naszych projektów,
          które odzwierciedlają naszą pasję do tworzenia i innowacji.
          <br />
          Jeżeli chcesz zobaczyć co potrafimy zrobić, zapraszamy do odwiedzenia{" "}
          <TextLink to="/projects">strony z naszymi projektami</TextLink>.
        </TextComponent>
      </Section>
      <Section
        sectionHeading="Kontakt!"
        headerImageSrc={srcToContactImage}
        imageAlt="On the image are our contact team. People are talking via the internet."
      >
        <TextComponent>
          Chcesz się z nami skontaktować? <br />
          Możesz użyć jednej z poniższych metod lub przejść na naszą{" "}
          <TextLink to="/contact">stronę kontaktową</TextLink> i wyświetlić
          więcej opcji.
        </TextComponent>
        <Contact>
          <ContactElement href="tel:123-456-789">
            <MdCall />
            <span>123&nbsp;456&nbsp;789</span>
          </ContactElement>
          <ContactElement href="mailto:contact@constructony.pl">
            <MdOutlineMailOutline /> <span>contact@constructony.pl</span>
          </ContactElement>
          <ContactElement href="/contact">
            Więcej możliwości kontaktu
          </ContactElement>
        </Contact>
      </Section>
    </Wrapper>
  );
};
