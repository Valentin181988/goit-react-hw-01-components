import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

export const FriendEl = styled.li`
   list-style: none;   
`;

export const AvatarImg = styled.img`
   src: ${props => props.src};
   alt: "User avatar";
   width: 50px;
`;

export const Status = styled.span`
   display: inline-block;
   border-radius: 10px;
   width: 20px;
   height: 20px;

   background-color: ${props => props.isOnline ? theme.colors.green : theme.colors.red}
`;

export const Name = styled.p`
   text-transform: uppercase;
`;