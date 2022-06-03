import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

import BackPageLink from '../components/backPageLink/backPageLink';

function Cart() {
  const history = useHistory();
  const { cart, setCart } = useContext(AppContext);

  const increaseQuantity = (productId) => {
    const updateProduct = cart.map((item) => (
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));

    setCart(updateProduct);
  };

  const decreaseQuantity = (productId) => {
    const updateProduct = cart.map((item) => (
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));

    setCart(updateProduct);
  };

  const totalValue = cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);

  if (cart.length < 1) {
    return (
      <main>
        <BackPageLink pathName="/" />
        <h1>Carrinho de Compras</h1>
        <h2>Seu carrinho está vazio</h2>
      </main>
    );
  }

  return (
    <main>
      <BackPageLink pathName="/" />
      <h1>Carrinho de Compras</h1>
      <ul>
        {
          cart.map((product) => (
            <li key={product.title}>
              <img src={product.thumbnail} alt={product.id} />
              <p>{product.title}</p>
              <button
                type="button"
                value="-"
                onClick={() => decreaseQuantity(product.id)}
              >
                -
              </button>
              <p>{product.quantity}</p>
              <button
                type="button"
                value="+"
                onClick={() => increaseQuantity(product.id)}
              >
                +
              </button>
              <p>{`R$ ${product.price * product.quantity}`}</p>
            </li>
          ))
        }
      </ul>
      <p>{`Valor total da compra: R$ ${totalValue}`}</p>
      <button type="button" onClick={() => history.push('/checkout')}>
        Finalizar compra
      </button>
    </main>
  );
}

export default Cart;
