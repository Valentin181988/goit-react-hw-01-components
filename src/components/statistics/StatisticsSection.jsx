import { StatsSection, Title, StatsContainer } from "./StatisticsSection.styled";
import { StatsItem } from './StatsItem'

export const Statistics = (props) => {
    return(
        <StatsSection>
            <Title>{props.title}</Title>
        
            <StatsContainer>
               {props.stats.map(statsData => (
                  <StatsItem key={statsData.id} statsData={statsData}/>
               ))}
            </StatsContainer>
        </StatsSection>
    );
};