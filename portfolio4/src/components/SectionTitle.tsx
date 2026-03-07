import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const SectionTitle=styled.h2`
    font-family: "Poppins",sans-serif;
    font-weight: 600;
    font-size: 46px;
    padding:100px 0 70px 0;

    @media ${theme.media.mobile} {
        font-size: 32px;
        padding:70px 0 30px 0;
    }
`