/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import NotFound from './index';

describe('<NotFound />', () => {
  test('Component render', () => {
    const { getByText } = render(
      <NotFound />,
    );

    expect(getByText(/404/i)).toBeTruthy();
    expect(getByText(/Not Found/i)).toBeTruthy();
  });
});
