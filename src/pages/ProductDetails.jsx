import React from 'react';

import Header from '../components/Header/Header';
import Details from '../components/Details/Details';

function ProductDetails() {
  return (
    <main>
      <Header path="/details" />
      <Details />
    </main>
  );
}

export default ProductDetails;
