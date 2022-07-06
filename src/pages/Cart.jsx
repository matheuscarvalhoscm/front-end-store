import React from 'react';

import Header from '../components/Header/Header';
import CustomerProducts from '../components/CustomerProducts/CustomerProducts';
import Footer from '../components/Footer/Footer';

function Cart() {
  return (
    <div>
      <Header path="cart" />
      <CustomerProducts path="cart" />
      <Footer />
    </div>
  );
}

export default Cart;
