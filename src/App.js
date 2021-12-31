import { Container } from './App.styled';
import { SocialProfile } from './components/social-profile/SocialProfile';
import { Statistics } from './components/statistics/Statistics';
import user from './components/social-profile/user.json';
import data from './components/statistics/data.json';

export const App = () => {
  return (
    <Container>
      <SocialProfile user={user}/>
      <Statistics stats={data}/>
    </Container>
  );
}

