import {theme} from "../../../../styles/Theme.ts";
import styled from "styled-components";

type TechnologyItemProps = {
    title: string;
    gradient: string;
    percentage: number;
}


export const TechnologyItem = ({title, gradient, percentage}: TechnologyItemProps) => {

    return (
        <StyledTechnologyItem>

            <TehTitle>{title}</TehTitle>
            <Line>
                <LinePercent
                    percentage={percentage}
                    gradient={gradient}
                />
            </Line>
        </StyledTechnologyItem>
    );
};


const StyledTechnologyItem = styled.div`

`

const TehTitle = styled.h3`
    font-weight: 600;
    font-size: 24px;
    color: ${theme.colors.font};
    margin: 0 0 5px 25px;

@media ${theme.media.mobile} {
    font-size: 22px;
}
`
const Line = styled.div`
    border-radius: 83px;
    width: 100%;
    height: 18px;
    background: ${theme.colors.simpleLineColor};
`
const LinePercent = styled.div<{ percentage: number; gradient: string }>`
    height: 100%;
    width: ${({percentage}) => percentage}%;
    border-radius: 83px;
    background: ${theme.colors.colorLine};
    transition: width 0.3s ease;
    
`
