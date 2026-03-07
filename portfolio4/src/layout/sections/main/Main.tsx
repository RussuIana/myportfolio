import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'
import {Container} from "../../../components/Container.ts";
import {Button} from "../../../components/Button.tsx";
import photo1 from '../../../assets/sprite/drawing.svg'
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";


export const Main = () => {
    return (

        <StyledMain>
            <Container>
                <FlexMain>
                    <MainText>
                        <MainTitle>Lorem ipsum dolor amet</MainTitle>
                        <InfoText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </InfoText>
                        <Button href={"#"}> Let’s Begin</Button>
                    </MainText>

                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexMain>
            </Container>
        </StyledMain>


    );
};


const StyledMain = styled.section`

    min-height: 100vh;
    display: flex;

    @media ${theme.media.mobile} {
        width: 100%;
        height: 100%;
        min-height: 855px;

    }

`
const FlexMain = styled.div`
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    display: flex;
    height: 100%;
    flex-grow: 1;
    
        @media ${theme.media.tablet} {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;

    }
    @media ${theme.media.mobile} {
        flex-direction: column-reverse;
        max-height: 855px;
        justify-content: center;
        align-items: stretch;
    }
`

const MainText = styled.div`
    text-align: left;
    max-width: 673px;
    
    @media ${theme.media.tablet} {
        text-align: center;

    }

    @media ${theme.media.mobile} {
        max-width: 345px;
        width: 100%;
        height: 305px;

    }
`
const MainTitle = styled.h1`
        // ${font({weight: 600, Fmax: 54, Fmin: 34})}
    max-width: 673px;
    font-weight: 600;
    font-size: 54px;


    @media ${theme.media.mobile} {
        font-weight: 600;
        font-size: 34px;
    }
`
const InfoText = styled.p`

    ${font({weight: 500, Fmax: 18, Fmin: 16})}
    color: #bcbcbc;
    margin: 15px 0 60px 0;
    font-weight: 500;
    font-size: 18px;
    max-width: 482px;
    
    @media ${theme.media.tablet} {
        margin: 25px 0 40px 40px;
        font-weight: 500;
        font-size: 16px;
    }

    @media ${theme.media.mobile} {
        margin: 25px 0 40px 0;
        font-weight: 500;
        font-size: 16px;
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;


    @media ${theme.media.mobile} {
        width: 100%;
        display: flex;
        justify-content: center;

    }

    &::before {
        content: "";
        width: 546px;
        height: 666px;
        background-size: contain;
        background-image: url(${photo1});
        background-repeat: no-repeat;
        top: 80px;
        left: -10px;
        opacity: 0.5;
        z-index: 1;
        position: absolute;


        @media ${theme.media.mobile} {
            width: 284px;
            height: 514px;
            top: 30px;
            left: 20px;
        }

    }

`

const Photo = styled.img`
    width: 100%;
    max-width: 380px;
    max-height: 450px;
    object-fit: cover;
    border-radius: 50px 0;


    position: relative;
    z-index: 1;


    @media ${theme.media.mobile} {
        max-width: 335px;
        max-height: 400px;
        margin: 30px 5px 50px 5px;

    }


`