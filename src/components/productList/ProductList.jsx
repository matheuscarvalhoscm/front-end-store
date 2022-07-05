import React, { useContext, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import AppContext from '../../context/AppContext';

import ProductCard from '../productCard/ProductCard';

function ProductList() {
  const { products } = useContext(AppContext);

  useEffect(() => ScrollReveal().reveal('.product-card'));

  return (
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
  );
}

export default ProductList;
