import { useState, createContext } from "react";

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(false);


    const handleTheme = () => {
        setTheme(!theme);
    }


    const data = {
        theme,
        handleTheme
    }

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>

}


export {
    ThemeContext as default,
    ThemeProvider
}