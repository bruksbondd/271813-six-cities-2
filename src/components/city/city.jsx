import React from 'react';
import PropTypes from 'prop-types';

const City = ({name, selectedCity, onClick}) => {
  return <li className="locations__item" onClick={onClick}>
    <a className={`locations__item-link tabs__item ${selectedCity === name ? `tabs__item--active` : ``}`} href="#">
      <span>{name}</span>
    </a>
  </li>;
};

City.propTypes = {
  name: PropTypes.string.isRequired,
  selectedCity: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default City;
