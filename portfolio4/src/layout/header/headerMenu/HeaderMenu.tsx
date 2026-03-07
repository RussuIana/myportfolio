import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="#">
                                {item}
                            </Link>
                        </ListItem>)
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`


    ul {
        display: flex;
        gap: 30px;

    }

    @media ${theme.media.tablet} {
        display: none;
    }
`

const Link = styled.a`
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: ${theme.colors.font};
    position: relative;
    display: inline-block;
    transition: all 0.3s ease;

    &:hover {
        background-image: ${theme.colors.colorBtn};
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
`


const ListItem = styled.li`

`