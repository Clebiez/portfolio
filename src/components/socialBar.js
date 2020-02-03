import React from 'react';
import styled from 'styled-components';

import TwitterIcon from "../static/twitter.svg";
import GithubIcon from "../static/github.svg";
import LinkedinIcon from "../static/linkedin.png";
import TelegramIcon from '../static/telegram.svg';

const SocialBarWrapper = styled.div`
  width: 320px;
  margin: auto;
  margin-top: 50px;
`;

const SocialLink = styled.a`
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 5px;
    margin: auto 10px;
    cursor: pointer;
    transition: 0.3s all ease;
    & img {
      width: 100%;
    }

    &:hover {
      transform: translateY(-5px) scale(1.2);
    }
`;

const SocialBar = () => (
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
      <img src={TelegramIcon} alt="clement.lebiez@gmail.com" />
    </SocialLink>
  </SocialBarWrapper>
);

export default SocialBar;