import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ProfileCard from '../../components/ProfileCard';

type CandidatesProps = {
  id: string;
  name: string;
  store: string;
  votes: number;
};

const Candidates = () => {
  const API = process.env.API_URL;
  const [candidates, setCandidates] = useState<CandidatesProps[]>();

  useEffect(() => {
    axios({
      url: `${API}/api/v1/candidates`,
      method: 'GET',
    }).then(({ data }) => {
      setCandidates(data);
    }).catch(() => {
      setCandidates([]);
    });
  }, []);

  return (
    <ul className='Home__body--list'>
      {candidates?.map((item) => (
        <li key={item.id}>
          <ProfileCard
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
