/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import Home from './index';

describe('<Home />', () => {
  const history = createMemoryHistory();
  test('Component render', () => {
    const { getByText } = render(
      <Router history={history}>
        <Home />
      </Router>,
    );

    expect(getByText(/El empleado del mes/i)).toBeTruthy();
    expect(getByText(/Los nominados son/i)).toBeTruthy();
  });
});
