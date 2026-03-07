import styled from "styled-components";
import {Button} from "../../../../components/Button.tsx";
import {theme} from "../../../../styles/Theme.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";


type ProjectPropsType = {
    src: string,
    title: string,
    text: string,
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction={"column"} align={"center"}>
                <ProjectImage src={props.src} alt=""/>
                < ProjectContent>
                    <ProjectTitle>{props.title}</ProjectTitle>
                    <ProjectText>{props.text}</ProjectText>
                    <Button href={"#"}>Look It Up</Button>
                </ProjectContent>
            </FlexWrapper>

        </StyledProject>
    );
};

const StyledProject = styled.div`
    width: 550px;
    border: 1px solid ${theme.colors.colorProjectBorder};
    border-radius: 50px 0;
    padding: 25px 25px 40px 25px;
    flex-grow: 1;

    @media ${theme.media.mobile} {
        
        width: 100%;
        padding: 25px ;
        
    }

`
const ProjectImage = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 24px 8px 8px 8px;
    margin-bottom: 40px;

    @media ${theme.media.mobile} {
       height: 220px;
       

    }
    
`


const ProjectContent = styled.div` 
    flex-direction: column;
    text-align:left;
    flex-grow: 1;
`
const ProjectTitle = styled.h3`
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 30px;
    line-height: 89%;
    
    position: relative;

    @media ${theme.media.mobile} {
        font-size: 24px; 
    }

    &::before {
        content: "";
        display: inline-block;
        width: 300px;
        height: 4px;
        border-radius: 83px;
        background: ${theme.colors.colorLine};
        bottom: -23px;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;

        @media ${theme.media.mobile} {
            width: 290px;
        }
    }
`

const ProjectText = styled.p`

    font-weight: 500;
    font-size: 18px;
    margin: 67px 0 50px 0;
    flex-grow: 1;

    @media ${theme.media.mobile} {
        font-size: 16px;
        text-align: center;
    }
`