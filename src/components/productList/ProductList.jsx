import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import AppContext from '../../context/AppContext';
import cartIcon from '../../icons/shopping-cart.svg';
import { getProductsByCategoryAndQuery } from '../../services/api';
import Categories from '../categories/Categories';
import ProductCard from '../productCard/ProductCard';
import './productList.css';

function ProductList() {
  const { filterCategory, cart } = useContext(AppContext);
  const [searchInputText, setSearchInputText] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async (category, query) => {
    const { data: { results } } = await getProductsByCategoryAndQuery(category, query);
    setProducts(results);
  };

  const cartQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  useEffect(() => ScrollReveal().reveal('.product-card'));

  return (
    <main className="product-list">
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
      <Categories />
      <section className="product-card-section">
        {
          products.length < 1 ? <h2>Digite algum termo de pesquisa ou escolha uma categoria.</h2>
            : products.map((product) => (
              <ProductCard
                id={product.id}
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price}
                key={product.id}
              />
            ))
        }
      </section>
    </main>
  );
}

export default ProductList;
