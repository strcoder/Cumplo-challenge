import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

import { useStateValue } from '../../context';
import { voteForCandidate } from '../../context/actions';
import './styles.scss';

const Vote = () => {
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const { candidates, dispatch } = useStateValue();
  const candidate = candidates?.find((item) => item.id === params.id);

  useEffect(() => {
    if (candidate) {
      voteForCandidate({ id: params.id, candidates, dispatch });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      history.replace('/vote/registered');
    }, 3000);
  }, []);

  return (
    <section className='Vote slideInRight'>
      <div className='Vote__body'>
        <p><strong>+1</strong></p>
        <h1>¡Gracias por tu voto!</h1>
      </div>
      <div className='Vote__footer'>
        <p>Esperamos que a</p>
        <p><strong>{candidate?.name}</strong></p>
        <p>le vay muy bien</p>
      </div>
    </section>
  );
};

export default Vote;
