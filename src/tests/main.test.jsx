/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';
import Main from '../pages/Main';
import App from '../App';

const searchInputPlaceholder = 'Digite algum termo de pesquisa';

describe('Test Main page and App.jsx', () => {
  it('Should render a search input', () => {
    renderWithRouter(<Main />);
    const searchInput = screen.getByPlaceholderText(searchInputPlaceholder);
    expect(searchInput).toBeInTheDocument();
  });

  it('Should render a search input', () => {
    renderWithRouter(<App />);
    const searchInput = screen.getByPlaceholderText(searchInputPlaceholder);
    expect(searchInput).toBeInTheDocument();
  });
});
