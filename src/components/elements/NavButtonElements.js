import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";


// ICONS
import { SiHtml5, SiTypescript, SiCss3, SiJavascript, SiSass, SiReact, SiGithub } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';

export const NavButtonContainer = styled.div`
    width: 100%;
`;

export const LiNav = styled.li`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.2em;
    color: white;
`;

export const LinkClick = styled(NavLink)`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: red;
    margin-bottom: 10px;
    text-decoration: none;
    color: white;
    padding: 5px 15px;
    transition: opacity .5s ease;

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

    &:hover{
        opacity: .75;
    }

    @media screen and (min-width: 1024px){
        height: 60px;
    }

`;

export const LinkNoActive = styled(Link)`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: red;
    margin-bottom: 10px;
    text-decoration: none;
    color: white;
    padding: 5px 15px;
    transition: opacity .5s ease;

    ${props => props.home && css`
        background: #8B8A8A;
    `}

    &:hover{
        opacity: .75;
    }

    @media screen and (min-width: 1024px){
        height: 60px;
    }

`;

export const List = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: all .5s ease;
`;

export const ListOption = styled.a`
    cursor: pointer;
    font-size: .85rem;
    margin: 0;
    display: block;
    padding-left: 15px;
    text-decoration: none;
    letter-spacing: 1px;
    color: #a2a2a2;

    transition: all .5s ease;
    &:hover{
        background: #a2a2a2;
        color: white;
    }
`;


export const IconHome = styled(AiFillHome)`
    color: white;
`;

export const IconHtml = styled(SiHtml5)`
    color: white;
`;

export const IconCss = styled(SiCss3)`
    color: white;
`;

export const IconJs = styled(SiJavascript)`
    color: white;
`;

export const IconSass = styled(SiSass)`
    color: white;
`;

export const IconTs = styled(SiTypescript)`
    color: white;
`;

export const IconReact = styled(SiReact)`
    color: white;
`;

export const IconGithub = styled(SiGithub)`
    color: white;
`;

