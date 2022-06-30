import React, { useState, useEffect, useContext } from 'react';
import { getProductsByQuery } from '../services/api';
import AppContext from '../context/AppContext';
import '../styles/productDetails/productDetails.css';

import BackPageLink from '../components/backPageLink/backPageLink';

function ProductDetails() {
  const url = window.location.pathname.slice(9);
  const { cart, setCart } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async (query) => {
      const { data: { results } } = await getProductsByQuery(query);
      setProduct(results[0]);
      setLoading(false);
    };

    fetchProduct(url);
  }, []);

  const handleAddToCart = (title, price, thumbnail) => {
    const isItemOnCart = cart.find((item) => item.title === title);
    if (!isItemOnCart) {
      const newItem = {
        title,
        thumbnail,
        price,
        quantity: 1,
      };
      const updatedCart = [...cart, newItem];
      setCart(updatedCart);
    } else {
      const cartWithoutUpdatedItem = cart.filter((item) => item.title !== title);
      isItemOnCart.quantity += 1;
      setCart([...cartWithoutUpdatedItem, isItemOnCart]);
    }
  };

  if (loading) return <h1>Carregando detalhes do produto</h1>;

  const {
    title,
    price,
    thumbnail,
    attributes,
  } = product;

  return (
    <main className="product-details">
      <BackPageLink pathName="/" />
      <section className="product-info">
        <h1>{`${title} - R$ ${price}`}</h1>
        <img src={thumbnail} alt={title} />
        <button
          type="button"
          onClick={() => handleAddToCart(title, price, thumbnail)}
        >
          Adicionar ao carrinho
        </button>
      </section>
      <section className="technical-specifications">
        <h2>Especificações técnicas</h2>
        <ul>
          {
            attributes.map((attribute) => (
              <li key={attribute.id}>{`${attribute.name}: ${attribute.value_name}`}</li>
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default ProductDetails;
