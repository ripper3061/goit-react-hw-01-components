import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 25px;
  background-color: #ffffff;
  border-radius: 5px;
  width: 320px;
  box-shadow: 0px 1px 5px 3px rgba(135, 132, 132, 0.98);
  -webkit-box-shadow: 0px 1px 5px 3px rgba(135, 132, 132, 0.98);
  -moz-box-shadow: 0px 1px 5px 3px rgba(135, 132, 132, 0.98);
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
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
  list-style-type: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  border: 1px solid #d7d7d7;
  width: 33.33%;
  background-color: #f4f4f4;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #9a9a9a;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
