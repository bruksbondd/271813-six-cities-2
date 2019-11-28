import React from 'react';
import PropTypes from 'prop-types';
import {TYPE_SORTING} from "../../mocks/offers.js";

class SortList extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {active, handlerSortByPriceToLow, handlerSortByPriceToTop, handlerSortByPopular, handlerSortByRating, typeSorting} = this.props;
    return <ul className={`places__options places__options--custom ${active ? `places__options--opened` : ``}`}>
      <li className={`places__option ${typeSorting === TYPE_SORTING.popular ? `places__option--active` : ``}`} tabIndex="0" onClick={handlerSortByPopular}>Popular</li>
      <li className={`places__option ${typeSorting === TYPE_SORTING.priceToTop ? `places__option--active` : ``}`} tabIndex="0" onClick={handlerSortByPriceToTop}>Price: low to high</li>
      <li className={`places__option ${typeSorting === TYPE_SORTING.priceToLow ? `places__option--active` : ``}`} tabIndex="0" onClick={handlerSortByPriceToLow}>Price: high to low</li>
      <li className={`places__option ${typeSorting === TYPE_SORTING.rating ? `places__option--active` : ``}`} tabIndex="0" onClick={handlerSortByRating}>Top rated first</li>
    </ul>;
  }
}

SortList.propTypes = {
  active: PropTypes.bool,
  handlerSortByPriceToLow: PropTypes.func,
  handlerSortByPriceToTop: PropTypes.func,
  handlerSortByPopular: PropTypes.func,
  handlerSortByRating: PropTypes.func,
  typeSorting: PropTypes.string
};

export default SortList;
