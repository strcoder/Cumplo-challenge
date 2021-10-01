import React, { useEffect } from 'react';
import { useStateValue } from '../../context';
import { voteForCandidate } from '../../context/actions';
import useTimer from '../../hooks/useTimer';
import './styles.scss';

type ProfileCardProps = {
  id: string,
  name: string,
  store: string,
  votes: number,
}

const ProfileCard = ({ id, name, store, votes }: ProfileCardProps) => {
  const { candidates, countdown, dispatch } = useStateValue();
  const { setTimer, setActiveTimer, finishTimer } = useTimer();

  useEffect(() => {
    setTimer({ time: countdown });
    setActiveTimer(true);
  }, [countdown]);

  const handleVote = () => {
    voteForCandidate({ id, candidates, dispatch });
  };

  return (
    <div className='ProfileCard'>
      <button
        type='button'
        onClick={handleVote}
        disabled={finishTimer}
        className={`ProfileCard--vote btn-sm ${finishTimer ? 'btn-disable' : 'btn'}`}
      >
        Votar
      </button>
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
