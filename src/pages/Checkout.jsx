import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import Header from '../components/Header/Header';
import CustomerProducts from '../components/CustomerProducts/CustomerProducts';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

function Checkout() {
  const { cart } = useContext(AppContext);

  if (cart.length < 1) {
    return (
      <main>
        <Header path="checkout" />
        <h1>Seu carrinho está vazio :(</h1>
      </main>
    );
  }

  return (
    <main className="checkout-main-container">
      <Header path="checkout" />
      <CustomerProducts path="checkout" />
      <CheckoutForm />
      <button type="button">
        Comprar
      </button>
    </main>
  );
}

export default Checkout;
