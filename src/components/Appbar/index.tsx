import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import useTimer from '../../hooks/useTimer';
import { useStateValue } from '../../context';
import './styles.scss';

const Appbar = () => {
  const history = useHistory();
  const { countdown } = useStateValue();
  const { setTimer, getTimer, setActiveTimer, finishTimer } = useTimer();

  useEffect(() => {
    setTimer({ time: countdown });
    setActiveTimer(true);
  }, [countdown]);

  useEffect(() => {
    if (finishTimer) {
      history.replace('/result');
    }
  }, [finishTimer]);

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
