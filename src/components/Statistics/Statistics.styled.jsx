import styled from '@emotion/styled';

export const StatisticsCase = styled.section`
  margin: 10px auto;
  background-color: #ffffff;
  border-radius: 5px;
  width: 320px;
  box-shadow: 0px 1px 5px 3px rgba(203, 203, 203, 0.98);
`;
export const Title = styled.h2`
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  padding: 5px;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 65px;
  font-weight: 500;
`;
export const Label = styled.span`
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  font-size: 20px;
`;
