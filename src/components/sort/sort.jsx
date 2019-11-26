import React from 'react';
import PropTypes from 'prop-types';
import SortList from '../sort-list/sort-list.jsx';
import SortType from '../sort-type/sort-type.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";

class Sort extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {sortButton, isShownSort, sortByPriceToLow, sortByPriceToTop, sortByPopular, sortByRating, typeSorting} = this.props;
    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <SortType
        handlerSortButton={sortButton}
        typeSorting={typeSorting}
      />
      <SortList
        active={isShownSort}
        handlerSortByPriceToLow={sortByPriceToLow}
        handlerSortByPriceToTop={sortByPriceToTop}
        handlerSortByPopular={sortByPopular}
        handlerSortByRating={sortByRating}
        typeSorting={typeSorting}
      />
    </form>;
  }
}

const mapStateToProps = (state) => {
  const {isShownSort, typeSorting} = state;
  return {isShownSort, typeSorting};
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortButton: () => dispatch(ActionCreator.changeVisibleSort()),
    sortByPriceToLow: () => dispatch(ActionCreator.sortByPriceToLow()),
    sortByPriceToTop: () => dispatch(ActionCreator.sortByPriceToTop()),
    sortByPopular: () => dispatch(ActionCreator.getOffers()),
    sortByRating: () => dispatch(ActionCreator.sortByRating()),
  };
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Sort);

Sort.propTypes = {
  sortButton: PropTypes.func,
  sortByPriceToLow: PropTypes.func,
  sortByPriceToTop: PropTypes.func,
  sortByPopular: PropTypes.func,
  sortByRating: PropTypes.func,
  isShownSort: PropTypes.bool,
  typeSorting: PropTypes.string
};

export {connectedComponent as Sort};
