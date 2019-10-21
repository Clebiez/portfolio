import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

const PresentationsWrapper = styled.div`
    background-color: ${theme.colors.white};
    padding: 40px;
`;

class PresentationsComponent extends Component {

    render() {
        return <PresentationsWrapper>
                <p>Le web avance à une vitesse inimaginable.</p>
            </PresentationsWrapper>;
    }
}

export default PresentationsComponent;