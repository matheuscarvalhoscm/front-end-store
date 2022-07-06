import React from 'react';

import Header from '../components/Header/Header';
import CustomerProducts from '../components/CustomerProducts/CustomerProducts';

function Cart() {
  return (
    <div>
      <Header path="cart" />
      <CustomerProducts path="cart" />
    </div>
  );
}

export default Cart;
