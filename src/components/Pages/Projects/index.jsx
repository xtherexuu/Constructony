import React from "react";
import {
  Project,
  ProjectHeading,
  ProjectImage,
  ProjectsContainer,
  Wrapper,
} from "./styled";
import PageHeader from "../PageHeader";
import TextComponent from "../../TextComponent";
import TextHighlight from "../../TextHighlight";
import TextImportant from "../../TextImportant";
import srcToOurProjectsImage from "../../../../utils/ourProjects.png";
import srcToMercedesImage from "../../../../utils/mercedes.jpg";
import srcToVarsoTowerImage from "../../../../utils/varsoTower.jpg";
import srcToHouseImage from "../../../../utils/houseImage.png";

export default function Projects() {
  return (
    <Wrapper>
      <PageHeader text="PROJEKTY" imageUrl={srcToOurProjectsImage} />
      <ProjectsContainer>
        <TextComponent align="center">
          Witaj w sekcji, w której możesz zapoznać się z naszymi osiągnięciami.
          Znajdziesz tutaj kilka naszych największych projektów, których się
          podjęliśmy, oraz kilka mniejszych, ale nadal imponujących.
        </TextComponent>
        <Project>
          <ProjectHeading>Fabryka Mercedes w Jaworze</ProjectHeading>
          <ProjectImage src={srcToMercedesImage} />
          <TextComponent>
            <TextImportant>
              Zbudowaliśmy pierwszą w Polsce fabrykę silników i baterii
              elektrycznych Mercedes-Benz.
            </TextImportant>
            <br />
            Znajduje się ona około 70 kilometrów na zachód od Wrocławia, w
            gminie Jawor, na terenie Wałbrzyskiej Specjalnej Strefy
            Ekonomicznej.
            <br />
            <br />
            Zakład, działający w ramach nowo powstałej spółki{" "}
            <TextHighlight>Mercedes-Benz Manufacturing Polska</TextHighlight>,
            specjalizuje się w produkcji czterocylindrowych silników benzynowych
            i wysokoprężnych, oraz baterii elektrycznych do samochodów osobowych
            marki Mercedes-Benz.
            <br />
            <br />
            Nowoczesna fabryka łączy w sobie najwyższe standardy przemysłu
            motoryzacyjnego z ideą <TextHighlight>Przemysłu 4.0</TextHighlight>.
            Jej uruchomienie przyczyniło się do zwiększenia zdolności
            produkcyjnych koncernu w Europie Wschodniej, oraz wzrostu
            elastyczności i efektywności globalnej sieci produkcyjnej
            Mercedes-Benz.
          </TextComponent>
        </Project>
        <Project>
          <ProjectHeading>Varso Tower</ProjectHeading>
          <ProjectImage src={srcToVarsoTowerImage} />
          <TextComponent>
            <TextImportant>
              Zbudowaliśmy kompleks budynków biurowych Varso Tower,
            </TextImportant>{" "}
            zlokalizowany na warszawskiej Woli, na rogu ulicy Chmielnej oraz
            alei Jana Pawła II.
            <br />
            <br />
            Projekt ten ma ambicję stać się{" "}
            <TextImportant>
              najwyższym budynkiem w Polsce i całej Unii Europejskiej.
            </TextImportant>
            <br />
            Jego całkowita wysokość wynosi imponujące{" "}
            <TextHighlight>310 metrów,</TextHighlight> a wysokość dachu -{" "}
            <TextHighlight>230 metrów.</TextHighlight>
            <br />
            <br />
            Budynek będzie składał się z aż{" "}
            <TextImportant>53 kondygnacji,</TextImportant> co sprawi, że stanie
            się on <TextImportant>prawdziwym drapaczem chmur.</TextImportant>
          </TextComponent>
        </Project>
        <Project>
          <ProjectHeading>Domek letniskowy</ProjectHeading>
          <ProjectImage src={srcToHouseImage} />
          <TextComponent>
            <TextImportant>
              Zbudowaliśmy urokliwy domek letniskowy dla naszego klienta,
            </TextImportant>{" "}
            otoczony malowniczymi mazurskimi krajobrazami niedaleko jeziora
            Śniardwy.
            <br />
            Nasz zespół projektantów włożył mnóstwo serca, aby dopasować projekt
            idealnie do otoczenia, jednocześnie zachowując{" "}
            <TextImportant>nowoczesny styl.</TextImportant>
            <br />
            <br />W domku znajduje się wiele udogodnień, takich jak{" "}
            <TextHighlight>przestronny garaż,</TextHighlight> najnowsze{" "}
            <TextHighlight>sprzęty AGD</TextHighlight> oraz systemy{" "}
            <TextHighlight>antywłamaniowe i przeciwpożarowe.</TextHighlight>
            <br />
            <br />
            Zapraszamy do odkrywania tej wyjątkowej oazie spokoju i luksusu w
            sercu mazurskiej natury!
          </TextComponent>
        </Project>
      </ProjectsContainer>
    </Wrapper>
  );
}
