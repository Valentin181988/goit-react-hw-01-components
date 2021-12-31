import { StatisticWrapper } from './StatisticWrapper.styled';
import { StatisticItem } from './StatisticItem';

export const Statistics = ({data}) => {
    return(
        <StatisticWrapper>
           {data.map(statsItem => (
                <StatisticItem key={statsItem.id} statsItem={statsItem} />
            ))}
        </StatisticWrapper>
    );
}