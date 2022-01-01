import PropTypes from 'prop-types';
import { FriendEl, Name, AvatarImg, Status } from './FriendsItem.styled';

export const FriendsItem = ({friend:{id, avatar, name, isOnline }}) => {
    return(
        <FriendEl>
            <Status isOnline={isOnline}></Status>
            <AvatarImg src={avatar}/>
            <Name>{name}</Name>
        </FriendEl>
    );
}

FriendsItem.propTypes = {
    friend: PropTypes.shape({
       id: PropTypes.number,
       avatar: PropTypes.string,
       name: PropTypes.string,
       isOnline: PropTypes.bool,
   })
}