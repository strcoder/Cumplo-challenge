/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import Candidates from './index';
import { Provider } from '../../context';

const candidates = [
  {
    id: 'ku8l0m6p',
    name: 'Wilfred McCullough DDS',
    store: 'Veum - Casper',
    votes: 0,
  },
  {
    id: 'ku8lcwvd',
    name: 'Wesley Grant Jr.',
    store: 'Flatley, Dooley and Lockman',
    votes: 0,
  },
  {
    id: 'ku8kul1c',
    name: 'Alexander Anderson',
    store: 'Collier LLC',
    votes: 0,
  },
];

describe('<Candidates />', () => {
  const history = createMemoryHistory();
  test('Component render', () => {
    const { getByText } = render(
      <Provider initialState={{ candidates }}>
        <Router history={history}>
          <Candidates />
        </Router>
      </Provider>,
    );

    expect(getByText(/Wilfred McCullough DDS/i)).toBeTruthy();
    expect(getByText(/Wesley Grant Jr./i)).toBeTruthy();
    expect(getByText(/Alexander Anderson/i)).toBeTruthy();
  });
});
