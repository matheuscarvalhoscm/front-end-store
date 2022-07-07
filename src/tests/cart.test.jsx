import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';

import Cart from '../pages/Cart';

describe('Test Cart page', () => {
  it('Should render a message when the cart is empty', () => {
    renderWithRouter(<Cart />);
    const emptyCartMessage = screen.getByRole('heading', { level: 2 });

    expect(emptyCartMessage.innerHTML).toEqual('Seu carrinho está vazio :(');
  });
});
