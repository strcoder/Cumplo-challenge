/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import Result from './index';
import { Provider } from '../../context';

const winner = {
  id: 'ku8l0m6p',
  name: 'Wilfred McCullough DDS',
  store: 'Veum - Casper',
  votes: 0,
};

describe('<Result />', () => {
  const history = createMemoryHistory();

  test('Component render', () => {
    history.push('/result');
    const { getByText } = render(
      <Provider initialState={{ counter: 0, winner }}>
        <Router history={history}>
          <Result />
        </Router>
      </Provider>,
    );

    expect(getByText(/Wilfred McCullough DDS/i)).toBeTruthy();
  });
});
