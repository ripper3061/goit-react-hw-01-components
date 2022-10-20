import PropTypes from 'prop-types';
import {
  FriendListCase,
  Item,
  UserAvatar,
  Status,
  Name,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListCase>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status isOnline={friend.isOnline}>{friend.isOnline}</Status>
          <UserAvatar src={friend.avatar} alt={friend.name} width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </FriendListCase>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
