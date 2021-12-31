
import { FriendEl, Name, AvatarImg, Status } from './FriendsItem.styled';

export const FriendsItem = ({friend:{avatar, name, isOnline }}) => {
    return(
        <FriendEl>
            <Status>{isOnline}</Status>
            <AvatarImg src={avatar}/>
            <Name>{name}</Name>
        </FriendEl>
    );
}