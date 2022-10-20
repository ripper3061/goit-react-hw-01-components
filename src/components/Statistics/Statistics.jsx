import PropTypes from 'prop-types';
import {
  StatisticsCase,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

import { getRandomHexColor } from '../utils/utils';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCase>
      {title && <Title>Upload stats</Title>}

      <StatList>
        {stats.map(stat => (
          <Item key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsCase>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
