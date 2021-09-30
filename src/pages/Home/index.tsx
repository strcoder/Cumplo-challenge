import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section>
      {loading && (
        <Loader />
      )}
      {!loading && (
        <h1>Home</h1>
      )}
    </section>
  );
};

export default Home;
