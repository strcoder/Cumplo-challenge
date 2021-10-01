import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import './styles.scss';

const RegisteredVote = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.replace('/');
    }, 3000);
  }, []);

  return (
    <section className='RegisteredVote slideInRight'>
      <p><strong>¡Ya votaste! 👍</strong></p>
      <p>Ahora espera los resultados</p>
    </section>
  );
};

export default RegisteredVote;
