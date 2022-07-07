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
  const { handleAddToCart } = useContext(AppContext);

  return (
    <div className="product-card">
      <Link to={`/details/${title.replace('%', '')}`}>
        <p>{title}</p>
        <img src={thumbnail} alt={title} />
        <p>{`R$ ${price}`}</p>
        <span>{`Em até 12x de ${(price / 12).toFixed(2)}`}</span>
      </Link>
      <button
        type="button"
        onClick={() => handleAddToCart(id, title, thumbnail, price)}
      >
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
