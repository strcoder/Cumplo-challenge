import axios from 'axios';
import React from 'react';
import './styles.scss';

type ProfileCardProps = {
  id: string,
  name: string,
  store: string,
  votes: number,
}

const ProfileCard = ({ id, name, store, votes }: ProfileCardProps) => {
  const API = process.env.API_URL;

  const handleVote = () => {
    axios({
      url: `${API}/api/v1/candidates/vote`,
      method: 'POST',
      data: { id },
    }).then(({ data }) => {
      console.log(data);
    });
  };

  return (
    <div className='ProfileCard'>
      <button
        type='button'
        onClick={handleVote}
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
