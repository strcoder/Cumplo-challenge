/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import ProfileCard from './index';
import { Provider } from '../../context';

describe('<ProfileCard />', () => {
  const history = createMemoryHistory();
  test('Component render', () => {
    const { getByText } = render(
      <Provider>
        <Router history={history}>
          <ProfileCard
            id='1234'
            votes={5}
            name='Lee Marquardt'
            store='Roberts - Larkin'
          />
        </Router>
      </Provider>,
    );

    expect(getByText(/Lee Marquardt/i)).toBeTruthy();
    expect(getByText(/Roberts - Larkin/i)).toBeTruthy();
  });

  test('Go to vote page', () => {
    const { getByText } = render(
      <Provider>
        <Router history={history}>
          <ProfileCard
            id='1234'
            votes={5}
            name='Lee Marquardt'
            store='Roberts - Larkin'
          />
        </Router>
      </Provider>,
    );

    expect(getByText(/votar/i)).toBeInTheDocument();

    fireEvent.click(getByText(/votar/i));
    expect(history.location.pathname).toBe('/candidate/vote/1234');
  });
});
