
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {theme} from "../../styles/Theme.ts";


export const Logo = () => {
    return (
        <LogoLink href="/">
            <Icon iconId={'logo'}/> Portfolio
        </LogoLink>


    );
};

const LogoLink = styled.a`
    display: flex;
    align-items: center;
    color: ${theme.colors.font};
    width: 184px;
    height: 47px;
    font-weight: 500;
    font-size: 30px;
   gap: 13px;

   
`;