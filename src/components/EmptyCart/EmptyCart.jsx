import React from 'react';
import PropTypes from 'prop-types';

function EmptyCart({ title }) {
  return (
    <main className="empty-cart">
      <h1>{title}</h1>
      <h2>Seu carrinho está vazio :(</h2>
    </main>
  );
}

EmptyCart.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EmptyCart;
