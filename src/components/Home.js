import { MainContainer, MainTitle, MainSubTitle, MainParagraph, MainPadding, MainMargin } from './elements/MainElements';

const Home = () => {
    return (
        <MainContainer>
            <MainTitle home>INICIO</MainTitle>
            <MainPadding>
                <MainMargin>
                    <MainSubTitle>Introducion</MainSubTitle>
                    <MainParagraph>
                        Bienvenidos a mí pequeño proyecto personal de estudios creada completamente por mí usando la librería REACT
                        Actualmente me encuentro aprendiendo de forma autodidacta. Siempre me enfoque en el área del frontend planeo algún día ir aprendiendo backend pero siempre seré fanático del frontend, darle vida a los diseños es algo que me apasiona, divierte y motiva a seguir aprendiendo.
                    </MainParagraph>
                </MainMargin>

                <MainMargin>
                    <MainSubTitle>Motivo</MainSubTitle>
                    <MainParagraph>
                        Pensé este proyecto mientras estudiaba y como no soy de tomar apuntes siempre creaba archivos que se fueron mezclando o perdiendo con el tiempo, en ese momento sentía que estaba siendo muy desordenado por mi manera de estudiar y quería empezar a tener más control sobre lo que iba aprendiendo entonces se me ocurrió crear unos apuntes propios de puro texto para luego ir a investigar si necesita algo.
                    </MainParagraph>
                </MainMargin>

                <MainParagraph>Espero que les sea de su agrado y cualquier consulta o error que encuentren pueden avisarme.</MainParagraph>
            </MainPadding>
        </MainContainer>
    )
}

export default Home
