import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const SkillsIcon = () => {
    return (


        <AddSkillsIcon>
            <StyledAddSkillsIcon><Icon   viewBox={" 0 0 100 100"} iconId={'git'}/></StyledAddSkillsIcon>
            <StyledAddSkillsIcon><Icon   viewBox={" 0 0 100 100"} iconId={'vector'}/></StyledAddSkillsIcon>
            <StyledAddSkillsIcon><Icon   viewBox={" 0 0 100 100"} iconId={'figma'}/></StyledAddSkillsIcon>
        </AddSkillsIcon>


    );

};

const AddSkillsIcon = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap; // Important pentru mobil!

    @media ${theme.media.mobile} {
        width: 100%;
        gap: 20px;
        padding: 0;
        margin: 0 auto;
    }
`

const StyledAddSkillsIcon = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 100px;
        height: 100px;

        @media ${theme.media.mobile} {
            width: 60px;
            height: 60px;
        }
    }
`