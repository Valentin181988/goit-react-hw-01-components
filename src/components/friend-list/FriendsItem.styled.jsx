import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

export const FriendEl = styled.li`
   list-style: none; 
   display: flex;
   align-items: center;
   padding: ${theme.spacing(1)};
   box-shadow: 0 0 10px 5px ${theme.colors.shadow};

   &: not(:last-child) {
      margin: 0 0 15px 0;
   };
`;

export const AvatarImg = styled.img`
   src: ${props => props.src};
   alt: "User avatar";
   width: 50px;
   margin: 0 10px 0 0;
`;

export const Status = styled.span`
   display: inline-block;
   border-radius: 10px;
   width: 20px;
   height: 20px;
   margin: 0 10px 0 0;

   background-color: ${props => props.isOnline ? theme.colors.green : theme.colors.red}
`;

export const Name = styled.p`
   text-transform: uppercase;
`;