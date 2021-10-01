import React from 'react';
import { useStateValue } from '../../context';
import { voteForCandidate } from '../../context/actions';
import './styles.scss';

type ProfileCardProps = {
  id: string,
  name: string,
  store: string,
  votes: number,
}

const ProfileCard = ({ id, name, store, votes }: ProfileCardProps) => {
  const { candidates, countdown, dispatch } = useStateValue();

  const handleVote = () => {
    voteForCandidate({ id, candidates, dispatch });
  };

  return (
    <div className='ProfileCard'>
      <button
        type='button'
        onClick={handleVote}
        disabled={countdown <= 0}
        className='ProfileCard--vote btn btn-sm'
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
