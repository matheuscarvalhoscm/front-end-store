/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';
import ProductCard from '../components/ProductCard/ProductCard';

describe('Test ProductCard component', () => {
  it('Should render the correct information from products', () => {
    renderWithRouter(
      <ProductCard
        id="MLB2660706077"
        title="Apple iPhone 13 Pro Max (128 Gb) - Grafite"
        thumbnail="http://http2.mlstatic.com/D_879647-MLA47781235699_102021-I.jpg"
        price={7949.99}
      />,
    );
    const productTitle = screen.getByText('Apple iPhone 13 Pro Max (128 Gb) - Grafite');
    expect(productTitle).toBeInTheDocument();
    expect(productTitle.innerHTML).toEqual('Apple iPhone 13 Pro Max (128 Gb) - Grafite');

    const productImage = screen.getByRole('img');
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src');

    const productPrice = screen.getByText('R$ 7949.99');
    expect(productPrice).toBeInTheDocument();
  });
});
