import React from 'react';

import Header from '../components/Header/Header';
import Categories from '../components/Categories/Categories';
import ProductList from '../components/ProductList/ProductList';
import Footer from '../components/Footer/Footer';

function Main() {
  return (
    <main className="product-list">
      <Header path="/" />
      <Categories />
      <ProductList />
      <Footer />
    </main>
  );
}

export default Main;
