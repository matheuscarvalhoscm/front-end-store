import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import leftArrow from '../../icons/left-arrow.svg';

function BackPageLink({ pathName }) {
  return (
    <Link to={pathName}>
      <img src={leftArrow} alt="Voltar a página inicial" width="25px" />
    </Link>
  );
}

BackPageLink.defaultProps = {
  pathName: '/',
};

BackPageLink.propTypes = {
  pathName: PropTypes.string,
};

export default BackPageLink;
