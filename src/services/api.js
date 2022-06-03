import axios from 'axios';

export const getCategories = async () => {
  try {
    const data = await axios.get('https://api.mercadolibre.com/sites/MLB/categories');
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getProductsByQuery = async (query) => {
  try {
    const data = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const data = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getProductsByCategoryAndQuery = async (categoryId, query) => {
  try {
    const data = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    return data;
  } catch (error) {
    return error.message;
  }
};
