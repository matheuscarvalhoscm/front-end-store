import React from 'react';
import { screen, renderHook } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';
import ProductDetails from '../pages/ProductDetails';
import axios from 'axios';

jest.mock("axios");

describe('Test ProductDetails page', () => {
  it('Should render the correct elements', async () => {
    renderWithRouter(<ProductDetails />);

    expect(screen.getByText('Carregando detalhes do produto')).toBeInTheDocument();

    axios.get.mockImplementation(() => {});
    expect(axios.get).toHaveBeenCalledTimes(1);
    
    const productTitle = screen.getByRole('heading', { level: 1 });
    expect(productTitle).toBeInTheDocument();
    expect(productTitle.innerHTML).toEqual('Apple iPhone 13 Pro Max (128 Gb) - Grafite - R$ 7949.99');
  });
});
