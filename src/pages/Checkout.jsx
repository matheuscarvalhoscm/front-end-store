import React from 'react';

import Header from '../components/Header/Header';
import CustomerProducts from '../components/CustomerProducts/CustomerProducts';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';
import Footer from '../components/Footer/Footer';

function Checkout() {
  return (
    <main className="checkout-main-container">
      <Header path="checkout" />
      <CustomerProducts path="checkout" />
      <CheckoutForm />
      <button type="button">
        Comprar
      </button>
      <Footer />
    </main>
  );
}

export default Checkout;
