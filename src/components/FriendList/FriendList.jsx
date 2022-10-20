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
