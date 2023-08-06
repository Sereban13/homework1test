import { FriendList, FriendItem } from './Friendlist.styled';
function Friendlist({ friends }) {
  return (
    <FriendList>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem key={id} isonline={isOnline}>
          <span></span>
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </FriendItem>
      ))}
    </FriendList>
  );
}

export default Friendlist;
