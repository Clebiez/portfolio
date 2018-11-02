import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../config/theme';
import Hohey from '../static/hohey.png';

const UseCaseItemWrapper = styled.div`
    width: 100%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const UseCaseItemContent = styled.div`
    width: 50%;
    padding: 30px;
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
        text-align: justify;
    }
`;

const UseCaseItemPicture = styled.div`
    width: 50%;
    overflow: hidden;
    max-height: 500px;
    img {
        width: ${props => props.phoneSize ? '60%' : '100%'}
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
    }

    render() {
        return <UseCaseItemWrapper>
            {
                this.orientationInverted &&
                <UseCaseItemPicture phoneSize={this.pictureIsAPhone}>
                    <img src={this.picture}/>
                </UseCaseItemPicture>
            }
            <UseCaseItemContent>
                <h3>{this.subTitle}</h3>
                <h4>{this.name}</h4>
                <p>{this.description}</p>
            </UseCaseItemContent>
            {
                !this.orientationInverted &&
                <UseCaseItemPicture phoneSize={this.pictureIsAPhone}>
                    <img src={this.picture}/>
                </UseCaseItemPicture>
            }
        </UseCaseItemWrapper>;
    }
}

export default UseCaseItem;