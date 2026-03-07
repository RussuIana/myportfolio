import styled from "styled-components";
// import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {ContactBlock} from "./contactBlock/ContactBlock.tsx";
import {Container} from "../../components/Container.ts";
import {theme} from "../../styles/Theme.ts";
import {SocialIconsFooter} from "../../components/socialMedia/SocialIconsFooter.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterWrapper>
                    <ContactBlock/>
                    <SocialIconsFooter/>
                </FooterWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

    background-color: ${theme.colors.primaryBg};
    width: 100%;
    padding: 42px 150px;
    //display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    @media ${theme.media.tablet} {
        padding: 42px 75px;
    }
    @media ${theme.media.mobile} {
        padding: 30px 15px;
    }
`
const FooterWrapper = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;

    @media ${theme.media.tablet} {
        flex-direction: column;
    }

    @media ${theme.media.mobile} {
        flex-direction: column;
    }
`