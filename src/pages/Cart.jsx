import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/cart/cart.css';

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

  const totalValue = cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0).toFixed(2);
  const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

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
    <main className="cart">
      <BackPageLink pathName="/" />
      <h1>{`Carrinho de Compras (${totalQuantity})`}</h1>
      <section className="cart-items-section">
        {
          cart.map((product) => (
            <div className="cart-items-inner" key={product.title}>
              <div className="cart-items-details">
                <img src={product.thumbnail} alt={product.id} />
                <p>{product.title}</p>
              </div>
              <div className="cart-items-buttons">
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
                <p>{`R$ ${(product.price * product.quantity)}`}</p>
              </div>
            </div>
          ))
        }
      </section>
      <h2>{`Valor total da compra: R$ ${totalValue}`}</h2>
      <button type="button" onClick={() => history.push('/checkout')}>
        Finalizar compra
      </button>
    </main>
  );
}

export default Cart;
