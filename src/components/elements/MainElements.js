import styled, { keyframes, css } from "styled-components";


const opacity = keyframes`
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }

`;

export const MainContainer = styled.section`
    animation: ${opacity} 1s linear forwards;
`;

export const MainTitle = styled.h2`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    ${props => props.home && css`
        background: #8B8A8A;
    `}

    ${props => props.tech === 'html' && css`
        background: #EA8E39;
    `}

    ${props => props.tech === 'css' && css`
        background: #468FD3;;
    `}

    ${props => props.tech === 'javascript' && css`
        background: #D3CE4C;
    `}

    ${props => props.tech === 'typescript' && css`
        background: #3F54C0;
    `}

    ${props => props.tech === 'sass' && css`
        background: #C555CF;
    `}

    ${props => props.tech === 'react' && css`
        background: #5FADCE;
    `}

    ${props => props.tech === 'github' && css`
        background: #1A1B1C;
    `}
`;

export const MainSubTitle = styled.h3`
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    color: rgba(83, 83, 83, 1);
    margin-bottom: 10px;
    padding-top: 20px;
`;

export const MainParagraph = styled.p`
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 0em;
    margin-bottom: 20px;
`;

export const MainPadding = styled.div`
    padding: 20px 16px;

    @media screen and (min-width: 1024px){
        padding-left: 100px;
    }
`;

export const MainMargin = styled.div`
    margin-bottom: 50px;
`;

export const MainCode = styled.code``;

export const MainPre = styled.pre`
    display: block;
    width: 100%;
    max-width: 280px;
    margin: 40px auto;
    color: white;
    background-color: #34373a;
    padding: 25px;
    border-radius: 5px;
    overflow-x: scroll;

    @media screen and (min-width: 425px){
        max-width: 370px;
    }

    @media screen and (min-width: 625px){
        max-width: 550px;
    }

    @media screen and (min-width: 1440px){
        max-width: 850px;
    }
`;

export const MainImg = styled.img`
    width: 100%;
    object-fit: cover;
`;