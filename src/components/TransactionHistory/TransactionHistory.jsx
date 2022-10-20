import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableHead,
  TableBody,
  TableString,
  TableHeader,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TableHead>
        <TableString>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableString>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <TableString key={item.id}>
            <TableHeader>{item.type}</TableHeader>
            <TableHeader>{item.amount}</TableHeader>
            <TableHeader>{item.currency}</TableHeader>
          </TableString>
        ))}
      </TableBody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
