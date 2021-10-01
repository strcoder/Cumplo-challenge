import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import { useStateValue } from '../../context';
import { voteForCandidate } from '../../context/actions';
import './styles.scss';

const Vote = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const params = useParams<{ id: string }>();
  const { candidates, dispatch } = useStateValue();
  const candidate = candidates?.find((item) => item.id === params.id);

  useEffect(() => {
    if (candidate) {
      voteForCandidate({ id: params.id, candidates, dispatch })
        .then((data) => {
          if (!data) {
            setError(true);
          }
        });
    }
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.replace('/');
      }, 3000);
    } else {
      setTimeout(() => {
        history.replace('/vote/registered');
      }, 3000);
    }
  }, [error]);

  return (
    <section className='Vote slideInRight'>
      {(error || !candidate) && (
        <p><strong>¡Ha ocurrido un error!</strong></p>
      )}
      {!error && candidate && (
        <>
          <div className='Vote__body'>
            <p><strong>+1</strong></p>
            <h1>¡Gracias por tu voto!</h1>
          </div>
          <div className='Vote__footer'>
            <p>Esperamos que a</p>
            <p><strong>{candidate?.name}</strong></p>
            <p>le vay muy bien</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Vote;
