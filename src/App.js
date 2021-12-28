import { Container } from './App.styled';
import { SocialProfile } from './components/social-profile/SocialProfile';
import user from './components/social-profile/user.json';

export const App = () => {
  return (
    <Container>
      <SocialProfile user={user}/>
    </Container>
  );
}

