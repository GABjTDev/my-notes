import { useParams } from "react-router";
import { MainContainer, MainTitle, MainSubTitle, MainParagraph, MainMargin, MainPadding, MainPre, MainImg } from './elements/MainElements';
import getData from "../services/getData";
import { useState, useEffect } from "react";

import { Redirect } from "react-router-dom";


const Main = () => {
    let { tech } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        let notes = getData(tech);
        setData(notes);
    }, [tech])

    return (
        <MainContainer>
            <MainTitle tech={tech}>{tech.toUpperCase()}</MainTitle>
            <MainPadding>
                {
                    data &&
                    data.map(el => {
                        return (
                            <MainMargin key={`${tech}-${el.id}`}>
                                {
                                    el.title &&
                                    <MainSubTitle id={el.title}>{el.title}</MainSubTitle>
                                }

                                {
                                    el.desc &&
                                    el.desc.map((c, index) => {
                                        return <MainParagraph key={`paragraph-${index}`}>{c}</MainParagraph>
                                    })
                                }

                                {
                                    el.code &&
                                    el.code.map((c, index) => {
                                        return <MainPre key={`code-${index}`}>{c}</MainPre>
                                    })
                                }

                                {
                                    el.subDesc &&
                                    el.subDesc.map((c, index) => {
                                        return <MainParagraph key={`subparagraph-${index}`}>{c}</MainParagraph>
                                    })
                                }

                                {
                                    el.img &&
                                    <MainImg src={el.img} />
                                }
                            </MainMargin>
                        )
                    })
                }

                {
                    !data &&
                    <Redirect to="/" />
                }

            </MainPadding>
        </MainContainer >
    )
}

export default Main
