import { FriendsWrapper, FriendList } from './FriendsList.styled'
import { FriendsItem } from './FriendsItem';

export const FriendsList = ({friends}) => {
    return(
        <FriendsWrapper>
            <FriendList>
                {friends.map(friend => (
                   <FriendsItem key={friend.id} friend={friend}/>
                ))}
            </FriendList>
        </FriendsWrapper>
    );
}