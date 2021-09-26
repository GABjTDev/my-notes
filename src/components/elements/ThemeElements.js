import styled, { css } from "styled-components";
import { BsSun, BsMoon } from 'react-icons/bs';

export const ThemeBar = styled.div`
    width: 70px;
    height: 30px;
    margin: 0 auto;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    position: relative;
    background: #1A1B1C;
    border-radius: 15px;
    padding: 0 5px;
    cursor: pointer;
`;

export const Circle = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
    transform: translateX(0);

    ${props => props.theme === true && css`
        transform: translateX(40px);
    `}

`;

export const Sun = styled(BsSun)`
    cursor: pointer;
`;

export const Moon = styled(BsMoon)`
    cursor: pointer;
`;

