import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../config/theme';
import SubTitle from './subTitle';
import UseCasesData from '../data/useCases.js';
import UseCaseItem from './useCaseItem';

console.log(UseCasesData);

const UseCasesWrapper = styled.div`
    background-color: ${theme.colors.dark};
    padding-top: 40px;
    text-align: center;
`;

const UseCasesList = styled.div`
    margin-top: 40px;
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: space-around;
`;




class UseCasesComponent extends Component {
    render() {
        return <UseCasesWrapper>
            <SubTitle>
                Quelques unes de mes réalisations
            </SubTitle>

            <UseCasesList>
                {
                    UseCasesData.map((element, index) => {
                        return <UseCaseItem listId={index}
                            key={index}
                            picture={element.picture}
                            pictureIsAPhone={element.pictureIsAPhone}
                            name={element.name}
                            description={element.description}
                            subTitle={element.subTitle}
                        />
                    })
                }
            </UseCasesList>
        </UseCasesWrapper>;
    }
}

export default UseCasesComponent;