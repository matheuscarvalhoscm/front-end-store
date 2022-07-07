import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { getProductsByQuery } from '../../services/api';

function Details() {
  const url = window.location.pathname.slice(9);
  const { handleAddToCart } = useContext(AppContext);
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

  if (loading) {
    return (
      <main className="product-details loading">
        <h1>Carregando detalhes do produto</h1>
      </main>
    );
  }

  const {
    id,
    title,
    price,
    thumbnail,
    attributes,
  } = product;

  return (
    <section className="product-details">
      <section className="product-info">
        <h1>{`${title} - R$ ${price}`}</h1>
        <img src={thumbnail} alt={title} />
        <button
          type="button"
          onClick={() => handleAddToCart(id, title, price, thumbnail)}
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
    </section>
  );
}

export default Details;
