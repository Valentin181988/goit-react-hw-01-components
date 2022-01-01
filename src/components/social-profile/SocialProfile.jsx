import PropTypes from 'prop-types';
import { Card, Info, Wrapper, UserImg, StatsList, StatsItem, StatsInfo } from './SocialProfile.styled'
import { theme } from '../../constants/Theme';


export const SocialProfile = ({user: {avatar, username, tag, location, stats}}) => {
   return(
    <Card>
        <Wrapper>
            <UserImg src={avatar}/>
                <Info>
                  {username} 
                </Info>
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
                <StatsInfo>{stats.followers}</StatsInfo>
            </StatsItem>
            <StatsItem>
                <StatsInfo>Views</StatsInfo>
                <StatsInfo>{stats.views}</StatsInfo>
            </StatsItem>
            <StatsItem>
                <StatsInfo>Likes</StatsInfo>
                <StatsInfo>{stats.likes}</StatsInfo>
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