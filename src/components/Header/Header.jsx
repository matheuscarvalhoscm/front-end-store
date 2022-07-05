import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { getProductsByCategoryAndQuery } from '../../services/api';
import cartIcon from '../../icons/shopping-cart.svg';
import './header.css';

function Header({ path }) {
  const { filterCategory, setProducts, cart } = useContext(AppContext);
  const [searchInputText, setSearchInputText] = useState('');

  const handleSearch = async (category, query) => {
    const { data: { results } } = await getProductsByCategoryAndQuery(category, query);
    setProducts(results);
  };

  const cartQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  if (path !== '/') {
    return (
      <header>
        <h2>
          front-end
          <span>store</span>
        </h2>
        <Link to="/cart">
          <img name="cart" src={cartIcon} alt="Shopping cart icon" />
          <span>{cartQuantity}</span>
        </Link>
      </header>
    );
  }

  return (
    <header>
      <h2>
        front-end
        <span>store</span>
      </h2>
      <input
        type="text"
        name="search-input"
        placeholder="Digite algum termo de pesquisa"
        onChange={({ target }) => setSearchInputText(target.value)}
        value={searchInputText}
      />
      <button
        type="button"
        onClick={() => handleSearch(filterCategory, searchInputText)}
      >
        Buscar
      </button>
      <Link to="/cart">
        <img name="cart" src={cartIcon} alt="Shopping cart icon" />
        <span>{cartQuantity}</span>
      </Link>
    </header>
  );
}

Header.defaultProps = {
  path: '/',
};

Header.propTypes = {
  path: PropTypes.string,
};

export default Header;
