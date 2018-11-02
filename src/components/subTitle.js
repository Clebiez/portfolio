import styled from 'styled-components';
import theme from '../config/theme';

const SubTitle = styled.h2`
    display: inline-block;
    margin: auto;
    font-family: ${theme.fonts.title};
    color: ${theme.colors.cream};
    padding: 10px;
    border: 2px solid ${theme.colors.cream}
    font-size: 24px;
    text-align: center;
    @media (min-width: ${theme.breakpoints.tab}px) {
        font-size: 28px;
    }
`;

export default SubTitle;