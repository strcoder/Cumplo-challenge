import React, { useEffect, useState } from 'react';

import Loader from '../../components/Loader';
import Candidates from '../../containers/Candidates';
import './styles.scss';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && (
        <Loader />
      )}
      <section className='Home'>
        <div className='Home__title'>
          <h1>El empleado del mes</h1>
        </div>
        <div className='Home__body'>
          <p>Los nominados son</p>
          <Candidates />
        </div>
      </section>
    </>
  );
};

export default Home;
