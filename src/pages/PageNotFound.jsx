import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';

function PageNotFound() {
  return (
    <main>
      <Header path="not found" />
      <NotFound />
      <Footer />
    </main>
  );
}

export default PageNotFound;
