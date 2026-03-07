import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


export const SocialIconsHeader = () => {
    return (
        <StyledSocialIconsHeader>

            <StyledIconItem><Link href="#"><Icon iconId={'vector1'}/></Link></StyledIconItem>
            <StyledIconItem><Link href="#"><Icon iconId={'union'}/></Link></StyledIconItem>
            <StyledIconItem><Link href="#"><Icon iconId={'telegram'}/></Link></StyledIconItem>

        </StyledSocialIconsHeader>


    );

};

const StyledSocialIconsHeader = styled.ul`
    display: flex;
    padding: 20px 0 0 0;
    position: relative;


    @media ${theme.media.tablet} {
        display: none;
    }
    
}
   
`

const StyledIconItem = styled.li`
    
`
const Link =styled.a`
    
`