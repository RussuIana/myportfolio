import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";


export const ExperienceBlock = () => {
    return (
        <StyledExperienceContainer>
            <Line/>
            <ExperienceContent>
                <Year>2017</Year>
                <ExperienceText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t
                    ut labore et
                    dolore magna aliqua.</ExperienceText>
            </ExperienceContent>

            <ExperienceContent>
                <Year>2019</Year>
                <ExperienceText>Lorem dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut
                    labore et dolore
                    magna adipiscin</ExperienceText>
            </ExperienceContent>

            <ExperienceContent>
                <Year>2021</Year>
                <ExperienceText>Lorem ipsum dolor met, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut et dolore
                    magna aliqua.</ExperienceText>
            </ExperienceContent>

            <ExperienceContent>
                <Year>2023</Year>
                <ExperienceText>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et
                    dolore magna aliqua.</ExperienceText>
            </ExperienceContent>
        </StyledExperienceContainer>

    );

};


const StyledExperienceContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 1142px;
    width: 100%;
    gap: 34px;


    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items:flex-start;
        gap: 40px;
    }


    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items:flex-start;
        gap: 37px;
    }
    

`
const ExperienceContent = styled.div`
    text-align: center;
    max-width: 100%;
`

const Year = styled.span`
    font-weight: 600;
    font-size: 26px;

    position: relative;
    
    @media ${theme.media.tablet} {
        margin-left: -175px;
    }
    @media ${theme.media.mobile} {
        margin-left: -170px;
    }

    &::after {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.font};
        width: 25px;
        height: 25px;
        border-radius: 50%;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);

        position: absolute;
        z-index: 1;

        @media ${theme.media.tablet} {
            left: -40px; 
            bottom: 5px;
            transform: none; 
        }
        @media ${theme.media.mobile} {
            left: -40px; 
            bottom: 5px;
            transform: none; 
        }
    }
    
   
`
const Line = styled.div`
    border-radius: 83px;
    max-width: 880px;
    top: 49px;
    height: 8px;
    background: ${theme.colors.colorLine};
    bottom: -25px;
    left: 130px;
    right: 0;

    position: absolute;
    z-index: 0;


    @media ${theme.media.tablet} {

        width: 100%;
        height: 7px;
        left: -435px;
        top: 462px;
        transform: rotate(-90deg);
    }
    @media ${theme.media.mobile} {

        width: 100%;
        height: 7px;
        left: -430px;
        top: 457px;
        transform: rotate(-90deg);
    }
  

`
const ExperienceText = styled.p`
    width: 260px;
    height: 135px;
    font-weight: 500;
    font-size: 18px;
    margin-top: 45px;
    position: relative;

    @media ${theme.media.tablet} {
        font-size: 16px;
        text-align: left;
        margin-left: 38px;
    } 
    @media ${theme.media.mobile} {
        font-size: 16px;
        text-align: left;
        margin-left: 38px;
    }
    
`