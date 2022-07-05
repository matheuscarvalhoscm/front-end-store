import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import './styles/styles.css';

import Main from './pages/Main';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/details/:title" component={ProductDetails} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </AppProvider>
    </div>
  );
}

export default App;
