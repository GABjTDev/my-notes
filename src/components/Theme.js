import { ThemeBar, Circle, Sun, Moon } from "./elements/ThemeElements";
import ThemeContext from '../context/ThemeContext';
import { useContext } from "react";

const Theme = () => {

    const { theme, handleTheme } = useContext(ThemeContext);

    return (
        <ThemeBar onClick={handleTheme}>
            <Circle theme={theme}>
                {
                    (theme) ?
                        <Sun />
                        :
                        <Moon />
                }

            </Circle>
        </ThemeBar>
    )
}

export default Theme
