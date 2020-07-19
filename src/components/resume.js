import styled from "styled-components";
import theme from "../config/theme";
import React from "react";
import SecurityIllu from "../static/fast.svg";
import DevelopIllu from "../static/codeTyping.svg";
import ProjectIllu from "../static/scrumBoard.svg";

const ResumeWrapper = styled.div`
  color: ${theme.colors.darkBlue};
  @media (min-width: ${theme.breakpoints.tab}px) {
    display: flex;
  }
  font-size: 1em;
  width: 80%;
  min-width: 300px;
  margin: -150px auto 100px;
  justify-content: space-around;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  border: 1px solid ${theme.colors.grey};
  box-shadow: 0px 6px 15px 1px rgba(0, 0, 0, 0.33);
`;

const ResumeItem = styled.div`
  flex: 1;
  padding: 1rem 3rem;

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.grey};

    @media (min-width: ${theme.breakpoints.tab}px) {
      border-bottom: none;
      border-right: 1px solid ${theme.colors.grey};
    }
  }
`;

const ResumeItemTitle = styled.h3`
  text-align: center;
  font-size: 1.6rem;
  font-family: ${theme.fonts.title};
`;

const ResumeItemIllu = styled.img`
  width: 100%;
  max-width: 180px;
  margin: auto;
  display: block;
`;

const ResumeItemDescription = styled.p`
  padding-top: 1rem;
  color: ${theme.colors.green};
  font-family: ${theme.fonts.text};
  font-size: 1rem;
  text-align: center;
`;

const Resume = () => (
  <ResumeWrapper>
    <ResumeItem>
      <ResumeItemTitle>Gestion de projet</ResumeItemTitle>
      <ResumeItemIllu
        src={ProjectIllu}
        alt="Illustration d'un scrum board pour montrer la façon dont je m'organise"
      />
      <ResumeItemDescription>
        Fort de mon expérience en gestion de projets complexes, j'élabore une stratégie de développement agile pour mener à bien votre
        projet dans les meilleures conditions.
      </ResumeItemDescription>
    </ResumeItem>

    <ResumeItem>
      <ResumeItemTitle>Développement</ResumeItemTitle>
      <ResumeItemIllu src={DevelopIllu} alt="Illustration du développement" />
      <ResumeItemDescription>
        Expert en développement, je développe des applications webs
        ou mobile en mettant l'accent sur la sécurité et les performances.
      </ResumeItemDescription>
    </ResumeItem>

    <ResumeItem>
      <ResumeItemTitle>Maintenance</ResumeItemTitle>
      <ResumeItemIllu src={SecurityIllu} alt="Illustration de la sécurité" />
      <ResumeItemDescription>
        Une application vit dans le temps. Il est primordial de la maintenir en
        ligne afin que votre business puisse continuer d'évoluer dans les
        meilleures conditions.
      </ResumeItemDescription>
    </ResumeItem>
  </ResumeWrapper>
);

export default Resume;
