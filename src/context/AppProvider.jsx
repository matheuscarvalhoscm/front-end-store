import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [filterCategory, setFilterCategory] = useState('');
  const [cart, setCart] = useState([]);

  const contextValue = {
    filterCategory,
    setFilterCategory,
    cart,
    setCart,
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
