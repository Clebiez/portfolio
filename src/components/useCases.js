import React from "react";
import styled from "styled-components";
import theme from "../config/theme";
import SubTitle from "./subTitle";
import UseCaseItem from "./useCaseItem";

import HoheyThumb from "../static/hohey_thumb.png";
import P2MYThumb from "../static/p2my_thumb.jpg";
import YousignThumb from "../static/yousign_thumb.png";
import EquilearningThumb from "../static/equilearning_thumb.jpg";
import TeachingThumb from "../static/teaching_thumb.jpg";
import ProjectCompleted from "../static/project_completed.svg";

const UseCasesWrapper = styled.div`
  background-color: ${theme.colors.white};
  max-width: 1400px;
  width: 90%;
  margin: auto;
`;

const UseCasesList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: space-around;
`;

const UseCasesComponent = () => (
  <UseCasesWrapper>
    <SubTitle>Quelques unes de mes réalisations</SubTitle>

    <UseCasesList>
      <UseCaseItem
        picture={P2MYThumb}
        name="Play2MeetYou"
        description="Application mobile visant à connecter les utilisateurs entre eux via divers mini-jeux."
      />
      <UseCaseItem
        picture={YousignThumb}
        name="Yousign"
        description="Application SaaS de signature électronique certifié permettant de simplifier les processus de signature dans les entreprises."
      />
      <UseCaseItem
        picture={EquilearningThumb}
        name="EquiLearning"
        description="Application mobile de lexique Anglais - Français dans le domaine équin."
      />
      <UseCaseItem
        picture={HoheyThumb}
        name="HoHey"
        description="Application web de comparateur de stations de ski simple et efficace."
      />
      <UseCaseItem
        picture={TeachingThumb}
        name="Enseignements"
        description="Enseignement de conduite de projet agile au sein de l'Université de Caen Normandie."
      />
      <UseCaseItem
        picture={ProjectCompleted}
        pictureWidth="50%"
        name="Et d'autres encore !"
        description="Je ne vais pas tout vous dire non plus :), n'hésitez pas à me contacter si vous voulez en savoir plus."
      />
    </UseCasesList>
  </UseCasesWrapper>
);

export default UseCasesComponent;
