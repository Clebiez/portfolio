import styled from "styled-components";
import theme from "../config/theme";
import React from "react";
import SecurityIllu from "../static/fast.svg";
import DevelopIllu from "../static/codeTyping.svg";
import ProjectIllu from "../static/scrumBoard.svg";

const ResumeWrapper = styled.div`
  @media (min-width: ${theme.breakpoints.tab}px) {
    display: flex;
  }
  font-size: 1em;
  width: 80%;
  max-width: 1000px;
  min-width: 300px;
  margin: -150px auto 100px;
  justify-content: space-around;
  background-color: ${theme.colors.white};
  border-radius: 8px;
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
  font-size: 1.4rem;
  color: ${theme.colors.darkBlue};
  font-family: ${theme.fonts.title};
  padding-top: ${(props) => props.pt};
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
  font-size: 1.1rem;
  text-align: left;
  font-weight: 600;
`;

const Resume = () => (
  <ResumeWrapper>
    <ResumeItem>
      <ResumeItemIllu
        src={ProjectIllu}
        alt="Illustration d'un scrum board pour montrer la façon dont je m'organise"
      />
      <ResumeItemTitle pt="1.5rem">J'organise</ResumeItemTitle>
      <ResumeItemDescription>
        En appliquant des méthodologies qui ont fait leurs preuves comme Scrum ou LEAN.
      </ResumeItemDescription>
    </ResumeItem>

    <ResumeItem>
      <ResumeItemIllu src={DevelopIllu} alt="Illustration du développement" />
      <ResumeItemTitle pt="1rem">Je développe</ResumeItemTitle>
      <ResumeItemDescription>
        Des applications sur-mesures, sécurisées et performantes répondant aux besoins de vos utilisateurs.
      </ResumeItemDescription>
    </ResumeItem>

    <ResumeItem>
      <ResumeItemIllu src={SecurityIllu} alt="Illustration de la sécurité" />
      <ResumeItemTitle pt="1.75rem">Je maintiens</ResumeItemTitle>
      <ResumeItemDescription>
        En gardant toujours un oeil sur vos projets grâce à des outils de monitoring.
      </ResumeItemDescription>
    </ResumeItem>
  </ResumeWrapper>
);

export default Resume;
