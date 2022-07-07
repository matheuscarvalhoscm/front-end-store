import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

import EmptyCart from '../EmptyCart/EmptyCart';

function CustomerProducts({ path }) {
  const history = useHistory();
  const { cart, setCart } = useContext(AppContext);

  const handleQuantity = (productId, event) => {
    const { value } = event.target;
    let updateProduct;
    if (value === '+') {
      updateProduct = cart.map((item) => (
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      updateProduct = cart.map((item) => (
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    }

    setCart(updateProduct);
  };

  const handleDelete = (productId) => {
    const updatedCart = cart.filter(({ id }) => id !== productId);
    setCart(updatedCart);
  };

  const totalValue = cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0).toFixed(2);
  const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const title = path === 'cart' ? `Carrinho de Compras (${totalQuantity})` : 'Revise seu pedido';

  const renderCart = (product) => (
    <div className="cart-items-buttons">
      <button
        type="button"
        value="-"
        onClick={(e) => handleQuantity(product.id, e)}
      >
        -
      </button>
      <p>{product.quantity}</p>
      <button
        type="button"
        value="+"
        onClick={(e) => handleQuantity(product.id, e)}
      >
        +
      </button>
      <p>{`R$ ${(product.price * product.quantity)}`}</p>
    </div>
  );

  const renderCheckout = (product) => (
    <div className="cart-items-buttons">
      <p>{product.quantity}</p>
      <p>{`R$ ${(product.price * product.quantity)}`}</p>
    </div>
  );

  const renderButton = () => (
    <button type="button" onClick={() => history.push('/checkout')}>
      Finalizar compra
    </button>
  );

  const deleteButtons = (product) => (
    <button
      className="delete-item-button"
      type="button"
      onClick={() => handleDelete(product.id)}
    >
      X
    </button>
  );

  if (cart.length < 1) return <EmptyCart title={title} />;

  return (
    <main className="cart">
      <h1>{title}</h1>
      <section className="cart-items-section">
        {
          cart.map((product) => (
            <div className="cart-items-inner" key={product.title}>
              <div className="cart-items-details">
                {path === 'cart' ? deleteButtons(product) : null}
                <img src={product.thumbnail} alt={product.id} />
                <p>{product.title}</p>
              </div>
              {path === 'cart' ? renderCart(product) : renderCheckout(product)}
            </div>
          ))
        }
      </section>
      <h2>{`Valor total da compra: R$ ${totalValue}`}</h2>
      {
        path === 'cart' ? renderButton() : null
      }
    </main>
  );
}

CustomerProducts.defaultProps = {
  path: '/',
};

CustomerProducts.propTypes = {
  path: PropTypes.string,
};

export default CustomerProducts;
