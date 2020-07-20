import React, {Component} from "react";
import styled from "styled-components";
import theme from "../config/theme";
import SubTitle from "./subTitle";
import UseCasesData from "../data/useCases.js";
import UseCaseItem from "./useCaseItem";

import HoheyThumb from "../static/hohey_thumb.png";
import P2MYThumb from "../static/p2my_thumb.jpg";
import YousignThumb from "../static/yousign_thumb.png";
import EquilearningThumb from "../static/equilearning_thumb.jpg";

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
      <UseCaseItem picture={P2MYThumb} name="Play2MeetYou" />
      <UseCaseItem picture={YousignThumb} name="Yousign" />
      <UseCaseItem picture={EquilearningThumb} name="EquiLearning" />
      <UseCaseItem picture={HoheyThumb} name="Hohey" />
      <UseCaseItem picture={HoheyThumb} name="Enseignements" />
      <UseCaseItem picture={HoheyThumb} name="Enseignements" />
    </UseCasesList>
  </UseCasesWrapper>
);

export default UseCasesComponent;
