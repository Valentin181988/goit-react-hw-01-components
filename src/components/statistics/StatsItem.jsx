import { StatsInfo, StatsInfoWrapper } from './StatsItem.styled'

export const StatsItem = ({statsData: {label, percentage}}) => {
    return (
        <StatsInfoWrapper>
           <StatsInfo>{label}</StatsInfo>
           <br/><StatsInfo>{percentage}</StatsInfo>
        </StatsInfoWrapper>
    );
};