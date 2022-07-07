import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const getFromLocalStorage = () => JSON.parse(localStorage.getItem('cart')) || [];
  const setOnLocalStorage = (data) => localStorage.setItem('cart', JSON.stringify(data));

  const [filterCategory, setFilterCategory] = useState('');
  const [cart, setCart] = useState(getFromLocalStorage());
  const [products, setProducts] = useState([]);

  const contextValue = {
    filterCategory,
    setFilterCategory,
    cart,
    setCart,
    products,
    setProducts,
    setOnLocalStorage,
  };

  return (
    <AppContext.Provider value={useMemo(() => contextValue)}>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
