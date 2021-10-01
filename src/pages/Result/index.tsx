import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import Candidate from '../../utils/interface/Candidates';
import './styles.scss';

const Result = () => {
  const [winner, setWinner] = useState<Candidate>();

  useEffect(() => {
    axios({
      url: 'http://localhost:3001/api/v1/candidates/winner',
      method: 'GET',
    }).then(({ data }) => {
      setWinner(data);
    });
  }, []);

  return (
    <>
      {!winner && (
        <Loader />
      )}
      <section className='Result'>
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
    </>
  );
};

export default Result;
