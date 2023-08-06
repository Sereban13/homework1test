import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
`;

export const FriendItem = styled.li`
  border: 10px solid ${props => (props.isonline ? 'green' : 'red')};
  border-radius: 10px;
  margin: 10px;
`;
