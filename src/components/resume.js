import styled from "styled-components";
import theme from "../config/theme";
import React from 'react';

const ResumeWrapper = styled.div`
  color: ${theme.colors.darkBlue};
  padding: 40px;
  font-size: 1.2em;
  ${'' /* box-shadow: 0px 0px 25px -3px rgba(0, 0, 0, 0.75); */}
`;

const Resume = () => (
  <ResumeWrapper>
    Voyageur, musicien et passionné de gestion de projet. J'exerce actuellement la double casquette de Lead developer et de Scrum Master pour atteindre avec mon équipe l'excellence technique dont on a besoin pour relever tous les défis.
  </ResumeWrapper>
);

export default Resume;
