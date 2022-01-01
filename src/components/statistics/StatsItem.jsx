import PropTypes from 'prop-types';
import { StatsInfo, StatsInfoWrapper } from './StatsItem.styled'

export const StatsItem = ({statsData: {id, label, percentage}}) => {
    return (
        <StatsInfoWrapper>
           <StatsInfo>{label}</StatsInfo>
           <br/><StatsInfo>{percentage}</StatsInfo>
        </StatsInfoWrapper>
    );
};

StatsItem.propTypes = {
    statsData: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })
}