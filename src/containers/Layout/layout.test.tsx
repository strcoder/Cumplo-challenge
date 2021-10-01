/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import Layout from './index';

describe('<Layout />', () => {
  const history = createMemoryHistory();
  test('Component render', () => {
    const { getByText } = render(
      <Router history={history}>
        <Layout>
          <p>Test layout</p>
        </Layout>
      </Router>,
    );

    expect(getByText(/Test layout/i)).toBeTruthy();
  });
});
