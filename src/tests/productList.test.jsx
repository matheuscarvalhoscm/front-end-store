/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithRouter';
import ProductList from '../pages/Main';

const searchInputPlaceholder = 'Digite algum termo de pesquisa';
const initialRenderTexts = 'Digite algum termo de pesquisa ou escolha uma categoria.';

describe('Test productList component', () => {
  it('Should render a search input', () => {
    renderWithRouter(<ProductList />);
    const searchInput = screen.getByPlaceholderText(searchInputPlaceholder);
    expect(searchInput).toBeInTheDocument();
  });

  it('User should be able to type in the search input', () => {
    renderWithRouter(<ProductList />);
    const searchInput = screen.getByPlaceholderText(searchInputPlaceholder);
    userEvent.type(searchInput, 'Mouse');
    expect(searchInput.value).toBe('Mouse');
  });

  it('The page should initially render with the text "Digite algum termo [...]"', () => {
    renderWithRouter(<ProductList />);
    const initialText = screen.getAllByRole('heading', { level: 2 });
    expect(initialText[1]).toBeInTheDocument();
    expect(initialText[1].innerHTML).toEqual(initialRenderTexts);
  });

  it('There should exist a "cart button" on the page', () => {
    renderWithRouter(<ProductList />);
    const cartButton = screen.getByRole('img', { name: 'Shopping cart icon' });
    expect(cartButton).toBeInTheDocument();
  });

  it('The "cart button" should render to the path "/cart"', () => {
    const { history } = renderWithRouter(<ProductList />);
    const cartButton = screen.getByRole('img', { name: 'Shopping cart icon' });

    userEvent.click(cartButton);
    expect(history.location.pathname).toBe('/cart');
  });
});
