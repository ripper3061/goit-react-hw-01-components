import { Profile } from './Profile/Profile';
import user from './data/user.json';
import { Statistics } from './Statistics/Statistics';
import statistics from './data/data.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={statistics} />
    </div>
  );
};
