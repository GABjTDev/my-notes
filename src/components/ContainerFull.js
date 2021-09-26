import { BrowserRouter as Router } from "react-router-dom";

//Components
import Navbar from "./Navbar";

//Routes
import Routes from "../routes/Routes";
import { Container, ThemeColor } from "./elements/AppElements";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

const ContainerFull = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <ThemeColor theme={theme}>
            <Container>
                <Router>
                    <Navbar />
                    <Routes />
                </Router>
            </Container>
        </ThemeColor>
    )
}

export default ContainerFull
