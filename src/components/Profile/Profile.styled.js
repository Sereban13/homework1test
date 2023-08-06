import styled from 'styled-components';

export const ListStats = styled.ul`
  display: flex;
  justify-content: space-between;
  /* :not(:last-child) {
    border-right: 1px solid black;
  } */
  /* gap: 20px; */
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  background-color: gray;
  flex-grow: 1;
`;

export const Container = styled.div`
  border: 2px solid black;
  border-radius: 2px;
  margin: 10px;
  max-width: 450px;
  max-height: 1070px;
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-bottom: 20px;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: yellowgreen;
`;
export const Avatar = styled.img`
  width: 90%;
  height: 90%;
`;

export const H2 = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;
