/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import Vote from './index';
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

describe('<Vote />', () => {
  const history = createMemoryHistory();

  test('Component render', () => {
    history.push('/candidate/vote/ku8l0m6p');
    const { getByText } = render(
      <Provider initialState={{ candidates }}>
        <Router history={history}>
          <Route path='/candidate/vote/:id'>
            <Vote />
          </Route>
        </Router>
      </Provider>,
    );

    expect(getByText(/Wilfred McCullough DDS/i)).toBeTruthy();
  });

  test('Bad route id', () => {
    history.push('/candidate/vote/1234');
    const { getByText } = render(
      <Provider initialState={{ candidates }}>
        <Router history={history}>
          <Route path='/candidate/vote/:id'>
            <Vote />
          </Route>
        </Router>
      </Provider>,
    );

    expect(getByText(/¡Ha ocurrido un error!/i)).toBeTruthy();
  });
});
