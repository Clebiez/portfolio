import Particles from 'react-particles-js';
import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

import SubTitle from './subTitle';
import SocialBar from './socialBar';

const MainTitle = styled.h1`
    font-family: ${theme.fonts.title};
    color: ${theme.colors.blue};
    font-size: 40px;
    text-align: center;
    @media (min-width: ${theme.breakpoints.tab}px) {
        font-size: 60px;
    }
`;

const FirstViewWrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    background-color: ${theme.colors.dark};
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

class FirstViewComponent extends Component {
    constructor(props) {
        super(props);
        this.particules = 120;
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            this.particules = Math.round(document.body.clientWidth/9);
        }
    }

    render() {
        return <FirstViewWrapper>
                <Particles params={{
            		particles: {
                        number: {
                            value:  this.particules,
                            density: {
                                value_area: 400
                            }
                        }
                    }
                }}
                width='100%'
                height='100vh'
                />
                <FirstViewContent>
                    <MainTitle>Bonjour !</MainTitle>
                    <MainTitle>Je suis Clément Le Biez</MainTitle>
                    <SubTitle>Creative Developer @ Caen, France</SubTitle>
                    <SocialBar />
                </FirstViewContent>
            </FirstViewWrapper>;
    }
}

export default FirstViewComponent;