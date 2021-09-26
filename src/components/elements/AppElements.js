import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 1024px){
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        grid-template-columns: minmax(100px, 365px) 1fr;
    }
    
`;


export const ThemeColor = styled.div`
    width: 100%;
    transition: all 1s ease;
    
    ${props => props.theme === true && css`

        background: rgb(20,20,20);

        p{
            color: #e0e0e0;
        }

        h2, h3{
            color: white;
        }
    `}
`;