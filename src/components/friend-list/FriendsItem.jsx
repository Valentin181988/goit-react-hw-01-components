
import { FriendEl, Name } from './FriendsItem.styled';

export const FriendsItem = ({friend:{avatar, name, isOnline }}) => {
    return(
        <FriendEl>
            <span>{isOnline}</span>
            <img src="" alt="User avatar"/>
            <Name>{name}</Name>
        </FriendEl>
    );
}