import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

const Card = styled.div`
    background-color: ${theme.colors.cream};
    padding: ${theme.spacings.large};
    border: 1px solid ${theme.colors.grey};
    max-width: 80vw;
    margin: auto;
    box-shadow:  0 0 6px ${theme.colors.black};
    border-radius: 8px;
`;

export default Card;