import PropTypes from 'prop-types';
import { Card,
          Info, 
          Wrapper, 
          UserImg, 
          StatsList, 
          StatsItem, 
          StatsInfo, 
          InfoName, 
          StatsInfoValue } from './SocialProfile.styled';

export const SocialProfile = ({user: {avatar, username, tag, location, stats}}) => {
   return(
    <Card>
        <Wrapper>
            <UserImg src={avatar}/>
                <InfoName>
                  {username} 
                </InfoName>
                <Info>
                  {tag} 
                </Info>
                <Info>
                  {location} 
                </Info>
        </Wrapper>
  
        <StatsList>
            <StatsItem>
                <StatsInfo>Followers</StatsInfo>
                <StatsInfoValue>{stats.followers}</StatsInfoValue>
            </StatsItem>
            <StatsItem>
                <StatsInfo>Views</StatsInfo>
                <StatsInfoValue>{stats.views}</StatsInfoValue>
            </StatsItem>
            <StatsItem>
                <StatsInfo>Likes</StatsInfo>
                < br/><StatsInfoValue>{stats.likes}</StatsInfoValue>
            </StatsItem>
        </StatsList>
  </Card>
   );
};

SocialProfile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object,
  })
}