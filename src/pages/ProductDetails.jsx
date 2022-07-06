import React from 'react';

import Header from '../components/Header/Header';
import Details from '../components/Details/Details';
import Footer from '../components/Footer/Footer';

function ProductDetails() {
  return (
    <main>
      <Header path="/details" />
      <Details />
      <Footer />
    </main>
  );
}

export default ProductDetails;
