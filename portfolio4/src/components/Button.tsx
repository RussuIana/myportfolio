import styled from "styled-components";
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

export const Button = styled.a`
    display:inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 83px;
    width: 240px;
    height: 60px;
    color: ${theme.colors.font};
    background-image: ${theme.colors.colorBtn};
    flex-grow: 1;
    
     //${font({weight: 600, Fmax: 20,Fmin:18 })} 

    font-weight: 500;
    font-size: 20px;

    @media ${theme.media.mobile} {
        font-weight: 500;
        font-size: 18px;
        width: 295px;
    }
    `