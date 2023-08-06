import {
  ListStats,
  ListItem,
  Container,
  Avatar,
  H2,
  Thumb,
  ListInfo,
} from './Profile.styled';

function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Container>
      <div>
        <Thumb>
          <Avatar src={avatar} alt="User avatar" />
        </Thumb>
        <ListInfo>
          <li>
            <H2 class="name">{username}</H2>
          </li>
          <li>
            <p class="tag">@{tag}</p>
          </li>
          <li>
            <p class="location">{location}</p>
          </li>
        </ListInfo>
      </div>

      <ListStats>
        <ListItem>
          <span class="label">Followers </span>
          <span class="quantity">{followers}</span>
        </ListItem>
        <ListItem>
          <span class="label">Views </span>
          <span class="quantity">{views}</span>
        </ListItem>
        <ListItem>
          <span class="label">Likes </span>
          <span class="quantity">{likes}</span>
        </ListItem>
      </ListStats>
    </Container>
  );
}

export default Profile;
