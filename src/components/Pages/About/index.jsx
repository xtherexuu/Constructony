import React from "react";
import { AboutSection, Wrapper } from "./styled";
import PageHeader from "../PageHeader";
import srcToAboutUsImage from "../../../../utils/aboutUsHomePageImage.png";
import TextComponent from "../../TextComponent";
import TextImportant from "../../TextImportant";
import TextHighlight from "../../TextHighlight";
import TextLink from "../../TextLink";

export default function About() {
  return (
    <Wrapper>
      <PageHeader text={"O NAS"} imageUrl={srcToAboutUsImage} />
      <AboutSection>
        <TextComponent>
          Jesteśmy firmą budowlaną z{" "}
          <TextImportant>wieloletnim doświadczeniem</TextImportant>, pasją do
          tworzenia i nieustannym dążeniem do doskonałości. Nasza historia
          zaczyna się od marzenia o budowaniu nie tylko budynków, ale także
          społeczności.
          <br />
          <br />
          Nasza siedziba znajduje się w sercu Polski - w{" "}
          <TextImportant>Warszawie</TextImportant>, ale{" "}
          <TextLink to="/projects">nasze projekty</TextLink> można znaleźć w
          całym kraju. Przez lata, nasza ekipa zdobyła doświadczenie w każdym
          aspekcie budownictwa, od projektowania po realizację. W{" "}
          <TextHighlight>Constructony</TextHighlight> wierzymy, że każdy projekt
          jest szansą na wprowadzenie innowacji i doskonałości.
          <br />
          <br />
          Nasza misja to tworzenie przestrzeni, które nie tylko spełniają
          oczekiwania naszych klientów, ale także przyczyniają się do poprawy
          jakości życia w społecznościach, w których działamy. Wierzymy, że
          budynki powinny być więcej niż tylko strukturami - powinny być
          miejscem, gdzie ludzie mogą żyć, pracować i cieszyć się życiem.
          <br />
          <br />W Constructony, stawiamy na innowacje. Dążymy do ciągłego
          doskonalenia naszych procesów i technologii, aby zapewnić najwyższą
          jakość <TextLink to="/offer">naszych usług</TextLink>.{" "}
          <TextLink to="/projects">Nasze projekty</TextLink> są dowodem na nasze
          zaangażowanie w poszukiwanie nowych rozwiązań i dążenie do
          doskonałości.
        </TextComponent>
      </AboutSection>
    </Wrapper>
  );
}
