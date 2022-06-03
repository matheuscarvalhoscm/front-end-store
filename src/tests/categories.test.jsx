/* eslint-disable no-undef */
import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import * as axios from 'axios';
import renderWithRouter from './utils/renderWithRouter';

import Categories from '../components/categories/Categories';
import { categoriesResponse } from './mocks/apiResponses';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

describe('Test Categories component', () => {
  beforeEach(() => {
    axios.get.mockImplementation(() => Promise.resolve(categoriesResponse));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render categories from the API', async () => {
    await waitFor(() => renderWithRouter(<Categories />));

    const categoriesHeading = screen.getByRole('heading', { level: 2 });
    expect(categoriesHeading).toBeInTheDocument();
    expect(categoriesHeading.innerHTML).toEqual('Categorias');
  });
});
