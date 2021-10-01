import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router';
import Loader from '../../components/Loader';
import { useStateValue } from '../../context';
import { getWinner } from '../../context/actions';
import './styles.scss';

const Result = () => {
  const history = useHistory();
  const { countdown, dispatch, winner } = useStateValue();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      history.replace('/');
    }
  }, [countdown]);

  useEffect(() => {
    setError(false);
    setLoading(true);
    if (countdown === 0) {
      getWinner({ dispatch }).then((data) => {
        if (data) {
          setError(false);
        } else {
          setError(true);
        }
        setLoading(false);
      });
    }
  }, [countdown]);

  return (
    <>
      {loading && (
        <Loader />
      )}
      {error && (
        <section className='Result slideInDown'>
          <h1>No hubo ningun ganador</h1>
        </section>
      )}
      {winner && !loading && !error && (
        <section className='Result slideInDown'>
          <div className='Result__header'>
            <p>El empleado del mes es</p>
            <h1>{winner?.name}</h1>
            <small>{winner?.store}</small>
          </div>
          <figure className='Result__image'>
            <img src='/assets/winner.svg' alt='' />
          </figure>
          <div className='Result__footer'>
            <p>
              con
              {' '}
              <strong>{winner?.votes}</strong>
              {' '}
              votos
            </p>
            <p><strong>¡Felicidades!</strong></p>
          </div>
        </section>
      )}
    </>
  );
};

export default Result;
