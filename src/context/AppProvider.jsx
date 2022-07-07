import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const getFromLocalStorage = () => JSON.parse(localStorage.getItem('cart')) || [];
  const setOnLocalStorage = (data) => localStorage.setItem('cart', JSON.stringify(data));

  const [filterCategory, setFilterCategory] = useState('');
  const [cart, setCart] = useState(getFromLocalStorage());
  const [products, setProducts] = useState([]);

  const handleAddToCart = (...product) => {
    const [id, title, thumbnail, price] = product;
    const isItemOnCart = cart.find((item) => item.id === id);
    const indexOfItem = cart.indexOf(isItemOnCart);

    const newItem = {
      id,
      title,
      thumbnail,
      price,
      quantity: 1,
    };

    if (!isItemOnCart) {
      const updatedCart = [...cart, newItem];
      setCart(updatedCart);
      setOnLocalStorage(updatedCart);
    } else {
      cart[indexOfItem].quantity += 1;
      setCart([...cart]);
      setOnLocalStorage(cart);
    }
  };

  const contextValue = {
    filterCategory,
    setFilterCategory,
    cart,
    setCart,
    products,
    setProducts,
    setOnLocalStorage,
    handleAddToCart,
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
