import styled from '@emotion/styled';

export const FriendListCase = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 0;
  width: 320px;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 290px;
  padding: 10px;
  padding-left: 20px;

  box-shadow: 0px 0px 12px 3px rgba(203, 203, 203, 0.98);
`;
export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 15px;

  background-color: ${props => {
    if (props.isOnline) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const UserAvatar = styled.img`
  margin-right: 15px;
`;
export const Name = styled.p`
  font-weight: 700;
`;
// style={{ backgroundColor: getRandomHexColor() }}
