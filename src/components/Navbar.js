import { ContainerNavbar, TitleNav, MainNavbar, UlNav, IconMenu, ContainerTitle } from './elements/NabvarElements';
import NavButton from './NavButton';
import Theme from './Theme';
import { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const navElements = ["html", "css", "javascript", "typescript", "sass", "react", "github"];

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    const { theme } = useContext(ThemeContext);

    return (
        <ContainerNavbar className={showMenu ? 'active' : 'hidden'} theme={theme}>
            <ContainerTitle>
                <TitleNav>Guia de estudio</TitleNav>
                <IconMenu onClick={handleMenu} />
            </ContainerTitle>
            <MainNavbar className="active">
                <UlNav>
                    <NavButton title="inicio" />
                    {
                        navElements.map(el => {
                            return <NavButton key={`key-${el}`} title={el} />
                        })
                    }
                </UlNav>
            </MainNavbar>
            <Theme />
        </ContainerNavbar >
    )
}

export default Navbar
