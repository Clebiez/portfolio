import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import theme from "../config/theme";

import SubTitle from "./subTitle";
import DevelopperIllu from "../static/codeThinking.svg";

import {CurvedSeparator, SectionNegativeMargin} from "./sectionSeparator";

const MainTitle = styled.h1`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.darkBlue};
  font-size: 40px;
  text-align: center;
  @media (min-width: ${theme.breakpoints.tab}px) {
    font-size: 60px;
  }
`;

const FirstViewWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  margin: 0;
  background-color: ${theme.colors.white};
  overflow: hidden;
`;

const FirstViewContent = styled.div`
  margin-top: ${theme.spacings.xLarge};
  margin-bottom: ${theme.spacings.medium};
  text-align: center;
`;

const IllustrationContainer = styled.div`
  padding-top: 8rem;
  width: 90%;
  max-width: 500px;
  margin: auto;
  img {
    width: 100%;
  }
`;

const FirstViewComponent = () => {
  return (
    <FirstViewWrapper>
      <FirstViewContent>
        <MainTitle>Bonjour, je suis Clément Le Biez</MainTitle>
        <SubTitle>
          Développeur web & mobile spécialisé dans la gestion de projet agile
        </SubTitle>
        <IllustrationContainer>
          <img src={DevelopperIllu} alt="Illustration de développeur" />
        </IllustrationContainer>
      </FirstViewContent>
      <CurvedSeparator color={theme.colors.white} />
      <SectionNegativeMargin color={theme.colors.blue} />
    </FirstViewWrapper>
  );
};

export default FirstViewComponent;
