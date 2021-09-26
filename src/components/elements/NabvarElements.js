import styled from "styled-components";
import { GiHamburgerMenu } from 'react-icons/gi';

export const ContainerNavbar = styled.div`
    margin-bottom: 0;
    background: var(--backgroundMenu);
    max-height: 80px;
    overflow: hidden;
    position: sticky;
    z-index: 1000;
    top: 0;

    &.active{
        max-height: 1000px;
        transition: max-height 0.5s ease-in-out;
    }

    &.hidden{
        max-height: 80px;
        transition: max-height 0.5s ease-in-out;
    }

    @media screen and (min-width: 1024px){
        height: 100vh;
        display: flex;
        flex-direction: column;
        margin-bottom: 0;

        &.hidden{
            max-height: 100%;
        }
    }
`;

export const ContainerTitle = styled.div`
    width: 100%;
    height: 80px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const TitleNav = styled.h1`
    font-size: 1.5rem;
`;

export const IconMenu = styled(GiHamburgerMenu)`
    font-size: 2rem;
    cursor: pointer;

    @media screen and (min-width: 1024px){
        display: none;
    }

`;


export const MainNavbar = styled.nav`
    width: 100%;
    height: 0;
    display: none;
    transition: height 1s ease;

    &.active{
        display: block;
        height: auto;
    }

`;

export const UlNav = styled.ul`
    list-style-type: none;
`;