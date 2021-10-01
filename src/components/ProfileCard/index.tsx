import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useTimer from '../../hooks/useTimer';
import { useStateValue } from '../../context';
import './styles.scss';

type ProfileCardProps = {
  id: string,
  name: string,
  store: string,
  votes: number,
}

const ProfileCard = ({ id, name, store, votes }: ProfileCardProps) => {
  const { countdown } = useStateValue();
  const { setTimer, setActiveTimer, finishTimer } = useTimer();

  useEffect(() => {
    setTimer({ time: countdown });
    setActiveTimer(true);
  }, [countdown]);

  return (
    <div className='ProfileCard'>
      <Link
        to={`/candidate/vote/${id}`}
        className={`ProfileCard--vote btn-sm ${finishTimer ? 'btn-disable' : 'btn'}`}
      >
        Votar
      </Link>
      <div className='ProfileCard__info'>
        <p className='single-line'>
          <strong>{name}</strong>
        </p>
        <p className='single-line'>{store}</p>
      </div>
      <div className='ProfileCard--count'>
        <p><strong>{votes}</strong></p>
      </div>
    </div>
  );
};

export default ProfileCard;
