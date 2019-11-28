import React from 'react';
import PropTypes from 'prop-types';

class SortType extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {handlerSortButton, typeSorting} = this.props;
    return <span className="places__sorting-type" tabIndex="0" onClick={handlerSortButton}>
      {typeSorting}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>;
  }
}

SortType.propTypes = {
  handlerSortButton: PropTypes.func,
  typeSorting: PropTypes.string,
};

export default SortType;
