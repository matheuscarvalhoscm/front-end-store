import React, { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function ProductCard({
  id,
  title,
  thumbnail,
  price,
}) {
  const { cart, setCart } = useContext(AppContext);

  const handleAddToCart = () => {
    const isItemOnCart = cart.find((item) => item.id === id);
    if (!isItemOnCart) {
      const newItem = {
        id,
        title,
        thumbnail,
        price,
        quantity: 1,
      };
      const updatedCart = [...cart, newItem];
      setCart(updatedCart);
    } else {
      const cartWithoutUpdatedItem = cart.filter((item) => item.id !== id);
      isItemOnCart.quantity += 1;
      setCart([...cartWithoutUpdatedItem, isItemOnCart]);
    }
  };

  return (
    <div>
      <Link to={`/details/${title}`}>
        <p>{title}</p>
        <img src={thumbnail} alt={title} />
        <p>{price}</p>
      </Link>
      <button type="button" onClick={handleAddToCart}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
