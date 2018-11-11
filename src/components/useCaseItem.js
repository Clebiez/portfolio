import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../config/theme';
import Hohey from '../static/hohey.png';

const UseCaseItemWrapper = styled.div`
    width: 100%;
    margin: 40px auto;
    @media (min-width: ${theme.breakpoints.tab}px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const UseCaseItemContent = styled.div`
    width: 100%;
    margin-top: 20px;
    h3 {
        text-align: center;
        font-size: 36px;
        margin: 0;
        color: ${theme.colors.blue};
        font-family: ${theme.fonts.title};
    }
    h4 {
        text-align: center;
        font-size: 28px;
        margin-top: 10px;
        font-family: ${theme.fonts.title};
        color: ${theme.colors.green};
    }
    p {
        color: ${theme.colors.blue}
        font-family: 'Arial';
        font-size: 18px;
        text-align: left;
        padding: 10px;
    }

    a {
        display: inline-block;
        margin-top: 20px;
        border: 2px solid ${theme.colors.yellow}
        padding: 15px;
        color: ${theme.colors.yellow}
        font-size: 18px;
        font-family: ${theme.fonts.title}
        text-decoration: none;
        transition: 0.5s ease all;
    }

    a:hover {
        border-color: ${theme.colors.blue}
        color: ${theme.colors.blue}
    }

    @media (min-width: ${theme.breakpoints.tab}px) {
        margin-top: 0;
        padding: 30px;
    }
`;

const UseCaseItemPicture = styled.div`
    width: 70%;
    overflow: hidden;
    max-height: 400px;
    margin: auto;
    text-align: center;
    img {
        width: 100%;
        margin: auto;
        height: auto;
    }
`;


class UseCaseItem extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.subTitle = props.subTitle;
        this.orientationInverted = props.listId%2 === 0;
        this.picture = props.picture;
        this.pictureIsAPhone = props.pictureIsAPhone;
        this.description = props.description;
        this.url = props.url;
    }

    render() {
        return <UseCaseItemWrapper>
            <UseCaseItemContent>
                <h3>{this.subTitle}</h3>
                <h4>{this.name}</h4>
                <p>{this.description}</p>
                {
                    this.url &&
                    <a href={this.url} target="_blank" rel="noopener noreferrer">
                        En savoir plus
                    </a>

                }
            </UseCaseItemContent>
            <UseCaseItemPicture phoneSize={this.pictureIsAPhone}>
                <img src={this.picture}/>
            </UseCaseItemPicture>
        </UseCaseItemWrapper>;
    }
}

export default UseCaseItem;