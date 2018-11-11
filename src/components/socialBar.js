import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

import TwitterIcon from 'simple-icons/icons/twitter';
import GithubIcon from 'simple-icons/icons/github';
import LinkedinIcon from 'simple-icons/icons/linkedin';
import GmailIcon from '../static/gmail.svg';

console.log(GmailIcon);

const SocialLink = styled.a`
    display: inline-block;
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: auto 10px;
    cursor: pointer;
`;

const TwitterLink = styled(SocialLink)`
    path {
        fill: #${TwitterIcon.hex}
    }
`;

const GithubLink = styled(SocialLink)`
    svg {
        background-color: white;
        border-radius: 50%;
    }
    path {
        stroke: #${GithubIcon.hex};
        fill: #${GithubIcon.hex};
    }
`;

const LinkedinLink = styled(SocialLink)`
    svg {
        background-color: white;
        border-radius: 5px;
    }
    path {
        fill: #${LinkedinIcon.hex}
    }
`;

const GmailLink = styled(SocialLink)`
    svg {
        background-color: white;
        border-radius: 5px;
    }
    path {
        fill: #${GmailIcon.hex}
    }
`;

const SocialBarWrapper = styled.div`
    width: 300px;
    margin: auto;
    margin-top: 50px;
`;

class SocialBar extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return <SocialBarWrapper>
            <TwitterLink href="//twitter.com/clebiez"
                target="_blank"
                title="Mon Twitter"
                rel="noopener noreferrer"
                dangerouslySetInnerHTML={{__html: TwitterIcon.svg}}>
            </TwitterLink>
            <GithubLink href="//github.com/clebiez"
                target="_blank"
                title="Mon Github"
                rel="noopener noreferrer"
                dangerouslySetInnerHTML={{__html: GithubIcon.svg}}>
            </GithubLink>
            <LinkedinLink href="//www.linkedin.com/in/clebiez/"
                target="_blank"
                title="Mon Linkedin"
                rel="noopener noreferrer"
                dangerouslySetInnerHTML={{__html: LinkedinIcon.svg}}>
            </LinkedinLink>
            <GmailLink
                href="mailto:clement.lebiez@gmail.com"
                rel="noopener noreferrer"
                title="Mon e-mail"
            >
                <img src={GmailIcon} alt="clement.lebiez@gmail.com"/>
            </GmailLink>
        </SocialBarWrapper>;
    }
}

export default SocialBar;