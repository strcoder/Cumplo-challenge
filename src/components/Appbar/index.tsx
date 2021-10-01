import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import useTimer from '../../hooks/useTimer';
import { useStateValue } from '../../context';
import { setCountdown } from '../../context/actions';
import './styles.scss';

const Appbar = () => {
  const history = useHistory();
  const { countdown, dispatch } = useStateValue();
  const { setTimer, getTimer, setActiveTimer, finishTimer } = useTimer();

  useEffect(() => {
    if (countdown === 0) {
      history.replace('/result');
    }
    setTimer({ time: countdown });
    setActiveTimer(true);
  }, [countdown]);

  useEffect(() => {
    if (finishTimer) {
      dispatch(setCountdown(0));
      history.replace('/result');
    }
  }, [finishTimer]);

  return (
    <header className='Appbar'>
      <Link to='/'>
        <figure className='Appbar__logo'>
          <img
            src='/assets/logocumplo-vertical.png'
            alt='Cumplo logo'
            loading='lazy'
          />
        </figure>
      </Link>
      <div className='Appbar__counter'>
        <p>{getTimer()}</p>
      </div>
    </header>
  );
};

export default Appbar;
