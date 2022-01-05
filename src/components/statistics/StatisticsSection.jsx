import { StatsSection, Title, StatsContainer } from "./StatisticsSection.styled";
import { StatsItem } from './StatsItem'

export const Statistics = (props) => {
    const title = props.title ? (<Title>{props.title}</Title>) : '';
    return(
        <StatsSection>
            {title}
        
            <StatsContainer>
               {props.stats.map(statsData => (
                  <StatsItem key={statsData.id} statsData={statsData}/>
               ))}
            </StatsContainer>
        </StatsSection>
    );
};