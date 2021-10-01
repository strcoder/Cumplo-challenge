import React, { useEffect } from 'react';

import useTimer from '../../hooks/useTimer';
import { useStateValue } from '../../context';
import './styles.scss';

const Appbar = () => {
  const { countdown } = useStateValue();
  const { setTimer, getTimer, setActiveTimer } = useTimer();

  useEffect(() => {
    setTimer({ time: countdown });
    setActiveTimer(true);
  }, [countdown]);

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
