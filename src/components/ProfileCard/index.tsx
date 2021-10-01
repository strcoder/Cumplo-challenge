import React from 'react';
import './styles.scss';

type ProfileCardProps = {
  name: string,
  store: string,
  votes: number,
}

const ProfileCard = ({ name, store, votes }: ProfileCardProps) => {
  return (
    <div className='ProfileCard'>
      <button type='button' className='ProfileCard--vote btn btn-sm'>
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
