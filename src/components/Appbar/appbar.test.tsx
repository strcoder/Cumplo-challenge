/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import Appbar from './index';
import { Provider } from '../../context';

describe('<Appbar />', () => {
  const history = createMemoryHistory();
  test('Component render', () => {
    const { getByText } = render(
      <Provider initialState={{ counter: 0 }}>
        <Router history={history}>
          <Appbar />
        </Router>
      </Provider>,
    );

    expect(getByText(/00:00/i)).toBeTruthy();
  });
});
