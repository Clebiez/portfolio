import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

import theme from "../config/theme";
const UseCaseItemWrapper = styled.div`
  position: relative;
  height: 200px;
  width: 300px;
  border-radius: 4px;
  background-image: url(${(props) => props.picture});
  background-size: ${(props) =>
    props.pictureWidth ? props.pictureWidth : "100%"};
  cursor: pointer;
  margin: 1rem;
  border: 1px solid ${theme.colors.darkBlue};
  overflow: hidden;

  &:hover > div {
    transition: 0.5s all ease;
    transform: translateY(0);
    height: 100%;
  }

  &:hover p {
    opacity: 1;
    visibility: visible;
  }

  &:hover .underline {
    width: 100px;
  }

  @media (min-width: ${theme.breakpoints.tab}px) {
    height: 275px;
    width: 500px;
  }
`;

const UseCaseItemContent = styled.div`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.darkBlue};
  height: 75px;
  padding: 0.5rem 1rem;
  transform: translateY(200px) translateY(-75px);
  background-color: ${theme.colors.white};
  .underline {
    height: 2px;
    background-color: ${theme.colors.darkBlue};
    width: 50px;
    transition: 0.3s all ease;
  }

  @media (min-width: ${theme.breakpoints.tab}px) {
    transform: translateY(275px) translateY(-75px);
  }
`;

const UseCaseItemTitle = styled.h3``;

const UseCaseItemDescription = styled.p`
  opacity: 0;

  visibility: hidden;
  transition: 0.3s opacity ease;
`;

const UseCaseItemButton = styled(Link)`
  cursor: pointer;
  color: red;
`;

export default ({name, description, picture, link}) => (
  <UseCaseItemWrapper picture={picture}>
    <UseCaseItemContent>
      <UseCaseItemTitle>{name}</UseCaseItemTitle>
      <div className="underline"></div>
      <UseCaseItemDescription>{description}</UseCaseItemDescription>
      {link && (
        <UseCaseItemButton href={link}>Dites m'en plus !</UseCaseItemButton>
      )}
    </UseCaseItemContent>
  </UseCaseItemWrapper>
);
