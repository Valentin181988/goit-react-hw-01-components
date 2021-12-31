import { Container } from './App.styled';
import { SocialProfile } from './components/social-profile/SocialProfile';
import { Statistics } from './components/statistics/StatisticsSection';
import { FriendsList } from './components/friend-list/FriendsList';
import user from './components/social-profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/friend-list/friends.json';

export const App = () => {
  return (
    <Container>
      <SocialProfile user={user}/>
      <Statistics title="Upload stats" stats={data}/>
      <FriendsList friends={friends}/>
    </Container>
  );
}

