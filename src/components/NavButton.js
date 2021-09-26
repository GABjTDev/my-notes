import getData from "../services/getData";
import { LiNav, List, ListOption, IconHome, IconHtml, IconCss, IconJs, IconSass, IconTs, IconReact, IconGithub, LinkClick, LinkNoActive } from "./elements/NavButtonElements";

const GetIcon = (icon) => {

    const icons = {
        html: <IconHtml />,
        css: <IconCss />,
        javascript: <IconJs />,
        typescript: <IconTs />,
        sass: <IconSass />,
        react: <IconReact />,
        github: <IconGithub />
    }

    return icons[icon]
}


const NavButton = ({ title }) => {

    const data = title !== "inicio" ? getData(title).map(el => el.title) : '';

    return (
        <>
            {
                title === 'inicio' ?
                    <LiNav><LinkNoActive to="/" home="true" >{title.toUpperCase()}<IconHome /></LinkNoActive></LiNav>
                    :
                    <LiNav>
                        <LinkClick to={`/${title}`} tech={title} activeClassName="active">{title.toUpperCase()}{GetIcon(title)}</LinkClick>
                        {
                            <List>
                                {
                                    data.map((el, i) => {
                                        return <ListOption key={`button-${i}`} href={`#${el}`}> {el}</ListOption>
                                    })
                                }
                            </List>
                        }
                    </LiNav>
            }
        </>
    )
}

export default NavButton
