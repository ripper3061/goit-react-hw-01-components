import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 10px auto;
  background-color: #ffffff;
  border-radius: 5px;
  width: 320px;
  box-shadow: 0px 1px 5px 3px rgba(203, 203, 203, 0.98);
`;

export const Description = styled.div`
  padding: 30px;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: antiquewhite;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const Tag = styled.p`
  color: #767676;
`;

export const Location = styled.p`
  color: #767676;
`;

export const Stats = styled.ul`
  background-color: #f4f4f4;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 25px;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #9a9a9a;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
