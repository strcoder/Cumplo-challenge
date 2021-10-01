import axios from 'axios';
import React, { useEffect } from 'react';
import useTimer from '../../hooks/useTimer';
import './styles.scss';

const Appbar = () => {
  const API = process.env.API_URL;
  const { setTimer, getTimer, setActiveTimer } = useTimer();

  useEffect(() => {
    axios({
      url: `${API}/api/v1/countdown`,
      method: 'GET',
    }).then(({ data }) => {
      console.log(data);
      setTimer({ time: data.secondsLeft });
      setActiveTimer(true);
    });
  }, []);

  return (
    <header className='Appbar'>
      <figure className='Appbar__logo'>
        <img
          src='/assets/logocumplo-vertical.png'
          alt='Cumplo logo'
          loading='lazy'
        />
      </figure>
      <div className='Appbar__counter'>
        <p>{getTimer()}</p>
      </div>
    </header>
  );
};

export default Appbar;
