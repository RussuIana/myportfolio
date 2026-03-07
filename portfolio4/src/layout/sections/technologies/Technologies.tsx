import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SkillsIcon} from "../../../components/socialMedia/AddSkillsIcon.tsx";
import {Container} from "../../../components/Container.ts";
import {TechnologyItem} from "./technology/Technology.tsx";
import {theme} from "../../../styles/Theme.ts";


type TechnologiesItemProps = {
    title: string;
    gradient: string;
    percentage: number;
}

const tehElement: TechnologiesItemProps[] = [
    {title: "Html", gradient: theme.colors.colorLine, percentage: 80},
    {title: "Css, Sass", gradient: "linear-gradient(to right, #2965f1, #264de4)", percentage: 70},
    {title: "React", gradient: "linear-gradient(to right, #61dafb, #21a1f1)", percentage: 50},
    {title: "Styled components", gradient: "linear-gradient(to right, #db7093, #c71585)", percentage: 70},
];
export const Technologies = () => {
    return (
        <StyledTechnologies>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>

                    <TechnologyContent>
                        {tehElement.map((item, index) => (

                            <TechnologyItem
                                key={index}
                                title={item.title}
                                gradient={item.gradient}
                                percentage={item.percentage}/>

                        ))}
                    </TechnologyContent>

                    <AddTitle>Additional technologies and skills</AddTitle>
                    <SkillsIcon/>
                </FlexWrapper>

            </Container>

        </StyledTechnologies>
    );
};

const StyledTechnologies = styled.section`
    padding-bottom: 170px;
    @media ${theme.media.mobile} {
        padding-bottom: 110px;
    }


`
const TechnologyContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    max-width: 900px;
    width: 100%;
    height: 300px;
    gap: 27px;
`


const AddTitle = styled.h3`
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 120px 0 70px 0;
    font-weight: 600;
    font-size: 44px;

    @media ${theme.media.mobile} {
        font-size: 27px;
    }

`
