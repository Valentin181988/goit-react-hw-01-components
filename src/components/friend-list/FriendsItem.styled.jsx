import styled from '@emotion/styled';

export const FriendEl = styled.li`
   list-style: none;
`;

export const AvatarImg = styled.img`
   src: ${props => props.src};
   alt: "User avatar";
   width: 50px;
`;

export const Status = styled.span`
   width: 10px;
`;

export const Name = styled.p`
   text-transform: uppercase;
`;