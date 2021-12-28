import { Card, Info, Wrapper, UserImg, StatsList, StatsItem, StatsInfo } from './SocialProfile.styled'
import { theme } from '../../constants/Theme';


export const SocialProfile = ({user}) => {
   return(
    <Card>
        <Wrapper>
            <UserImg src={user.avatar}/>
                <Info>
                  {user.username} 
                </Info>
                <Info>
                  {user.tag} 
                </Info>
                <Info>
                  {user.location} 
                </Info>
        </Wrapper>
  
        <StatsList>
            <StatsItem>
                <StatsInfo>Followers</StatsInfo>
                <StatsInfo>{user.stats.followers}</StatsInfo>
            </StatsItem>
            <StatsItem>
                <StatsInfo>Views</StatsInfo>
                <StatsInfo>{user.stats.views}</StatsInfo>
            </StatsItem>
            <StatsItem>
                <StatsInfo>Likes</StatsInfo>
                <StatsInfo>{user.stats.likes}</StatsInfo>
            </StatsItem>
        </StatsList>
  </Card>
   );
};

