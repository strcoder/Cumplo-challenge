import React from 'react';
import './styles.scss';

const Appbar = () => {
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
        <p>30:00</p>
      </div>
    </header>
  );
};

export default Appbar;
