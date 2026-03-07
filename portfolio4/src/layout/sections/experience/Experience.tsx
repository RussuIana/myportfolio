import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.ts";
import {ExperienceBlock} from"./experienceBlock/ExperienceBlock.tsx"
import {theme} from "../../../styles/Theme.ts";



export const Experience = () => {
    return (
        <StyledExperience >

            <Container>
                <SectionTitle>Experience</SectionTitle>
                    <ExperienceBlock/>
            </Container>

        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 140px;

    @media ${theme.media.mobile} {
        padding-bottom: 100px;
    }


`

