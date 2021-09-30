import React from 'react';
import './styles.scss';

const Loader = () => {
  return (
    <section className='Loader slideOutUp'>
      <figure className='Loader__image'>
        <img
          src='/assets/logocumplo-vertical.png'
          alt='Cumplo logo'
          loading='lazy'
        />
      </figure>
    </section>
  );
};

export default Loader;
