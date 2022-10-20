import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin: 20px auto;
  border-spacing: 0;
`;
export const TableHead = styled.thead`
  background-color: #0097a5;
  font-weight: 500;
`;
export const TableString = styled.tr`
  width: 150px;
  height: 30px;
  text-align: center;
  border: 1px solid rgb(50, 50, 50);

  :nth-of-type(2n) {
    background-color: rgb(225, 224, 223);
  }
`;
export const TableHeader = styled.th`
  width: 140px;
  height: 30px;
  text-align: center;
  border: 1px solid rgb(50, 50, 50);
  text-transform: capitalize;
  font-weight: 100;
`;
export const TableBody = styled.tbody``;
