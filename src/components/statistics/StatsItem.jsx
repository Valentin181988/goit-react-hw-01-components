import PropTypes from 'prop-types';
import { StatsInfo, 
         StatsInfoWrapper, 
         StatsInfoValue  } from './StatsItem.styled';

export const StatsItem = ({statsData: {id, label, percentage}}) => {
    return (
        <StatsInfoWrapper>
           <StatsInfo>{label}</StatsInfo>
           <br/><StatsInfoValue >{percentage}</StatsInfoValue >
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