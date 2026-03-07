import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


export const SocialIconsFooter = () => {
    return (
        <StyledSocialIconsFooter>

            <StyledIconItem><Link href="#"><Icon iconId={'vector1'}/></Link></StyledIconItem>
            <StyledIconItem><Link href="#"><Icon iconId={'union'}/></Link></StyledIconItem>
            <StyledIconItem><Link href="#"><Icon iconId={'telegram'}/></Link></StyledIconItem>

        </StyledSocialIconsFooter>


    );

};

const StyledSocialIconsFooter = styled.ul`
    display: flex;
    padding: 20px 0 0 0;
    position: relative;
    gap: 16px;
    align-items: center;

    @media ${theme.media.mobile} {
        justify-content: center;
        width: 100%;
    }
`
const StyledIconItem = styled.li`
    
`
const Link =styled.a`
    
`