/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import RegisteredVote from './index';

describe('<RegisteredVote />', () => {
  const history = createMemoryHistory();
  test('Component render', () => {
    const { getByText } = render(
      <Router history={history}>
        <RegisteredVote />
      </Router>,
    );

    expect(getByText(/¡Ya votaste! 👍/i)).toBeTruthy();
    expect(getByText(/Ahora espera los resultados/i)).toBeTruthy();
  });
});
