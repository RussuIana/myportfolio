import styled from "styled-components";
import {SocialIconsHeader} from "../../components/socialMedia/SocialIconsHeader.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";

const items = ["Projects", "Technologies", "Experience"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <SocialIconsHeader/>
                </FlexWrapper>

            </Container>

        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    background-color: rgba(15, 22, 36, 0.8);
    padding: 26px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
    
  
  
`
