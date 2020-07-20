import React from "react";
import styled from "styled-components";
import theme from "../config/theme";

import {SpikeSeparator} from "./sectionSeparator";

import TwitterIcon from "../static/twitter.svg";
import GithubIcon from "../static/github.svg";
import LinkedinIcon from "../static/linkedin.png";
import EmailIcon from "../static/email.svg";

const Wrapper = styled.div`
  background-color: ${theme.colors.green};
  padding: 4rem 0 2rem 0;
`;

const SocialBarWrapper = styled.div`
  width: 320px;
  margin: auto;
  margin-top: 20px;
`;

const SocialBarTitle = styled.div`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.white};
  font-size: 1.5rem;
  text-align: center;
`;

const SocialLink = styled.a`
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: auto 10px;
  cursor: pointer;
  transition: 0.2s all ease;
  & img {
    width: 100%;
  }

  &:hover {
    transform: translateY(-5px) scale(1.3);
  }
`;

const SocialBar = () => (
  <>
    <SpikeSeparator color={theme.colors.white} />
    <Wrapper>
      <SocialBarTitle>Ça vous dit que l'on travaille ensemble ?</SocialBarTitle>
      <SocialBarWrapper>
        <SocialLink
          href="//twitter.com/clebiez"
          target="_blank"
          title="Mon Twitter"
          rel="noopener noreferrer"
        >
          <img src={TwitterIcon} alt="@clebiez twitter" />
        </SocialLink>
        <SocialLink
          href="//github.com/clebiez"
          target="_blank"
          title="Mon Github"
          rel="noopener noreferrer"
        >
          <img src={GithubIcon} alt="clebiez github" />
        </SocialLink>
        <SocialLink
          href="//www.linkedin.com/in/clebiez/"
          target="_blank"
          title="Mon Linkedin"
          rel="noopener noreferrer"
        >
          <img src={LinkedinIcon} alt="Clément Le Biez Linkedin" />
        </SocialLink>
        <SocialLink
          href="mailto:clement.lebiez@gmail.com"
          rel="noopener noreferrer"
          title="Mon e-mail"
        >
          <img src={EmailIcon} alt="clement.lebiez@gmail.com" />
        </SocialLink>
      </SocialBarWrapper>
    </Wrapper>
  </>
);

export default SocialBar;
