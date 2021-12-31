import { StatisticWrapper } from './Statistics.styled'

export const Statistics = () => {
    return(
        <StatisticWrapper>
           <h2>Upload stats</h2>
           <ul>
                <li>
                    <span>.docx</span>
                    <span>4%</span>
                </li>
                <li>
                    <span>.mp3</span>
                    <span>14%</span>
                </li>
                <li>
                    <span>.pdf</span>
                    <span>41%</span>
                </li>
                <li>
                    <span>.mp4</span>
                    <span>12%</span>
                </li>
            </ul>
        </StatisticWrapper>
    );
}