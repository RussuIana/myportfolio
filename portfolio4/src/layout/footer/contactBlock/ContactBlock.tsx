import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";



export const ContactBlock = () => {
    return (
        <StyledContactBlock>
            <InfoBlock>
                <PhoneText>Call me:</PhoneText>
                <PhoneNumber href="tel:123456789">123-456-789</PhoneNumber>
            </InfoBlock>
            <InfoBlock>
                <EmailText>Email: </EmailText>
                <EmailAdress href="mailto:xxx@xyz.com">xxx@xyz.com</EmailAdress>
            </InfoBlock>

        </StyledContactBlock>
    );
};

const StyledContactBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:170px;
    font-weight: 600;
    font-size: 22px;
    
    @media ${theme.media.tablet}   {
        gap:139px;
    }
    

    @media ${theme.media.mobile}   {
        font-size: 18px;
        gap:79px;
    }
    
`
const InfoBlock = styled.div`
    white-space: nowrap;
    
`
const PhoneText = styled.p`
   text-align:left;
    display: block;
    
`
const PhoneNumber = styled.a`
    display: block;
     
`

const EmailText = styled.p`
    display: block;
    text-align:left;

   
`
const EmailAdress = styled.a`
  
`