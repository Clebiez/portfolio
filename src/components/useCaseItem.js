import React, {Component} from "react";
import styled from "styled-components";
import theme from "../config/theme";

const UseCaseItemWrapper = styled.div`
  position: relative;
  height: 400px;
  width: 600px;
  background-image: url(${(props) => props.picture});
  background-size: 100%;
  cursor: pointer;

  &:hover > div {
    transition: 0.5s all ease;
    transform: translateY(0px);
    height: 100%;
  }

  &:hover .underline {
    width: 100px;
  }
`;

const UseCaseItemContent = styled.div`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.darkBlue};
  height: 100px;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${theme.colors.white};
  .underline {
    height: 2px;
    background-color: ${theme.colors.darkBlue};
    width: 50px;
    transition: 0.3s all ease;
  }
`;

export default ({name, subTitle, picture}) => (
  <UseCaseItemWrapper picture={picture}>
    <UseCaseItemContent>
      <h3>{name}</h3>
      <div className="underline"></div>
    </UseCaseItemContent>
  </UseCaseItemWrapper>
);
