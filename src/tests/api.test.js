/* eslint-disable no-undef */
import * as axios from 'axios';
import {
  getCategories,
  getProductsByQuery,
  getProductsByCategory,
  getProductsByCategoryAndQuery,
} from '../services/api';
import { categoriesResponse, mockedResponse } from './mocks/apiResponses';

jest.mock('axios');

describe('Testing MELI API calls', () => {
  it('Should be successful when calling the "CATEGORIES" endpoint', async () => {
    axios.get.mockImplementation(() => Promise.resolve(categoriesResponse));
    const categories = await getCategories();

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/categories');
    expect(categories).toEqual(categoriesResponse);
  });

  it('Should be successful when calling the "QUERY" endpoint', async () => {
    axios.get.mockImplementation(() => Promise.resolve(mockedResponse));

    const productsByQuery = await getProductsByQuery('Mouse');
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=Mouse');
    expect(productsByQuery).toEqual(mockedResponse);
  });

  it('Should be successful when calling the "CATEGORY_ID" endpoint', async () => {
    axios.get.mockImplementation(() => Promise.resolve(mockedResponse));

    const productsByCategory = await getProductsByCategory('MLB1648');
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?category=MLB1648');
    expect(productsByCategory).toEqual(mockedResponse);
  });

  it('Should be successful when calling the "$CATEGORY" and "$QUERY" endpoint', async () => {
    axios.get.mockImplementation(() => Promise.resolve(mockedResponse));

    const productsByCategoryAndQuery = await getProductsByCategoryAndQuery('MLB1648', 'Mouse');
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?category=MLB1648&q=Mouse');
    expect(productsByCategoryAndQuery).toEqual(mockedResponse);
  });

  it('Should return an error message when the API call fails', async () => {
    axios.get.mockImplementation(() => Promise.reject(new Error('Oops... internal error')));

    const categories = await getCategories();
    const productsByQuery = await getProductsByQuery('Mouse');
    const productsByCategory = await getProductsByCategory('MLB1648');
    const productsByCategoryAndQuery = await getProductsByCategoryAndQuery('MLB1648', 'Mouse');

    const apiCalls = [categories, productsByQuery, productsByCategory, productsByCategoryAndQuery];
    apiCalls.forEach((call) => {
      expect(call).toEqual('Oops... internal error');
    });
  });
});
