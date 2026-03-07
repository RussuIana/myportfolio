import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">About me</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    
    display: flex;
    align-items: center;
    gap: 30px;
   

    ul {
        display: flex;      
        gap: 30px;
        color: ${theme.colors.font};
    }
   
`