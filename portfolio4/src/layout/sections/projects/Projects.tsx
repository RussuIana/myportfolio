import styled from "styled-components";
import {Project} from "./project/Project.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx"
import img2 from '../../../assets/images/images2.webp'
import img3 from '../../../assets/images/images3.webp'
import img4 from '../../../assets/images/images4.webp'
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Projects = () => {
    return (


        <StyledProjects>
            <Container>
            <SectionTitle>Projects</SectionTitle>

                <ProjectsContainer>

                    <Project
                        src={img2}
                        title={"PROJECT 1"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Project
                        src={img2}
                        title={"PROJECT 2"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Project
                        src={img3}
                        title={"PROJECT 3"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Project
                        src={img4}
                        title={"PROJECT 4"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                </ProjectsContainer>

            </Container>

        </StyledProjects>
    );
};

const StyledProjects = styled.section`
   
  padding-bottom:  140px ;

    @media ${theme.media.mobile} {
        padding-bottom:  70px ;


    }

`
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
    gap: 60px 40px;
  justify-content: center;

    @media ${theme.media.mobile} {
        gap: 30px ;

    }
`;