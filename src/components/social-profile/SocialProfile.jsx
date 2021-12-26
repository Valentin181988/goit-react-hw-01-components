import { Card, Info, Wrapper, UserImg } from './SocialProfile.styled'
import { theme } from '../../constants/Theme';
import user from './user.json';

export const SocialProfile = (user) => {
   return(
    <Card>
        <Wrapper>
            <UserImg/>
                <Info>
                  {user.name} 
                </Info>
                <Info>
                  {user.tag} 
                </Info>
                <Info>
                  {user.location} 
                </Info>
        </Wrapper>
  
        <ul class="stats">
        <li>
            <span class="label">Followers</span>
            <span class="quantity">1000</span>
        </li>
        <li>
            <span class="label">Views</span>
            <span class="quantity">2000</span>
        </li>
        <li>
            <span class="label">Likes</span>
            <span class="quantity">3000</span>
        </li>
        </ul>
  </Card>
   );
};