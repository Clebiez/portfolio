import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import theme from "../config/theme";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

import SubTitle from "./subTitle";
import SocialBar from "./socialBar";

const MainTitle = styled.h1`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.white};
  font-size: 40px;
  text-align: center;
  @media (min-width: ${theme.breakpoints.tab}px) {
    font-size: 60px;
  }
`;

const SecondTitle = styled.h2`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.white};
  font-size: 40px;
  text-align: center;
  @media (min-width: ${theme.breakpoints.tab}px) {
    font-size: 60px;
  }
`;

const FirstViewWrapper = styled.div`
  width: 100%;
  height: 90vh;
  margin: 0;
  background-color: ${theme.colors.darkBlue};
  overflow: hidden;
  div {
  }
`;

const FirstViewContent = styled.div`
  margin-top: ${theme.spacings.xLarge};
  margin-bottom: ${theme.spacings.medium};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  left: 0;
`;

const FirstViewComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
        setVantaEffect(
          WAVES({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: theme.colors.darkBlue,
            shininess: 40.0,
            waveHeight: 40.0,
            waveSpeed: 0.6,
            zoom: 0.65
          })
        );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <FirstViewWrapper ref={vantaRef}>
      <FirstViewContent>
        <SecondTitle>Bonjour !</SecondTitle>
        <MainTitle>Je suis Clément Le Biez</MainTitle>
        <SubTitle>Lead Developeur & Facilitateur agile @ Caen</SubTitle>
        <SocialBar />
      </FirstViewContent>
    </FirstViewWrapper>
  );
};

export default FirstViewComponent;
