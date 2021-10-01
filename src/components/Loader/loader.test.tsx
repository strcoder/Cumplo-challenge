/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Loader from './index';

describe('<Loader />', () => {
  test('Component render', () => {
    const { getByAltText } = render(
      <Loader />,
    );

    expect(getByAltText(/Cumplo logo/i)).toBeTruthy();
  });
});
