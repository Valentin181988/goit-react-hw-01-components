import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

export const FriendsWrapper = styled.div`
   outline: 1px solid ${theme.colors.whiteGray};
   width: 200px;
   padding: ${theme.spacing(2)};
   margin: 0 0 25px 0;
`;

export const FriendList = styled.ul`
   display: block;
   padding: 0;
   margin: 0;
`;