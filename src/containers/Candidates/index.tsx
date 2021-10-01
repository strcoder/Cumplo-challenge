import React from 'react';

import ProfileCard from '../../components/ProfileCard';
import { useStateValue } from '../../context';

const Candidates = () => {
  const { candidates } = useStateValue();

  return (
    <ul className='Home__body--list'>
      {candidates?.map((item) => (
        <li key={item.id}>
          <ProfileCard
            id={item.id}
            name={item.name}
            store={item.store}
            votes={item.votes}
          />
        </li>
      ))}
    </ul>
  );
};

export default Candidates;
