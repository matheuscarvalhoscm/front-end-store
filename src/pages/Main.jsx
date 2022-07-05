import React from 'react';

import Header from '../components/Header/Header';
import Categories from '../components/categories/Categories';
import ProductList from '../components/productList/ProductList';

function Main() {
  return (
    <main className="product-list">
      <Header path="/" />
      <Categories />
      <ProductList />
    </main>
  );
}

export default Main;
