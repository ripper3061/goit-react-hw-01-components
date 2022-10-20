import { Profile } from './Profile/Profile';
import user from './data/user.json';
import { Statistics } from './Statistics/Statistics';
import statistics from './data/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={statistics} />
    </div>
  );
};
